import "./style.css";

type OptionTuple = [string, string, string];

interface QuizQuestion {
  prompt: string;
  options: OptionTuple;
  answer: number;
  explanation: string;
}

interface MilestoneStage {
  yearLabel: string;
  periodLabel: string;
  milestone: string;
  title: string;
  description: string;
  detailContent: string;
  imageSrc: string;
  imageAlt: string;
  questions: [QuizQuestion, QuizQuestion, QuizQuestion, QuizQuestion];
}

interface StageState {
  completed: boolean;
  questionIndex: number;
  lastWrong: number | null;
}

function getEl<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Không tìm thấy phần tử có id: ${id}`);
  }
  return element as T;
}

const stages: MilestoneStage[] = [
  {
    yearLabel: "1911-",
    periodLabel: "Trước 5-6-1911",
    milestone:
      "Hình thành lòng yêu nước và chí hướng tìm một con đường cứu nước mới cho dân tộc.",
    title: "Thời kỳ trước 5-6-1911",
    description:
      "Hình thành tư tưởng yêu nước và chí hướng tìm con đường cứu nước mới từ thực tiễn mất nước và truyền thống dân tộc.",
    detailContent:
      "Giai đoạn này là nền móng tư tưởng ban đầu của Người: lòng yêu nước, thương dân, nhận thức sâu sắc nỗi đau mất nước và khát vọng tìm một con đường cứu nước mới phù hợp thời đại.",
    imageSrc: "/images/hanh-trinh.svg",
    imageAlt: "Minh họa hành trình tư tưởng Hồ Chí Minh giai đoạn đầu",
    questions: [
      {
        prompt: "Nội dung cốt lõi của giai đoạn này là gì?",
        options: [
          "Hình thành lòng yêu nước sâu sắc và quyết tâm tìm đường cứu nước mới.",
          "Đã hoàn thiện toàn bộ hệ thống tư tưởng cách mạng Việt Nam.",
          "Đã trực tiếp lãnh đạo Tổng khởi nghĩa toàn quốc."
        ],
        answer: 0,
        explanation:
          "Đúng. Giai đoạn này đặt nền tảng tinh thần yêu nước, thương dân và ý chí tìm con đường mới cho dân tộc."
      },
      {
        prompt:
          "Trong giai đoạn này, tinh thần yêu nước của Người gắn liền với thực tiễn nào?",
        options: [
          "Thực tiễn mất nước và nỗi đau của nhân dân dưới ách thực dân.",
          "Thực tiễn đã hoàn thành công nghiệp hóa hiện đại hóa toàn diện.",
          "Thực tiễn không còn mâu thuẫn dân tộc trong xã hội."
        ],
        answer: 0,
        explanation:
          "Chính xác. Tư tưởng yêu nước của Người bắt nguồn từ thực tiễn đất nước và cuộc sống nhân dân."
      },
      {
        prompt: "Chí hướng “tìm đường cứu nước mới” thể hiện điều gì?",
        options: [
          "Quyết tâm tìm con đường phù hợp thời đại để giải phóng dân tộc.",
          "Chấp nhận mãi tình trạng lệ thuộc để ổn định xã hội.",
          "Từ bỏ truyền thống yêu nước của dân tộc Việt Nam."
        ],
        answer: 0,
        explanation:
          "Đúng. Đây là định hướng tư tưởng tiến bộ, hướng tới con đường cứu nước đúng đắn."
      },
      {
        prompt:
          "Vai trò của truyền thống dân tộc đối với giai đoạn hình thành tư tưởng ban đầu là gì?",
        options: [
          "Là nguồn cảm hứng và nền tảng văn hóa cho lòng yêu nước.",
          "Không có vai trò trong việc định hướng tư tưởng.",
          "Chỉ mang tính hình thức, không ảnh hưởng đến hành động."
        ],
        answer: 0,
        explanation:
          "Chính xác. Truyền thống yêu nước, chống ngoại xâm là nền tảng tinh thần quan trọng."
      }
    ]
  },
  {
    yearLabel: "1911",
    periodLabel: "6-6-1911 đến 30-12-1920",
    milestone:
      "Ngày 5-6-1911, Người ra đi tìm đường cứu nước và đến năm 1920 xác định con đường cách mạng vô sản.",
    title: "Thời kỳ 6-6-1911 đến 30-12-1920",
    description:
      "Người ra đi tìm đường cứu nước (năm 1911), khảo nghiệm nhiều con đường và đến với chủ nghĩa Mác - Lênin.",
    detailContent:
      "Từ thực tiễn nhiều quốc gia và phong trào, Người từng bước nhận ra con đường giải phóng dân tộc đúng đắn. Năm 1920 là bước ngoặt tư tưởng quan trọng khi lựa chọn con đường cách mạng vô sản.",
    imageSrc: "/images/hanh-trinh.svg",
    imageAlt: "Minh họa hành trình tìm đường cứu nước giai đoạn 1911 đến 1920",
    questions: [
      {
        prompt:
          "Sự kiện nào đánh dấu bước chuyển quan trọng sang con đường cách mạng vô sản?",
        options: [
          "Tham gia Đại hội Tours (1920), tán thành Quốc tế Cộng sản.",
          "Trở về Pác Bó trực tiếp lãnh đạo cách mạng năm 1941.",
          "Đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình năm 1945."
        ],
        answer: 0,
        explanation:
          "Chính xác. Năm 1920 là bước ngoặt tư tưởng, xác lập con đường giải phóng dân tộc gắn với cách mạng vô sản."
      },
      {
        prompt: "Năm 1911, Người ra đi với mục đích chính là gì?",
        options: [
          "Tìm đường cứu nước, khảo nghiệm các con đường cứu nước.",
          "Hoàn thiện ngay lập tức hệ thống tổ chức Đảng trong nước.",
          "Chỉ nhằm mục đích du học mà không gắn với cứu nước."
        ],
        answer: 0,
        explanation:
          "Đúng. Đây là hành động xuất phát từ trách nhiệm với dân tộc và đất nước."
      },
      {
        prompt:
          "Trong giai đoạn này, việc tiếp cận chủ nghĩa Mác - Lênin có ý nghĩa gì?",
        options: [
          "Giúp xác định phương pháp và lực lượng của cách mạng giải phóng dân tộc.",
          "Không liên quan đến vấn đề độc lập dân tộc.",
          "Chỉ mang tính lý thuyết, không có giá trị thực tiễn."
        ],
        answer: 0,
        explanation:
          "Chính xác. Đây là cơ sở khoa học cách mạng cho con đường cứu nước mới."
      },
      {
        prompt: "Bước ngoặt tư tưởng năm 1920 thể hiện ở điểm nào?",
        options: [
          "Chuyển từ tìm hiểu sang lựa chọn con đường cách mạng vô sản một cách dứt khoát.",
          "Từ bỏ mọi hoạt động cách mạng quốc tế.",
          "Khẳng định không cần gắn cách mạng Việt Nam với thời đại mới."
        ],
        answer: 0,
        explanation:
          "Đúng. Đây là điểm chuyển then chốt trong hành trình tư tưởng của Người."
      }
    ]
  },
  {
    yearLabel: "1920",
    periodLabel: "31-12-1920 đến 3-2-1930",
    milestone:
      "Chuẩn bị đầy đủ về chính trị, tư tưởng, tổ chức và đi đến sự ra đời của Đảng Cộng sản Việt Nam năm 1930.",
    title: "Thời kỳ 31-12-1920 đến 3-2-1930",
    description:
      "Hình thành những nội dung cơ bản của tư tưởng về cách mạng Việt Nam, chuẩn bị về chính trị, tư tưởng và tổ chức.",
    detailContent:
      "Người tích cực chuẩn bị điều kiện tư tưởng và tổ chức cho cách mạng Việt Nam. Thành quả nổi bật là sự ra đời của Đảng Cộng sản Việt Nam, tạo hạt nhân lãnh đạo thống nhất.",
    imageSrc: "/images/hanh-trinh.svg",
    imageAlt: "Minh họa giai đoạn chuẩn bị và thành lập Đảng Cộng sản Việt Nam",
    questions: [
      {
        prompt: "Thành quả có ý nghĩa quyết định của giai đoạn này là gì?",
        options: [
          "Thành lập Đảng Cộng sản Việt Nam vào ngày 3-2-1930.",
          "Chiến dịch Điện Biên Phủ năm 1954.",
          "Ký Hiệp định Geneva năm 1954."
        ],
        answer: 0,
        explanation:
          "Đúng. Sự ra đời của Đảng là kết quả tập hợp và thống nhất lực lượng cách mạng theo đường lối đúng đắn."
      },
      {
        prompt: "Nội dung chuẩn bị quan trọng của giai đoạn này là gì?",
        options: [
          "Chuẩn bị về chính trị, tư tưởng và tổ chức cho cách mạng Việt Nam.",
          "Chỉ chuẩn bị về quân sự mà không cần tư tưởng.",
          "Không cần thống nhất lực lượng cách mạng."
        ],
        answer: 0,
        explanation:
          "Chính xác. Đây là những điều kiện cần thiết để hình thành Đảng và đường lối cách mạng."
      },
      {
        prompt: "Vai trò của Đảng Cộng sản Việt Nam sau khi ra đời là gì?",
        options: [
          "Là hạt nhân lãnh đạo, tập hợp lực lượng cách mạng theo đường lối đúng đắn.",
          "Chỉ đóng vai trò tư vấn, không lãnh đạo cách mạng.",
          "Không liên quan đến sự phát triển của phong trào cách mạng."
        ],
        answer: 0,
        explanation:
          "Đúng. Đảng ra đời đáp ứng yêu cầu khách quan của cách mạng Việt Nam."
      },
      {
        prompt:
          "Mối quan hệ giữa tư tưởng về cách mạng Việt Nam và thực tiễn giai đoạn này là gì?",
        options: [
          "Tư tưởng được hình thành và thử thách gắn với chuẩn bị tổ chức, chính trị.",
          "Tư tưởng tách rời hoàn toàn khỏi thực tiễn.",
          "Tư tưởng chỉ dừng ở khẩu hiệu, không đi vào tổ chức."
        ],
        answer: 0,
        explanation:
          "Chính xác. Tư tưởng và thực tiễn cách mạng thống nhất với nhau."
      }
    ]
  },
  {
    yearLabel: "1930",
    periodLabel: "4-2-1930 đến 28-1-1941",
    milestone:
      "Kiên định bảo vệ đường lối giải phóng dân tộc đúng đắn trong bối cảnh nhiều thử thách.",
    title: "Thời kỳ 4-2-1930 đến 28-1-1941",
    description:
      "Vượt qua thử thách, kiên trì giữ vững đường lối giải phóng dân tộc, phương pháp cách mạng đúng đắn và sáng tạo.",
    detailContent:
      "Trong hoàn cảnh khó khăn, tư tưởng kiên định mục tiêu độc lập dân tộc gắn liền với đường lối cách mạng đúng đắn được bảo vệ và củng cố, chuẩn bị cho bước phát triển mới.",
    imageSrc: "/images/hanh-trinh.svg",
    imageAlt: "Minh họa giai đoạn giữ vững đường lối cách mạng Việt Nam",
    questions: [
      {
        prompt: "Ý nghĩa trọng tâm của giai đoạn này là gì?",
        options: [
          "Củng cố và bảo vệ đường lối cách mạng Việt Nam trong hoàn cảnh khó khăn.",
          "Đã hoàn thành mục tiêu thống nhất đất nước ngay trong giai đoạn này.",
          "Không còn cần vai trò lãnh đạo của Đảng."
        ],
        answer: 0,
        explanation:
          "Chính xác. Tinh thần kiên định đường lối là yếu tố bảo đảm cho thắng lợi ở các giai đoạn tiếp theo."
      },
      {
        prompt: "Trong giai đoạn này, “thử thách” chủ yếu đòi hỏi điều gì?",
        options: [
          "Bản lĩnh kiên định đường lối và phương pháp cách mạng đúng đắn.",
          "Từ bỏ mục tiêu độc lập dân tộc để dễ dàng đối thoại.",
          "Giảm vai trò tổ chức Đảng trong đấu tranh."
        ],
        answer: 0,
        explanation:
          "Đúng. Thử thách khách quan đòi hỏi sự kiên định và sáng tạo trong lãnh đạo."
      },
      {
        prompt: "Khái niệm “phương pháp cách mạng đúng đắn” gắn với nội dung nào?",
        options: [
          "Kết hợp đúng mức các mặt đấu tranh, bảo đảm mục tiêu giải phóng dân tộc.",
          "Chỉ dùng một hình thức đấu tranh duy nhất trong mọi hoàn cảnh.",
          "Không cần dựa trên thực tiễn cách mạng Việt Nam."
        ],
        answer: 0,
        explanation:
          "Chính xác. Phương pháp đúng đắn là điều kiện để đường lối phát huy hiệu quả."
      },
      {
        prompt: "Giữ vững đường lối trong giai đoạn này có ý nghĩa lâu dài ra sao?",
        options: [
          "Tạo nền tảng cho thắng lợi của các giai đoạn cách mạng tiếp theo.",
          "Chỉ có ý nghĩa ngắn hạn, không ảnh hưởng tương lai.",
          "Làm chậm tiến trình cách mạng của dân tộc."
        ],
        answer: 0,
        explanation:
          "Đúng. Kiên định đường lối là yếu tố then chốt để vượt qua khó khăn."
      }
    ]
  },
  {
    yearLabel: "1941",
    periodLabel: "29-1-1941 đến 2-9-1969",
    milestone:
      "Tư tưởng Hồ Chí Minh tiếp tục phát triển toàn diện, trực tiếp soi đường cho cách mạng Việt Nam.",
    title: "Thời kỳ 29-1-1941 đến 2-9-1969",
    description:
      "Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho cách mạng Việt Nam qua đấu tranh giành độc lập và xây dựng đất nước.",
    detailContent:
      "Đây là giai đoạn tư tưởng Hồ Chí Minh được kiểm chứng và phát triển toàn diện trong thực tiễn lãnh đạo cách mạng, trở thành nền tảng tư tưởng và kim chỉ nam cho sự nghiệp cách mạng Việt Nam.",
    imageSrc: "/images/hanh-trinh.svg",
    imageAlt: "Minh họa giai đoạn tư tưởng Hồ Chí Minh phát triển toàn diện",
    questions: [
      {
        prompt: "Điểm nổi bật của giai đoạn này là gì?",
        options: [
          "Tư tưởng Hồ Chí Minh phát triển toàn diện, dẫn dắt sự nghiệp cách mạng của Đảng và nhân dân.",
          "Chỉ tập trung hoạt động ở nước ngoài, chưa gắn với thực tiễn trong nước.",
          "Tư tưởng không còn ảnh hưởng đến đường lối cách mạng."
        ],
        answer: 0,
        explanation:
          "Đúng. Đây là giai đoạn tư tưởng Hồ Chí Minh tỏa sáng trong thực tiễn lãnh đạo cách mạng và xây dựng quốc gia."
      },
      {
        prompt: "Tư tưởng Hồ Chí Minh giai đoạn này gắn chặt với thực tiễn nào?",
        options: [
          "Đấu tranh giành độc lập và xây dựng đất nước theo hướng tiến bộ.",
          "Chỉ gắn với hoạt động văn hóa nghệ thuật, không gắn chính trị.",
          "Không còn phù hợp với yêu cầu phát triển đất nước."
        ],
        answer: 0,
        explanation:
          "Chính xác. Thực tiễn cách mạng là đất để tư tưởng phát triển và hoàn thiện."
      },
      {
        prompt: "Vai trò “soi đường” của tư tưởng Hồ Chí Minh được hiểu thế nào?",
        options: [
          "Định hướng đúng đắn cho đường lối và các bước đi của cách mạng.",
          "Chỉ mang tính khuyến khích tinh thần, không định hướng hành động.",
          "Thay thế hoàn toàn vai trò của nhân dân trong cách mạng."
        ],
        answer: 0,
        explanation:
          "Đúng. Tư tưởng Hồ Chí Minh có giá trị định hướng chiến lược và phương pháp."
      },
      {
        prompt: "Ý nghĩa của giai đoạn phát triển toàn diện đối với cách mạng Việt Nam là gì?",
        options: [
          "Tạo nền tảng tư tưởng vững chắc cho sự nghiệp đổi mới và phát triển lâu dài.",
          "Kết thúc vai trò lý luận của cách mạng Việt Nam.",
          "Chỉ còn giá trị trong đấu tranh giành độc lập ban đầu."
        ],
        answer: 0,
        explanation:
          "Chính xác. Tư tưởng Hồ Chí Minh có giá trị xuyên suốt các thời kỳ cách mạng."
      }
    ]
  }
];

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

const QUESTIONS_PER_MILESTONE = 4;

const stageStates: StageState[] = stages.map(() => ({
  completed: false,
  questionIndex: 0,
  lastWrong: null
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
  statusEl.textContent = `Đang chọn: Giai đoạn ${activeStage + 1}/${stages.length} • Câu ${qIndex + 1}/${QUESTIONS_PER_MILESTONE} (Đã mở khóa đến Cột mốc ${maxUnlockedIndex + 1})`;
  questionEl.textContent = question.prompt;

  question.options.forEach((option: string, index: number) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    const showCorrectHint = state.lastWrong !== null;
    if (showCorrectHint && index === question.answer) {
      btn.classList.add("correct");
    }
    if (state.lastWrong !== null && index === state.lastWrong) {
      btn.classList.add("wrong");
    }
    btn.addEventListener("click", () => selectOption(index));

    optionsEl.appendChild(btn);
  });

  if (state.lastWrong === null) {
    feedbackEl.textContent =
      "Hãy trả lời đúng lần lượt 4 câu hỏi của cột mốc này. Chỉ khi hoàn thành đúng, khung bên phải mới mở và cột mốc tiếp theo mới được mở khóa.";
  } else {
    feedbackEl.textContent =
      "Chưa chính xác. Bạn hãy xem đáp án đúng được tô xanh, sau đó chọn lại cho đến khi đúng để sang câu tiếp theo.";
  }

  detailPanelEl.classList.add("locked");
  detailTitleEl.textContent = "Nội dung giai đoạn";
  detailTextEl.textContent = "";
  detailImageEl.classList.add("hidden");
  detailImageEl.removeAttribute("src");
  detailImageEl.alt = "Hình minh họa giai đoạn";

  updateNextMilestoneButton();
}

function selectOption(index: number): void {
  const stage = stages[activeStage];
  const state = stageStates[activeStage];
  if (state.completed) {
    return;
  }

  const question = getActiveQuestion(activeStage);

  if (index === question.answer) {
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
    state.lastWrong = index;
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
  });
  resultCard.classList.add("hidden");
  renderTimeline();
  renderStage();
  updateResultButton();
});

renderTimeline();
renderStage();
updateResultButton();
