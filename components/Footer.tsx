import { footer } from "@/content/site";

export function Footer(){
  const rows=[footer.representative,footer.businessNumber,footer.address,footer.phone,footer.email].filter(Boolean);

  return <footer>
    <div className="shell footer-row">
      <div className="wordmark footer-wordmark"><span>동행</span><small>COMPANY</small></div>
      <div className="footer-company">
        <strong>{footer.company}</strong>
        {rows.map(x=><span key={x}>{x}</span>)}
        <div className="footer-links">
          <a href={footer.consultationHref} target="_blank" rel="noreferrer">카카오톡 상담</a>
          <span aria-hidden="true">|</span>
          <a href={footer.privacyHref}>개인정보처리방침</a>
        </div>
        <small className="footer-copyright">© 2026 동행컴퍼니. All rights reserved.</small>
      </div>
    </div>
  </footer>
}
