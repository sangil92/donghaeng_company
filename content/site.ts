export const site = {
  name: "동행컴퍼니",
  englishName: "DONGHAENG COMPANY",
  consultationHref: "#contact",
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
  headline: ["좋은 매장이", "더 많은 사람에게", "발견되도록."],
  body: [
    "아직 우리 매장을 모르는 사람에게 먼저 알립니다.",
    "인스타그램에서 발견시키고, 네이버에서 확신시키고, 실제 매장 방문까지 연결합니다.",
  ],
  cta: "우리 매장 알리기",
  tags: ["전북 로컬", "자체 미디어", "인플루언서 네트워크", "대표 직접 관리"],
} as const;

export const flow = [
  { step: "01", en: "DISCOVERY", channel: "Instagram", ko: "발견", body: "아직 매장을 모르는 지역 고객의 피드에 먼저 나타납니다." },
  { step: "02", en: "VIRAL", channel: "Influencer", ko: "확산", body: "자체 미디어와 로컬 크리에이터 네트워크로 관심을 넓힙니다." },
  { step: "03", en: "SEARCH", channel: "Naver", ko: "검색", body: "관심이 생긴 고객이 매장명과 정보를 다시 찾아보게 만듭니다." },
  { step: "04", en: "TRUST", channel: "Place & Review", ko: "확신", body: "플레이스의 사진·메뉴·리뷰가 방문할 이유를 완성합니다." },
  { step: "05", en: "VISIT", channel: "Store", ko: "방문", body: "길찾기·문의·예약을 지나 실제 매장 방문으로 이어집니다." },
] as const;

export const proofCards = [
  ["OWNED MEDIA", "직접 성장시킨 먹플루언서 미디어"],
  ["CREATOR NETWORK", "전북 로컬 인플루언서 연결"],
  ["LOCAL COMMUNITY", "지역 고객이 모이는 커뮤니티 네트워크"],
  ["CONTENT POWER", "로컬에서 반응하는 콘텐츠 경험"],
] as const;

export const services = [
  { num: "01", title: "Instagram", subtitle: "먼저 발견되게", items: ["릴스 / 피드", "계정 운영", "콘텐츠 방향"] },
  { num: "02", title: "Influencer", subtitle: "지역에 퍼지게", items: ["먹플루언서", "체험단", "로컬 바이럴"] },
  { num: "03", title: "Naver Place", subtitle: "검색 후 확신하게", items: ["정보 / 사진", "메뉴", "플레이스 콘텐츠"] },
  { num: "04", title: "Search AD", subtitle: "검색 수요를 놓치지 않게", items: ["검색광고", "파워링크", "키워드 운영"] },
  { num: "05", title: "Review", subtitle: "방문 이유를 쌓게", items: ["리뷰 흐름", "고객 커뮤니케이션", "신뢰 관리"] },
  { num: "06", title: "Design", subtitle: "매장 매력을 선명하게", items: ["SNS", "이벤트", "홍보 콘텐츠"] },
  { num: "07", title: "Local Platform", subtitle: "지역 접점을 넓히게", items: ["당근", "카카오", "Google"] },
  { num: "08", title: "AI Content", subtitle: "필요한 제작을 빠르게", items: ["보조 이미지", "콘텐츠 가공", "소재 확장"] },
] as const;

export const why = [
  ["OWNED MEDIA", "10만+ 자체 먹플루언서 미디어", "광고만 구매하는 것이 아니라 직접 키운 미디어의 감각과 운영 경험을 활용합니다."],
  ["LOCAL NETWORK", "전북 인플루언서 네트워크", "지역에서 실제로 움직이는 크리에이터와 커뮤니티 연결을 이해합니다."],
  ["INSTAGRAM FIRST", "검색 이전의 고객을 발견", "이미 검색하는 사람만 기다리지 않고 아직 모르는 고객에게 먼저 알립니다."],
  ["CONNECT TO NAVER", "관심을 검색·방문으로 연결", "인스타에서 생긴 관심이 플레이스에서 사라지지 않도록 연결합니다."],
  ["DIRECT MANAGEMENT", "대표 직접 관리", "전략과 방향을 외주처럼 넘기지 않고 직접 깊게 관리합니다."],
  ["FEWER, DEEPER", "많이 맡지 않고 깊게 관리", "고객 수를 늘리는 것보다 한 매장의 흐름을 제대로 연결하는 데 집중합니다."],
] as const;

export const pricing = {
  name: "ALL-IN-ONE LOCAL MARKETING",
  price: "월 55만원",
  vat: "VAT 포함",
  contract: "최소 3개월",
  renewal: "이후 1개월 단위 연장",
  included: [
    "네이버 플레이스 운영 지원",
    "검색광고 / 파워링크 운영 지원",
    "체험단 운영 지원",
    "인스타그램 운영 지원",
    "리뷰 운영 지원",
    "디자인 제작 지원",
    "당근비즈니스 운영 지원",
    "카카오맵 / 구글 세팅 지원",
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
