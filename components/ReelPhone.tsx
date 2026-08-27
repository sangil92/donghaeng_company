import Image from "next/image";

export function ReelPhone() {
  return (
    <div className="phone" aria-label="전주어디갈래 인스타그램 실제 계정 화면">
      <div className="phone-notch" aria-hidden="true" />
      <Image
        className="phone-account-image"
        src="/instagram-jeonju-wwtg.webp"
        alt="전주어디갈래 인스타그램 계정 프로필과 릴스 콘텐츠"
        fill
        priority
        sizes="(max-width: 640px) 230px, 286px"
      />
    </div>
  );
}
