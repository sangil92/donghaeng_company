import { Reveal } from "./Reveal";
export function SectionHeading({ eyebrow, title, body, dark = false }: { eyebrow: string; title: string; body?: string; dark?: boolean }) {
  return <Reveal className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className={dark ? "text-white" : ""}>{title}</h2>
    {body ? <p className={dark ? "section-copy light" : "section-copy"}>{body}</p> : null}
  </Reveal>;
}
