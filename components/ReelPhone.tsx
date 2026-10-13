import Image from "next/image";
import { site } from "@/content/site";

export function ReelPhone() {
  return (
    <a
      className="phone-link"
      href={site.instagramHref}
      target="_blank"
      rel="noreferrer"
      aria-label="전주어디갈래 인스타그램으로 이동"
    >
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
    </a>
  );
}
