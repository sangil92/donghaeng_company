import { ImageResponse } from "next/og";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"76px",background:"#071B3D",color:"white",fontFamily:"sans-serif"}}><div style={{fontSize:22,letterSpacing:4,color:"#FF7A33"}}>DONGHAENG COMPANY</div><div style={{fontSize:72,fontWeight:800,lineHeight:1.15,marginTop:24,display:"flex",flexDirection:"column"}}><span>좋은 매장이</span><span style={{color:"#FF5A00"}}>더 많은 사람에게</span><span>발견되도록.</span></div><div style={{fontSize:28,marginTop:34,color:"#C8D3E4"}}>Instagram → Viral → Naver → Visit</div></div>,size)}
