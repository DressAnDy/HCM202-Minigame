import "../styles/app.css";

import { getEl } from "../lib/dom";
import { stages } from "../data/stages";
import type { MilestoneStage, QuizQuestion, StageState } from "../types/quiz";
import { QUESTIONS_PER_MILESTONE } from "./constants";

function shuffleOptionOrder(length: number): number[] {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

const timelineEl = getEl<HTMLDivElement>("timeline");
const statusEl = getEl<HTMLDivElement>("status");
const titleEl = getEl<HTMLHeadingElement>("period-title");
const descEl = getEl<HTMLParagraphElement>("period-desc");
const questionEl = getEl<HTMLDivElement>("question");
const optionsEl = getEl<HTMLDivElement>("options");
const feedbackEl = getEl<HTMLParagraphElement>("feedback");
const detailPanelEl = getEl<HTMLElement>("detail-panel");
const detailTitleEl = getEl<HTMLHeadingElement>("detail-title");
const detailTextEl = getEl<HTMLParagraphElement>("detail-text");
const detailImageEl = getEl<HTMLImageElement>("detail-image");
const restartBtn = getEl<HTMLButtonElement>("restart-btn");
const nextMilestoneBtn = getEl<HTMLButtonElement>("next-milestone-btn");
const resultBtn = getEl<HTMLButtonElement>("result-btn");
const resultCard = getEl<HTMLElement>("result-card");
const finalText = getEl<HTMLParagraphElement>("final-text");

const stageStates: StageState[] = stages.map(() => ({
  completed: false,
  questionIndex: 0,
  lastWrong: null,
  optionOrder: null,
  shuffleKey: -1
}));

let activeStage = 0;
let score = 0;
let maxUnlockedIndex = 0;

function isStageUnlocked(index: number): boolean {
  return index <= maxUnlockedIndex;
}

function getActiveQuestion(stageIndex: number): QuizQuestion {
  const qIndex = stageStates[stageIndex].questionIndex;
  return stages[stageIndex].questions[qIndex];
}

function renderTimeline(): void {
  timelineEl.innerHTML = "";

  stages.forEach((stage: MilestoneStage, index: number) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.classList.add(index % 2 === 0 ? "upper" : "lower");

    const node = document.createElement("button");
    node.className = "timeline-node";
    node.type = "button";
    node.textContent = stage.yearLabel;

    const unlocked = isStageUnlocked(index);
    node.disabled = !unlocked;
    if (!unlocked) {
      node.classList.add("locked");
      node.title =
        "Cột mốc này đang khóa. Hãy hoàn thành đúng cột mốc trước đó để mở khóa.";
    }

    if (index === activeStage) {
      node.classList.add("active");
    }

    const state = stageStates[index];
    if (state.completed) {
      node.classList.add("done");
    } else if (state.lastWrong !== null) {
      node.classList.add("wrong");
    }

    node.addEventListener("click", () => {
      if (!isStageUnlocked(index)) {
        return;
      }
      activeStage = index;
      renderTimeline();
      renderStage();
    });

    const label = document.createElement("p");
    label.className = "timeline-label";
    label.textContent = `Cột mốc ${index + 1}: ${stage.periodLabel}`;

    item.appendChild(node);
    item.appendChild(label);
    timelineEl.appendChild(item);
  });
}

