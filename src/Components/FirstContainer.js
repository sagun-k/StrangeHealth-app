import React, { Component } from 'react'


export class FirstContainer extends Component {
   

    render() {
        
        return (
            <> 
            <div className="md:grid md:grid-cols-2 md:w-full md:h-screen hidden" >
                <div className="md:col-start-1 md:col-end-2 w-full md:grid md:grid-rows-4   ">
                   <div className="w-2/4 mx-auto text-center md:row-start-2 md:row-end-3 " >
                   <p className="text-6xl font-bold " >Our <span style={{color: '#224074'}} >Strength</span> is Our <span style={{color: '#224074'}} >Quality</span></p>
                        <span className="text-sm" >We Deliver High Quality Patient Centered Care</span>

                   </div>
                </div>
                <div  className="md:col-start-2 md:col-end-3 md:grid md:grid-cols-8 md:grid-rows-8 " style={{backgroundImage:`url(./images/backImage.png)`,backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}} >
                  <div className="md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2" >
                  <svg width="87" height="83" viewBox="0 0 87 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.6997 25.4632L56.1076 8.70012C42.604 -2.85359 22.2189 -1.26728 10.6651 12.2363L1.33468 23.1414C0.615204 23.9823 0.532866 25.1958 1.13206 26.126C1.63455 26.9056 2.51655 27.3319 3.41523 27.2677C4.18074 27.3943 10.9877 29.0936 36.7596 51.1441C62.4603 73.1337 65.2428 79.5594 65.5025 80.3361C65.544 81.0131 65.8595 81.6456 66.3739 82.0857C66.5377 82.2259 66.7216 82.3464 66.9234 82.4428C67.9457 82.931 69.1689 82.672 69.9054 81.8111L79.2359 70.906C90.7896 57.402 89.2033 37.0169 75.6997 25.4632ZM68.5955 75.6371C68.0727 74.8559 67.4147 73.9611 66.5897 72.933C61.7282 66.8766 52.7876 58.2652 40.0161 47.3379C27.3508 36.5015 17.493 29.0285 10.7163 25.127C9.52156 24.4388 8.49914 23.9066 7.62164 23.4977L14.4709 15.4925L14.4711 15.4927C24.2291 4.08789 41.4462 2.74793 52.8512 12.5061L72.4433 29.2691C83.8483 39.0273 85.1879 56.2445 75.4299 67.6492L68.5955 75.6371Z" fill="white"/>
</svg>

                  </div>
                </div>
            </div>
            {/* small devices view */}
            <div className="grid grid-rows-1 mb-24 md:hidden  " >
                <div style={{backgroundImage:`url(./images/backImage.png)`,backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}} className=" w-full   text-center row-span-1"  >
                    <div className="mt-24 w-3/4 mx-auto" >
                        <p className="text-5xl font-bold " >Our <span style={{color: '#224074'}} >Strength</span> is Our <span style={{color: '#224074'}} >Quality</span></p>
                        <span className="text-xs" >We Deliver High Quality Patient Centered Care</span>
                    </div>
                
                </div>
               
            </div>
            </>
        )
    }
}

export default FirstContainer
