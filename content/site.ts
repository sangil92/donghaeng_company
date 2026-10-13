export const site = {
  name: "동행컴퍼니",
  englishName: "DONGHAENG COMPANY",
  consultationHref: "https://open.kakao.com/o/sOBUAbSi",
  instagramFollowersLabel: "100K+",
  instagramFollowersVerified: false,
} as const;

export const nav = [
  { label: "동행의 방식", href: "#flow" },
  { label: "서비스", href: "#services" },
  { label: "동행의 차이", href: "#why" },
  { label: "비용", href: "#pricing" },
] as const;

export const hero = {
  eyebrow: "DONGHAENG · LOCAL MARKETING COMPANY",
  headline: ["좋은 매장이", "더 잘 보일 수", "있도록."],
  body: [
    "좋은 음식과 서비스를 가지고 있어도 온라인에서 전달되지 않으면 고객에게 발견될 기회를 놓칩니다.",
    "매장의 강점이 온라인에서도 자연스럽게 전달되도록 함께 고민합니다.",
  ],
  cta: "우리 매장 알리기",
  tags: ["전북 로컬", "자체 미디어", "인플루언서 네트워크", "대표 직접 관리"],
} as const;

export const flow = [
  { step: "01", en: "SEARCH", channel: "Naver", ko: "네이버 검색", body: "지역명과 메뉴명으로 매장을 찾는 고객에게 노출됩니다." },
  { step: "02", en: "PLACE", channel: "Information", ko: "플레이스 확인", body: "영업시간·메뉴·위치 등 방문에 필요한 정보를 정리합니다." },
  { step: "03", en: "PHOTO", channel: "Visual", ko: "사진 확인", body: "매장의 분위기와 메뉴가 한눈에 전달되도록 보여줍니다." },
  { step: "04", en: "REVIEW", channel: "Trust", ko: "리뷰 확인", body: "다른 고객의 경험을 통해 방문 전 신뢰를 쌓습니다." },
  { step: "05", en: "VISIT", channel: "Store", ko: "방문 결정", body: "검색부터 확인까지 이어진 관심을 실제 방문으로 연결합니다." },
  { step: "06", en: "RETURN", channel: "Relationship", ko: "재방문", body: "좋은 경험이 다시 찾는 고객과 추천으로 이어지게 합니다." },
] as const;

export const proofCards = [
  ["OWNED MEDIA", "10만+ 전주어디갈래 자체 미디어"],
  ["30% SUPPORT", "대행 관리 매장 릴스·사진 30% 할인"],
  ["LOCAL CREATOR", "전주 먹플루언서 무료 섭외 · 촬영비 별도"],
  ["DIRECT MANAGEMENT", "대표가 직접 관리하는 소수 매장"],
] as const;

export const services = [
  { num: "01", title: "네이버 플레이스", subtitle: "검색 후 선택받게", items: ["정보·메뉴 정리", "사진·시설 업데이트", "리뷰·고객 소통"] },
  { num: "02", title: "검색광고 / 파워링크", subtitle: "검색되는 순간 보이게", items: ["지역 키워드 분석", "광고 효율 관리", "성과 모니터링"] },
  { num: "03", title: "체험단 운영", subtitle: "방문 경험을 만들게", items: ["전주 지역 체험단", "방문 콘텐츠", "후기 흐름 관리"] },
  { num: "04", title: "리뷰 운영", subtitle: "방문 이유를 쌓게", items: ["리뷰 관리", "고객 소통", "신뢰 형성"] },
  { num: "05", title: "디자인 제작", subtitle: "매장 소식을 선명하게", items: ["SNS·이벤트", "공지 콘텐츠", "월 최대 3회"] },
  { num: "06", title: "당근비즈니스", subtitle: "동네 고객과 만나게", items: ["지역 타깃 홍보", "새소식 운영", "필요 시 지원"] },
  { num: "07", title: "카카오맵", subtitle: "길찾기 접점을 놓치지 않게", items: ["매장 정보 세팅", "위치·영업 정보", "요청 시 지원"] },
  { num: "08", title: "구글 비즈니스", subtitle: "외부 검색 접점까지", items: ["기본 프로필 세팅", "매장 정보 정리", "요청 시 지원"] },
] as const;

export const why = [
  ["DIRECT MANAGEMENT", "대표 직접 관리", "담당자가 자주 바뀌지 않도록 대표가 전략과 방향을 직접 챙깁니다."],
  ["FAST COMMUNICATION", "빠른 소통과 피드백", "진행 상황을 공유하고 매장에 필요한 부분을 빠르게 함께 조정합니다."],
  ["JEONBUK FOCUS", "전북 지역 집중", "전북 고객과 지역 채널의 특성을 이해하고 현실적인 방향을 제안합니다."],
  ["FOOD MARKETING", "요식업 전문 마케팅", "맛과 서비스라는 매장의 강점이 온라인에서 보이도록 콘텐츠를 구성합니다."],
  ["FEWER STORES", "소수 매장 집중 관리", "많은 매장을 동시에 관리하지 않고 한 매장의 흐름을 깊게 봅니다."],
  ["HONEST PARTNER", "광고 대행사를 넘어 성장 파트너", "매장의 상황과 목표에 맞춰 필요한 솔루션부터 함께 고민합니다."],
] as const;

export const pricing = {
  name: "ALL-IN-ONE LOCAL MARKETING",
  regularPrice: "정상가 월 55만원",
  discountLabel: "얼리버드 할인",
  price: "월 33만원",
  vat: "VAT 포함",
  contract: "27년 얼리버드 한정",
  renewal: "업체 마감 시 조기 종료",
  contractNote: "최초 3개월 계약 후 1개월 단위 연장",
  referralNote: "지인 업체 소개 시 1개월 대행비용 무료",
  included: [
    "네이버 플레이스 운영 지원",
    "검색광고 / 파워링크 운영 지원",
    "체험단 운영 지원",
    "리뷰 운영 지원",
    "디자인 제작 지원",
    "당근비즈니스 운영 지원",
    "카카오맵 세팅 지원",
    "구글 비즈니스 프로필 세팅 지원",
  ],
} as const;

export const footer = {
  company: "동행컴퍼니",
  representative: "",
  businessNumber: "",
  address: "",
  phone: "",
  instagramHref: "",
  privacyHref: "",
} as const;
