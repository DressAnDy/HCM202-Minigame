import fs from "node:fs";
import path from "node:path";

/**
 * Trích mảng literal cấp cao nhất sau marker `var t=` trong bundle Vite đã minify.
 * Không dùng regex greedy vì bên trong có mảng `questions:[...]` làm regex `*?` dừng sớm.
 */
function extractStagesArrayLiteral(js, marker = "var t=") {
  const start = js.indexOf(marker);
  if (start === -1) {
    throw new Error(`Không tìm thấy marker: ${marker}`);
  }

  const bracketPos = js.indexOf("[", start + marker.length);
  if (bracketPos === -1) {
    throw new Error("Không tìm thấy '[' sau marker stages");
  }

  let i = bracketPos;
  let depth = 0;

  let inTemplate = false;
  let templateExprDepth = 0;
  let braceDepth = 0;

  const isIgnoredForArrayDepth = () => inTemplate && templateExprDepth > 0;

  while (i < js.length) {
    const ch = js[i];

    if (inTemplate) {
      if (templateExprDepth === 0) {
        if (ch === "`") {
          const prev = js[i - 1];
          if (prev !== "\\") {
            inTemplate = false;
          }
          i += 1;
          continue;
        }

        if (ch === "$" && js[i + 1] === "{") {
          templateExprDepth += 1;
          braceDepth = 1;
          i += 2;
          continue;
        }

        i += 1;
        continue;
      }

      // Trong `${ ... }` của template literal
      if (ch === "{") {
        braceDepth += 1;
      } else if (ch === "}") {
        braceDepth -= 1;
        if (braceDepth === 0) {
          templateExprDepth -= 1;
        }
      } else if (ch === "`") {
        // Template lồng trong biểu thức (hiếm) — xử lý tối thiểu
        const prev = js[i - 1];
        if (prev !== "\\") {
          // bật/tắt template lồng
          // Nếu đang trong expr và gặp backtick, coi như bắt đầu/kết thúc template lồng
          // Dùng cờ đơn giản: đếm số backtick lẻ trong expr (đủ cho bundle hiện tại)
          inTemplate = !inTemplate;
        }
      }

      i += 1;
      continue;
    }

    // Ngoài template literal
    if (ch === "`") {
      const prev = js[i - 1];
      if (prev !== "\\") {
        inTemplate = true;
      }
      i += 1;
      continue;
    }

    if (!isIgnoredForArrayDepth()) {
      if (ch === "[") {
        depth += 1;
      } else if (ch === "]") {
        depth -= 1;
        if (depth === 0) {
          return js.slice(bracketPos, i + 1);
        }
      }
    }

    i += 1;
  }

  throw new Error("Không trích được mảng stages (EOF trước khi đóng []).");
}

const assetsDir = path.join("dist", "assets");
if (!fs.existsSync(assetsDir)) {
  throw new Error("Chưa có thư mục dist/assets. Hãy chạy `npm run build` trước.");
}

const candidates = fs
  .readdirSync(assetsDir)
  .filter((f) => /^index-.*\.js$/.test(f))
  .map((f) => ({
    name: f,
    mtimeMs: fs.statSync(path.join(assetsDir, f)).mtimeMs
  }))
  .sort((a, b) => b.mtimeMs - a.mtimeMs);

const jsFile = candidates[0]?.name;
if (!jsFile) {
  throw new Error("Không tìm thấy file bundle index-*.js trong dist/assets");
}

const jsPath = path.join(assetsDir, jsFile);
const js = fs.readFileSync(jsPath, "utf8");

const literal = extractStagesArrayLiteral(js);

// Bundle dùng template literal backtick cho chuỗi, vẫn parse được bằng JS.
// eslint-disable-next-line no-new-func
const stages = new Function(`return ${literal}`)();

const outPath = path.join("src", "data", "stages.ts");
const json = JSON.stringify(stages, null, 2);

const content = `import type { MilestoneStage } from "../types/quiz";

export const stages = JSON.parse(\`${json.replace(/`/g, "\\`")}\`) as MilestoneStage[];
`;

fs.writeFileSync(outPath, `${content}\n`, "utf8");
console.log(`Wrote ${outPath} from ${jsPath} (milestones=${stages.length})`);
