import Image from "next/image";

export function ReelPhone() {
  return (
    <div className="phone-link" aria-label="동행컴퍼니 콘텐츠 운영 예시">
      <div className="phone" aria-hidden="true">
        <Image
          className="phone-account-image"
          src="/instagram-jeonju-wwtg.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 230px, 286px"
        />
        <div className="phone-notification-clear" aria-hidden="true" />
      </div>
    </div>
  );
}
