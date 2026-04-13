import type { MilestoneStage } from "../types/quiz";

export const stages = JSON.parse(`[
  {
    "yearLabel": "<1911",
    "periodLabel": "Trước năm 1911",
    "milestone": "Hình thành tư tưởng yêu nước và chí hướng tìm đường cứu nước mới.",
    "title": "Thời kỳ trước năm 1911",
    "description": "Tiếp thu truyền thống quê hương, gia đình và dân tộc; sớm có tư tưởng yêu nước và thể hiện trong hoạt động thực tiễn trước khi ra đi.",
    "detailContent": "Nghệ An là vùng đất giàu truyền thống yêu nước. Hồ Chí Minh (khi nhỏ Nguyễn Sinh Cung, sau Nguyễn Tất Thành), sinh 19/5/1890, chịu ảnh hưởng sâu sắc của cụ Nguyễn Sinh Sắc về tinh thần yêu nước, thương dân và nhân cách, và của cụ Hoàng Thị Loan về đức tính nhân hậu, tần tảo. Người tiếp thu truyền thống tốt đẹp, học với các túc nho, tiếp xúc sách báo tiến bộ ở Vinh và Huế, hiểu rõ cảnh nước nhà bị đô hộ. Người tham gia phong trào chống thuế ở Trung Kỳ (1908), dạy ở Trường Dục Thanh, Phan Thiết (1910) với tâm huyết truyền cho học sinh lòng yêu nước. Ngày 5/6/1911, Người ra nước ngoài tìm con đường cứu nước, cứu dân.",
    "imageSrc": "/images/bh.jpg",
    "imageAlt": "Bến Nhà Rồng (Sài Gòn) — nơi Nguyễn Tất Thành ra đi tìm đường cứu nước (5/6/1911)",
    "questions": [
      {
        "prompt": "Nội dung cốt lõi của thời kỳ trước năm 1911 là gì?",
        "options": [
          "Đã hoàn thiện hệ thống tư tưởng Mác – Lênin và lãnh đạo toàn diện cách mạng Việt Nam.",
          "Tiếp thu truyền thống quê hương, gia đình và dân tộc để hình thành tư tưởng yêu nước và chí hướng tìm đường cứu nước mới.",
          "Trực tiếp chủ trì thành lập Đảng Cộng sản Việt Nam và ban hành Cương lĩnh chính trị đầu tiên.",
          "Tập trung xây dựng chủ nghĩa xã hội ở miền Bắc và hoàn thành thống nhất đất nước."
        ],
        "answer": 1,
        "explanation": "Đúng. Đây là giai đoạn nền móng: hình thành lòng yêu nước, nhận thức thực tiễn đất nước và định hướng tìm con đường cứu nước phù hợp thời đại."
      },
      {
        "prompt": "Hồ Chí Minh sinh ngày tháng năm nào?",
        "options": [
          "2/9/1945",
          "19/5/1890",
          "5/6/1911",
          "28/1/1941"
        ],
        "answer": 1,
        "explanation": "Chính xác. Người sinh ngày 19/5/1890 tại làng Kim Liên, xã Nam Đàn, tỉnh Nghệ An (nay là tỉnh Nghệ An)."
      },
      {
        "prompt": "Một biểu hiện tiêu biểu của tư tưởng yêu nước trong hoạt động thực tiễn trước khi Người ra đi là gì?",
        "options": [
          "Tham gia phong trào chống thuế ở Trung Kỳ (1908) và truyền cảm hứng yêu nước khi dạy học tại Trường Dục Thanh, Phan Thiết (1910).",
          "Chủ trì Hội nghị Trung ương Đảng lần thứ VIII tại Pác Bó (1941).",
          "Soạn thảo Cương lĩnh chính trị đầu tiên của Đảng (1930).",
          "Đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình (1945)."
        ],
        "answer": 0,
        "explanation": "Đúng. Đây là những hoạt động gắn với thực tiễn trong nước, thể hiện tinh thần yêu nước, thương dân trước khi Người xuất dương."
      },
      {
        "prompt": "Ngày 5/6/1911, Hồ Chí Minh thực hiện hành động lịch sử nào?",
        "options": [
          "Thành lập Mặt trận Việt Minh.",
          "Ra Lời kêu gọi toàn quốc kháng chiến.",
          "Ra đi từ bến Nhà Rồng, bắt đầu hành trình tìm đường cứu nước ở nước ngoài.",
          "Tham gia Đại hội Tours và gia nhập Quốc tế Cộng sản."
        ],
        "answer": 2,
        "explanation": "Chính xác. Ngày 5/6/1911 đánh dấu bước khởi đầu hành trình ra thế giới để tìm con đường cứu nước, cứu dân."
      }
    ]
  },
  {
    "yearLabel": "1911–20",
    "periodLabel": "1911 – 1920",
    "milestone": "Hình thành tư tưởng cứu nước, giải phóng dân tộc theo con đường cách mạng vô sản.",
    "title": "Thời kỳ 1911 – 1920",
    "description": "Xuất dương khảo sát thế giới, đấu tranh trên diễn đàn quốc tế; đến với chủ nghĩa Mác – Lênin và bước ngoặt tại Đại hội Tours (1920).",
    "detailContent": "Trước cảnh nước mất chủ quyền, Nguyễn Tất Thành xuống bến Nhà Rồng (5-6-1911) với tên gọi Văn Ba, làm việc trên tàu buôn Pháp để bước vào hành trình khảo sát. Từ 1911 đến 1920, Người đến nhiều nước, hòa mình vào đời sống công nhân và nhân dân thuộc địa, vừa lao động vừa học tập và hoạt động cách mạng. Năm 1919, Người gia nhập Đảng Xã hội Pháp; tháng 6-1919 gửi bản Yêu sách 8 điểm tới Hội nghị Vécxay – tuyên bố chính trị đầu tiên của nhân dân An Nam trên diễn đàn quốc tế. Mùa hè 1920, Người tiếp cận Luận cương về vấn đề dân tộc và thuộc địa của Lênin, tìm thấy con đường giải phóng dân tộc gắn với cách mạng vô sản. Tháng 12-1920, Người bỏ phiếu tán thành gia nhập Quốc tế Cộng sản và tham gia thành lập Đảng Cộng sản Pháp – bước ngoặt từ người yêu nước tiến bộ đến chiến sĩ xã hội chủ nghĩa.",
    "imageSrc": "/images/tau2.jpg",
    "imageAlt": "Nguyễn Tất Thành trên tàu buôn Pháp — bước đầu hành trình xuất dương tìm đường cứu nước (1911–1920)",
    "questions": [
      {
        "prompt": "Sự kiện nào được coi là bước ngoặt quan trọng đưa Người đến với con đường cách mạng vô sản?",
        "options": [
          "Ký Hiệp định Giơnevơ năm 1954.",
          "Cách mạng Tháng Tám thành công năm 1945.",
          "Tháng 12-1920: tán thành gia nhập Quốc tế Cộng sản, tham gia thành lập Đảng Cộng sản Pháp.",
          "Hội nghị Trung ương tháng 10-1930 đổi tên Đảng thành Đảng Cộng sản Đông Dương."
        ],
        "answer": 2,
        "explanation": "Đúng. Đây là mốc chuyển từ chủ nghĩa yêu nước chân chính sang lựa chọn con đường giải phóng dân tộc theo cách mạng vô sản."
      },
      {
        "prompt": "Bản Yêu sách của nhân dân An Nam (tháng 6-1919) có ý nghĩa gì?",
        "options": [
          "Là Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
          "Là văn kiện kết thúc toàn bộ ách thống trị của thực dân Pháp tại Việt Nam.",
          "Là tuyên bố chính trị đầu tiên của nhân dân Việt Nam trên diễn đàn quốc tế, thể hiện khát vọng tự do, dân chủ, bình đẳng.",
          "Là Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam."
        ],
        "answer": 2,
        "explanation": "Chính xác. Yêu sách gửi Hội nghị Vécxay khẳng định quyền tối thiểu của nhân dân và mở đường cho đấu tranh trên phạm vi quốc tế."
      },
      {
        "prompt": "Mục đích chủ yếu của Nguyễn Tất Thành khi xuất dương năm 1911 là gì?",
        "options": [
          "Tìm đường cứu nước, khảo sát thực tiễn thế giới và học hỏi kinh nghiệm cách mạng.",
          "Hoàn tất ngay lập tức công cuộc công nghiệp hóa, hiện đại hóa trong nước.",
          "Chỉ nhằm mục đích du học, không gắn với vận mệnh dân tộc.",
          "Trực tiếp thành lập Chính phủ lâm thời sau Cách mạng Tháng Tám."
        ],
        "answer": 0,
        "explanation": "Đúng. Động cơ xuất phát từ trách nhiệm với Tổ quốc: tìm hiểu bản chất thực dân và con đường giải phóng dân tộc."
      },
      {
        "prompt": "Yếu tố nào góp phần quyết định đưa Người đến với chủ nghĩa Mác – Lênin trong giai đoạn này?",
        "options": [
          "Việc ký kết hiệp ước bảo hộ với phong kiến triều Nguyễn.",
          "Thắng lợi của Cách mạng Tháng Mười Nga (1917) và nghiên cứu luận cương của Lênin về dân tộc – thuộc địa.",
          "Sự hỗ trợ quân sự trực tiếp của các nước phương Tây cho phong trào yêu nước Việt Nam.",
          "Việc hoàn thành thống nhất đất nước sau Hiệp định Giơnevơ."
        ],
        "answer": 1,
        "explanation": "Chính xác. Người nghiên cứu thực tiễn thuộc địa và các cuộc cách mạng thế giới; luận cương của Lênin giải đáp con đường giải phóng dân tộc."
      }
    ]
  },
  {
    "yearLabel": "1920–30",
    "periodLabel": "1920 – 1930",
    "milestone": "Hình thành những nội dung cơ bản của tư tưởng về cách mạng Việt Nam.",
    "title": "Thời kỳ 1920 – 1930",
    "description": "Truyền bá Mác – Lênin, tổ chức lực lượng; chuẩn bị lý luận và thực tiễn cho ra đời Đảng Cộng sản Việt Nam (1930).",
    "detailContent": "Giai đoạn 1920 – 1930 là một trong những thời kỳ quan trọng bậc nhất: Người tập trung hình thành tư tưởng về cách mạng giải phóng dân tộc, về Đảng Cộng sản và mối quan hệ giữa cách mạng thuộc địa với cách mạng vô sản quốc tế. Các hoạt động tiêu biểu: tháng 7/1920 đọc Sơ thảo luận cương của Lênin; 1921 thành lập Hội Liên hiệp các dân tộc thuộc địa; 1922 ra báo Người Cùng Khổ (Le Paria); 1925 xuất bản “Bản án chế độ thực dân Pháp”; 1927 xuất bản “Đường Kách Mệnh” tại Quảng Châu; 1925 sáng lập Việt Nam Thanh niên Cách mạng Đồng chí Hội với tôn chỉ “Trước làm cách mạng quốc gia, sau làm cách mạng quốc tế”. Đỉnh cao: tháng 2/1930, Người chủ trì hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam và thông qua Cương lĩnh chính trị đầu tiên. Giá trị cốt lõi được nhấn mạnh: “Không có gì quý hơn độc lập, tự do”.",
    "imageSrc": "/images/tac%20pham.jpg",
    "imageAlt": "Bìa tác phẩm Đường Kách mệnh (1927) của Nguyễn Ái Quốc — minh họa giai đoạn 1920 – 1930",
    "questions": [
      {
        "prompt": "Thành quả có ý nghĩa quyết định nhất của giai đoạn 1920 – 1930 là gì?",
        "options": [
          "Chiến thắng Điện Biên Phủ (1954).",
          "Thành lập Đảng Cộng sản Việt Nam (2/1930) và thông qua Cương lĩnh chính trị đầu tiên.",
          "Ban hành Hiến pháp 1946.",
          "Ký Hiệp định Paris (1973)."
        ],
        "answer": 1,
        "explanation": "Đúng. Sự ra đời của Đảng là kết quả chuẩn bị về chính trị, tư tưởng và tổ chức, đặt nền móng lãnh đạo cách mạng Việt Nam."
      },
      {
        "prompt": "Tác phẩm “Đường Kách Mệnh” (1927) có vai trò gì?",
        "options": [
          "Là Di chúc của Chủ tịch Hồ Chí Minh.",
          "Là văn kiện lý luận quan trọng, vạch đường lối cách mạng Việt Nam dựa trên kinh nghiệm cách mạng thế giới.",
          "Là bản Tuyên ngôn Độc lập đọc tại Ba Đình.",
          "Là kế hoạch kinh tế 5 năm đầu tiên của nước Việt Nam Dân chủ Cộng hòa."
        ],
        "answer": 1,
        "explanation": "Chính xác. Tác phẩm tổng kết lý luận và chỉ ra phương hướng cách mạng phù hợp điều kiện Việt Nam."
      },
      {
        "prompt": "Khẩu hiệu cốt lõi được nhấn mạnh trong giai đoạn hình thành tư tưởng về cách mạng Việt Nam này là gì?",
        "options": [
          "Không có gì quý hơn độc lập, tự do.",
          "Trước hết làm cách mạng xã hội chủ nghĩa, sau mới giải phóng dân tộc.",
          "Từ bỏ khối đại đoàn kết dân tộc để tập trung đấu tranh giai cấp duy nhất.",
          "Ưu tiên tuyệt đối phát triển kinh tế tư bản trước độc lập dân tộc."
        ],
        "answer": 0,
        "explanation": "Đúng. Đây là giá trị xuyên suốt thể hiện mục tiêu giải phóng dân tộc trong tư tưởng Hồ Chí Minh giai đoạn này."
      },
      {
        "prompt": "Tác phẩm “Bản án chế độ thực dân Pháp” (1925) chủ yếu phân tích điều gì?",
        "options": [
          "Cơ cấu tổ chức Liên Hợp Quốc sau Chiến tranh thế giới thứ hai.",
          "Đường lối xây dựng chủ nghĩa xã hội ở miền Bắc sau 1954.",
          "Bản chất bóc lột và thủ đoạn của chủ nghĩa thực dân Pháp tại các nước thuộc địa, trong đó có Việt Nam.",
          "Chiến lược ngoại giao của Chính phủ Việt Nam Dân chủ Cộng hòa với Mỹ."
        ],
        "answer": 2,
        "explanation": "Chính xác. Tác phẩm là công cụ tuyên truyền và lý luận mạnh mẽ lên án chế độ thực dân."
      }
    ]
  },
  {
    "yearLabel": "1930–41",
    "periodLabel": "1930 – 1941",
    "milestone": "Vượt qua thử thách, giữ vững đường lối và phương pháp cách mạng Việt Nam đúng đắn, sáng tạo.",
    "title": "Thời kỳ 1930 – 1941",
    "description": "Đấu tranh trong hoàn cảnh đàn áp khốc liệt và những nhận thức sai lầm; kiên trì khẳng định đường lối cách mạng dân tộc dân chủ nhân dân.",
    "detailContent": "Giai đoạn 1930 – 1941 vừa chống kẻ thù bên ngoài (thực dân Pháp, phát xít Nhật), vừa vượt qua những hiểu lầm, giáo điều trong hàng ngũ Quốc tế Cộng sản và một bộ phận cán bộ. Cương lĩnh chính trị đầu tiên (2/1930) từng bị phê phán “hữu khuynh”; Hội nghị Trung ương 10/1930 có những quyết định cứng nhắc làm tổn thất phong trào. Hồ Chí Minh kiên trì: 1934 – 1938 học tập tại Trường Quốc tế Lenin; 6/1938 xin phép về nước hoạt động; 10/1938 sang Trung Quốc; cuối 1/1941 về Tổ quốc tại Pác Bó (28/1/1941). Người hoàn chỉnh “Con đường giải phóng”, chủ trì Hội nghị Trung ương VIII (5/1941) tại Pác Bó: đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, thành lập Mặt trận Việt Minh, tạm gác khẩu hiệu ruộng đất phù hợp thời cuộc. Đường lối sáng tạo của Người được khẳng định, mở đường cho thắng lợi Cách mạng Tháng Tám.",
    "imageSrc": "/images/dai-hoi1.jpg",
    "imageAlt": "Ảnh tư liệu: Hồ Chí Minh trong không khí đại hội, thanh niên vỗ tay — minh họa giai đoạn 1930 – 1941",
    "questions": [
      {
        "prompt": "Nội dung trọng tâm của thời kỳ 1930 – 1941 là gì?",
        "options": [
          "Hoàn thành xây dựng cơ bản chủ nghĩa xã hội trên phạm vi cả nước.",
          "Vượt qua thử thách, giữ vững đường lối và phương pháp cách mạng Việt Nam đúng đắn, sáng tạo.",
          "Ký kết Hiệp định Giơnevơ và chia cắt đất nước.",
          "Ra đời nước Cộng hòa Xã hội Chủ nghĩa Việt Nam thống nhất."
        ],
        "answer": 1,
        "explanation": "Đúng. Giai đoạn này thử thách gay gắt nhưng khẳng định đường lối cách mạng dân tộc dân chủ nhân dân của Người."
      },
      {
        "prompt": "Hồ Chí Minh về nước, đến hang Pác Bó (Cao Bằng) vào thời điểm nào?",
        "options": [
          "5/6/1911",
          "2/9/1945",
          "28/1/1941",
          "19/5/1890"
        ],
        "answer": 2,
        "explanation": "Chính xác. Sau gần 30 năm xa Tổ quốc, Người về nước cuối tháng 1/1941, mở giai đoạn lãnh đạo trực tiếp cách mạng trong nước."
      },
      {
        "prompt": "Hội nghị Trung ương Đảng lần thứ VIII (5/1941) tại Pác Bó do Hồ Chí Minh chủ trì đặt nhiệm vụ chiến lược nào lên hàng đầu?",
        "options": [
          "Cải cách ruộng đất triệt để ngay trong lúc đó.",
          "Giải phóng dân tộc, đoàn kết rộng rãi các lực lượng trong Mặt trận Việt Minh, tạm gác khẩu hiệu ruộng đất phù hợp thời cuộc.",
          "Ưu tiên xây dựng nền công nghiệp nặng trước nhiệm vụ dân tộc.",
          "Từ bỏ đấu tranh vũ trang, chỉ dùng đấu tranh nghị viện."
        ],
        "answer": 1,
        "explanation": "Đúng. Hội nghị xác định quyền lợi dân tộc lên trên hết, chuẩn bị lực lượng và khối đại đoàn kết cho tổng khởi nghĩa."
      },
      {
        "prompt": "Một trong những “thử thách” nội bộ điển hình của giai đoạn này là gì?",
        "options": [
          "Sự đồng thuận hoàn toàn ngay từ đầu với mọi nghị quyết của Quốc tế Cộng sản.",
          "Cương lĩnh chính trị đầu tiên (1930) bị phê phán “hữu khuynh”, một số chủ trương cứng nhắc gây tổn thất phong trào.",
          "Việc từ bỏ hoàn toàn chủ nghĩa yêu nước để theo mô hình phương Tây.",
          "Sự rút lui hoàn toàn của Người khỏi hoạt động cách mạng quốc tế."
        ],
        "answer": 1,
        "explanation": "Chính xác. Giai đoạn có mâu thuẫn nhận thức và áp lực giáo điều; Người kiên trì vận dụng sáng tạo chủ nghĩa Mác – Lênin vào thực tiễn Việt Nam."
      }
    ]
  },
  {
    "yearLabel": "1941–69",
    "periodLabel": "1941 – 1969",
    "milestone": "Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta.",
    "title": "Thời kỳ 1941 – 1969",
    "description": "Từ thành lập Việt Minh, khởi nghĩa giành chính quyền, xây dựng và bảo vệ Tổ quốc, đến hoàn thiện quan điểm về độc lập dân tộc gắn với tiến bộ xã hội.",
    "detailContent": "Giai đoạn này, tư tưởng Hồ Chí Minh và đường lối của Đảng cơ bản thống nhất, ngày càng được làm sáng tỏ trong thực tiễn. Ngày 19/5/1941, Người sáng lập Mặt trận Việt Minh; 22/12/1944 sáng lập Đội Việt Nam Tuyên truyền Giải phóng quân. Tháng Tám 1945: Lời kêu gọi tổng khởi nghĩa, giành chính quyền. 2/9/1945: Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa, mở thời đại độc lập dân tộc gắn với chủ nghĩa xã hội. Người lãnh đạo kháng chiến chống Pháp, chống Mỹ, đồng thời hoàn thiện hệ thống quan điểm trên các lĩnh vực. 17/7/1966: Lời kêu gọi với chân lý “Không có gì quý hơn độc lập, tự do”. Di chúc kết tinh tư tưởng, đạo đức, phong cách Hồ Chí Minh – kim chỉ nam lâu dài cho Đảng và dân tộc.",
    "imageSrc": "/images/21769fd2eda385d66a00e0529f915b9c.jpg",
    "imageAlt": "Hồ Chí Minh đọc Tuyên ngôn Độc lập, cờ đỏ sao vàng và cảnh quần chúng tại Quảng trường Ba Đình — minh họa giai đoạn 1941 – 1969",
    "questions": [
      {
        "prompt": "Mặt trận Việt Minh được Hồ Chí Minh sáng lập vào ngày tháng năm nào?",
        "options": [
          "22/12/1944",
          "2/9/1945",
          "19/5/1941",
          "19/12/1946"
        ],
        "answer": 2,
        "explanation": "Đúng. Ngày 19/5/1941 đánh dấu bước phát triển quan trọng của khối đại đoàn kết dân tộc chuẩn bị khởi nghĩa giành chính quyền."
      },
      {
        "prompt": "Bản Tuyên ngôn Độc lập đọc tại Quảng trường Ba Đình (2/9/1945) mở ra điều gì?",
        "options": [
          "Kết thúc hoàn toàn mọi mâu thuẫn trong xã hội Việt Nam.",
          "Thời đại độc lập dân tộc và chủ nghĩa xã hội: khai sinh nước Việt Nam Dân chủ Cộng hòa.",
          "Sự ra đời của Đảng Cộng sản Việt Nam.",
          "Chiến thắng Điện Biên Phủ chấm dứt chiến tranh Đông Dương."
        ],
        "answer": 1,
        "explanation": "Chính xác. Đây là mốc lịch sử khẳng định chủ quyền dân tộc và định hướng phát triển của đất nước."
      },
      {
        "prompt": "Câu “Không có gì quý hơn độc lập, tự do” được nhấn mạnh nổi bật trong văn kiện / bối cảnh nào (theo tư liệu giai đoạn 1941 – 1969)?",
        "options": [
          "Cương lĩnh chính trị đầu tiên năm 1930.",
          "Bản Yêu sách gửi Hội nghị Vécxay năm 1919.",
          "Lời kêu gọi đồng bào và chiến sĩ cả nước ngày 17/7/1966, trong cuộc kháng chiến chống Mỹ.",
          "Hội nghị Trung ương Đảng tháng 10/1930."
        ],
        "answer": 2,
        "explanation": "Đúng. Đây là thông điệp mang tính thời đại, thể hiện quyết tâm bảo vệ độc lập dân tộc trước áp lực xâm lược."
      },
      {
        "prompt": "Ý nghĩa tổng quát của giai đoạn 1941 – 1969 đối với tư tưởng Hồ Chí Minh là gì?",
        "options": [
          "Tư tưởng chỉ còn giá trị trong phạm vi đấu tranh giành độc lập ban đầu.",
          "Tư tưởng tách khỏi đường lối của Đảng và không còn được vận dụng.",
          "Tư tưởng tiếp tục phát triển toàn diện, soi đường cho cách mạng Việt Nam từ giành chính quyền đến xây dựng và bảo vệ Tổ quốc.",
          "Tư tưởng dừng lại ở mức kinh nghiệm địa phương, không mang tính hệ thống."
        ],
        "answer": 2,
        "explanation": "Chính xác. Đây là giai đoạn tư tưởng được kiểm chứng và phát triển trong lãnh đạo kháng chiến, kiến quốc và hội nhập với khát vọng hòa bình – độc lập – thống nhất."
      }
    ]
  }
]`) as MilestoneStage[];
