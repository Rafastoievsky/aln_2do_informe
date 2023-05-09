

import HTMLFlipBook from "react-pageflip";


import { 
    pagina01, pagina02,pagina03, pagina04, pagina05, pagina06,  
    pagina07, pagina08,pagina09, pagina10, pagina11, pagina12,
    pagina13, pagina14,pagina15, pagina16, pagina17, pagina18,
    pagina19, pagina20,pagina21, pagina22, pagina23, pagina24,

} from '../assets';
//import revista1 from '../assets/revistaima-01.jpg'



export const Revista = () => {
   // @ts-ignore 
  return (
    <HTMLFlipBook
    style={{}}
    // children={{}}
    startPage={0}
    width={600}
    height={1080}
    drawShadow={true}
    flippingTime={10}
    usePortrait={true}
    startZIndex={0}
    autoSize={true}
    clickEventForward={true}
    useMouseEvents={true}
    swipeDistance={0}
    showPageCorners={true}
    disableFlipByClick={false}
    size="stretch"
    minWidth={315}
    maxWidth={600}
    minHeight={400}
    maxHeight={1080}
    maxShadowOpacity={0.5}
    showCover={true}
    mobileScrollSupport={true}
    onFlip={()=>{}}
    onChangeOrientation={()=>{}}
    onChangeState={()=>{}}
    className="demo-book"
        
    >
      <div className="h-full"><img src={pagina01} alt="" /></div>
      <div className="h-full"><img src={pagina02} alt="" /></div>
      <div className="h-full"><img src={pagina03} alt="" /></div>
      <div className="h-full"><img src={pagina04} alt="" /></div>
      <div className="h-full"><img src={pagina05} alt="" /></div>
      <div className="h-full"><img src={pagina06} alt="" /></div>
      <div className="h-full"><img src={pagina07} alt="" /></div>
      <div className="h-full"><img src={pagina08} alt="" /></div>
      <div className="h-full"><img src={pagina09} alt="" /></div>
      <div className="h-full"><img src={pagina10} alt="" /></div>
      <div className="h-full"><img src={pagina11} alt="" /></div>
      <div className="h-full"><img src={pagina12} alt="" /></div>
      <div className="h-full"><img src={pagina13} alt="" /></div>
      <div className="h-full"><img src={pagina14} alt="" /></div>
      <div className="h-full"><img src={pagina15} alt="" /></div>
      <div className="h-full"><img src={pagina16} alt="" /></div>
      <div className="h-full"><img src={pagina17} alt="" /></div>
      <div className="h-full"><img src={pagina18} alt="" /></div>
      <div className="h-full"><img src={pagina19} alt="" /></div>
      <div className="h-full"><img src={pagina20} alt="" /></div>
      <div className="h-full"><img src={pagina21} alt="" /></div>
      <div className="h-full"><img src={pagina22} alt="" /></div>
      <div className="h-full"><img src={pagina23} alt="" /></div>
      <div className="h-full"><img src={pagina24} alt="" /></div>

    </HTMLFlipBook>
  )
}