function renderStage(): void {
  const stage = stages[activeStage];
  const state = stageStates[activeStage];
  const qIndex = state.questionIndex;

  titleEl.textContent = stage.title;
  descEl.textContent = stage.description;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  if (state.completed) {
    statusEl.textContent = `Đang xem: Giai đoạn ${activeStage + 1}/${stages.length} • Đã hoàn thành 4/4 (Đã mở khóa đến Cột mốc ${maxUnlockedIndex + 1})`;
    questionEl.textContent =
      "Bạn đã hoàn thành đúng 4/4 câu hỏi của cột mốc này. Nội dung chi tiết nằm ở khung bên phải.";
    feedbackEl.textContent =
      "Bạn có thể chuyển sang cột mốc tiếp theo bằng nút “Cột mốc tiếp theo” hoặc chọn trên timeline.";
    detailPanelEl.classList.remove("locked");
    detailTitleEl.textContent = `Dấu mốc lịch sử - ${stage.title}`;
    detailTextEl.innerHTML = `<strong>${stage.milestone}</strong><br/><br/>${stage.detailContent}`;
    detailImageEl.src = stage.imageSrc;
    detailImageEl.alt = stage.imageAlt;
    detailImageEl.classList.remove("hidden");
    updateNextMilestoneButton();
    return;
  }

  const question = stage.questions[qIndex];
  if (
    state.optionOrder === null ||
    state.shuffleKey !== qIndex ||
    state.optionOrder.length !== question.options.length
  ) {
    state.optionOrder = shuffleOptionOrder(question.options.length);
    state.shuffleKey = qIndex;
  }
  const optionOrder = state.optionOrder;

  statusEl.textContent = `Đang chọn: Giai đoạn ${activeStage + 1}/${stages.length} • Câu ${qIndex + 1}/${QUESTIONS_PER_MILESTONE} (Đã mở khóa đến Cột mốc ${maxUnlockedIndex + 1})`;
  questionEl.textContent = question.prompt;

  optionOrder.forEach((originalIndex: number, displayIndex: number) => {
    const option = question.options[originalIndex];
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    if (state.lastWrong !== null && displayIndex === state.lastWrong) {
      btn.classList.add("wrong");
    }
    btn.addEventListener("click", () => selectOption(displayIndex));

    optionsEl.appendChild(btn);
  });

  if (state.lastWrong === null) {
    feedbackEl.textContent =
      "Hãy trả lời đúng lần lượt 4 câu hỏi của cột mốc này. Chỉ khi hoàn thành đúng, khung bên phải mới mở và cột mốc tiếp theo mới được mở khóa.";
  } else {
    feedbackEl.textContent =
      "Chưa chính xác. Hãy chọn lại cho đến khi đúng để sang câu tiếp theo.";
  }

  detailPanelEl.classList.add("locked");
  detailTitleEl.textContent = "Nội dung giai đoạn";
  detailTextEl.textContent = "";
  detailImageEl.classList.add("hidden");
  detailImageEl.removeAttribute("src");
  detailImageEl.alt = "Hình minh họa giai đoạn";

  updateNextMilestoneButton();
}

function selectOption(displayIndex: number): void {
  const stage = stages[activeStage];
  const state = stageStates[activeStage];
  if (state.completed) {
    return;
  }

  const question = getActiveQuestion(activeStage);
  const order = state.optionOrder;
  if (!order || order.length !== question.options.length) {
    return;
  }
  const pickedOriginal = order[displayIndex];

  if (pickedOriginal === question.answer) {
    state.lastWrong = null;

    if (state.questionIndex < QUESTIONS_PER_MILESTONE - 1) {
      state.questionIndex += 1;
    } else {
      state.completed = true;
      if (activeStage === maxUnlockedIndex) {
        score += 1;
        if (maxUnlockedIndex < stages.length - 1) {
          maxUnlockedIndex += 1;
        }
      }
    }
  } else {
    state.lastWrong = displayIndex;
  }

  renderTimeline();
  renderStage();
  updateResultButton();
}

function updateNextMilestoneButton(): void {
  const state = stageStates[activeStage];
  const hasNext = activeStage < stages.length - 1;

  if (!state.completed || !hasNext) {
    nextMilestoneBtn.classList.add("hidden");
    nextMilestoneBtn.disabled = true;
    return;
  }

  nextMilestoneBtn.classList.remove("hidden");
  nextMilestoneBtn.disabled = false;
}

function showResult(): void {
  finalText.innerHTML = `
    Bạn đã hoàn thành minigame với <strong>${score}/${stages.length}</strong> cột mốc đúng.<br/><br/>
    <strong>Trọng tâm quan trọng nhất:</strong> Giai đoạn <strong>6-6-1911 đến 30-12-1920</strong> cùng bước ngoặt tư tưởng năm 1920 được xem là then chốt, vì đây là lúc Chủ tịch Hồ Chí Minh xác định con đường giải phóng dân tộc theo cách mạng vô sản.<br/><br/>
    <strong>Yếu tố quyết định:</strong> Phẩm chất cá nhân của Người - lòng yêu nước nồng nàn, tư duy độc lập, bản lĩnh kiên định, đạo đức cách mạng và sự gắn bó với Nhân dân - là nền tảng để hình thành và phát triển tư tưởng Hồ Chí Minh một cách nhất quán, sáng tạo.
  `;
  resultCard.classList.remove("hidden");
}

function updateResultButton(): void {
  const isAllCompleted = stageStates.every((s: StageState) => s.completed);
  resultBtn.disabled = !isAllCompleted;
}

resultBtn.addEventListener("click", () => {
  showResult();
});

nextMilestoneBtn.addEventListener("click", () => {
  const nextIndex = activeStage + 1;
  if (!isStageUnlocked(nextIndex)) {
    return;
  }
  activeStage = nextIndex;
  renderTimeline();
  renderStage();
});

restartBtn.addEventListener("click", () => {
  activeStage = 0;
  score = 0;
  maxUnlockedIndex = 0;
  stageStates.forEach((s: StageState) => {
    s.completed = false;
    s.questionIndex = 0;
    s.lastWrong = null;
    s.optionOrder = null;
    s.shuffleKey = -1;
  });
  resultCard.classList.add("hidden");
  renderTimeline();
  renderStage();
  updateResultButton();
});

renderTimeline();
renderStage();
updateResultButton();

