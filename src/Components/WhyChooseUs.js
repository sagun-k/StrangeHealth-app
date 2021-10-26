import React, { Component } from 'react'

export class WhyChooseUs extends Component {
    render() {
        const style={
            backgroundColor:"#224074"
        }
        return (
            <div className="w-full text-white">
            <div className="w-11/12 mx-auto rounded-md" style={style} >
                <span className="font-bold text-white inline-block mt-3 text-xl  " >Why Choose Us?</span>
                {/* designing the card */}
              <div className="grid grid-rows-3 mt-8 justify-center w-full md:grid-cols-3 md:grid-rows-1">
                  {/* first card */}
                <div className="row-start-1 row-end-2 mt-8 w-11/12 mx-auto md:col-start-1 md:col-end-2 md:row-span-1 " >
                <div className="flex justify-center" >
                <svg width="60" height="50" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.0646 40.0104C98.7125 38.2808 97.0266 37.1664 95.2948 37.5164C95.0647 37.5633 94.8458 37.6352 94.6396 37.7268C93.2952 38.3208 92.4956 39.7867 92.8008 41.2862C96.1908 57.935 89.527 75.1836 75.8228 85.2294C66.4807 92.0775 54.953 94.865 43.363 93.0805C31.773 91.295 21.6186 85.1671 14.7705 75.8244C0.532052 56.3988 4.75086 29.0111 24.1755 14.7716C33.5176 7.92405 45.0458 5.13655 56.6352 6.92048C67.8907 8.65435 77.7831 14.4936 84.6173 23.3855L81.6791 22.9631C79.9303 22.7106 78.3115 23.9246 78.0606 25.6718C77.8092 27.419 79.0221 29.0388 80.7692 29.2903L91.3775 30.8159C91.4478 30.826 91.5171 30.8254 91.5874 30.8308C91.6705 30.8372 91.7541 30.8489 91.8367 30.8489C93.4006 30.8489 94.767 29.6999 94.9965 28.1072L96.5221 17.4989C96.7735 15.7517 95.5606 14.1319 93.8135 13.8804C92.0657 13.6285 90.4464 14.8419 90.195 16.5891L89.763 19.5929C81.9193 9.33245 70.5472 2.59567 57.609 0.602929C44.332 -1.44362 31.1163 1.75884 20.3972 9.61583C9.67759 17.4744 2.64731 29.114 0.602365 42.3909C-1.44258 55.6685 1.75774 68.8837 9.6158 79.6032C17.4733 90.3223 29.1129 97.3521 42.3904 99.3975C45.008 99.8008 47.6218 100 50.2159 100C60.7805 100 70.9968 96.6926 79.6022 90.3841C95.3108 78.8687 102.95 59.0957 99.0646 40.0104Z" fill="white"/>
</svg>



                    </div>
                   
                    <div className="mt-8 font-bold text-lg" ><span>24-7 Customer Support</span></div>
                </div>
                {/* second card */}
                <div className="row-start-2 row-end-3 mt-9 w-11/12 mx-auto md:col-start-2 md:col-end-3  md:row-span-1  " >
                <div className="flex justify-center" >
                <svg width="60" height="50" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.4108 0.481323H56.2033C54.834 0.481323 53.7137 1.60166 53.7137 2.97095C53.7137 4.34024 54.834 5.46058 56.2033 5.46058H71.1618V47.9087H4.97925V5.46058H19.9793C21.3485 5.46058 22.4689 4.34024 22.4689 2.97095C22.4689 1.60166 21.3485 0.481323 19.9793 0.481323H4.73029C2.11618 0.481323 0 2.59751 0 5.21161V48.1577C0 50.7718 2.11618 52.888 4.73029 52.888H35.5809V61.0207H22.8423C21.473 61.0207 20.3527 62.1411 20.3527 63.5104C20.3527 64.8797 21.473 66 22.8423 66H53.278C54.6473 66 55.7676 64.8797 55.7676 63.5104C55.7676 62.1411 54.6473 61.0207 53.278 61.0207H40.5602V52.888H71.4108C74.0249 52.888 76.1411 50.7718 76.1411 48.1577V5.23236C76.1411 2.61825 74.0249 0.481323 71.4108 0.481323Z" fill="white"/>
</svg>



                    </div>
                   
                    <div className="mt-8 text-lg font-bold" >Customize on your profession</div>
                </div>
                {/* third card */}
                <div className="row-start-3 row-end-4 mt-9 w-11/12 mx-auto md:col-start-3 md:col-end-4  md:row-span-1  " >
                <div className="flex justify-center" >
                <svg width="60" height="50" viewBox="0 0 103 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M98.1481 86.4198H95.0617V76.5432H86.4198V24.0741C86.4198 10.7995 75.6202 0 62.3457 0H40.1235C26.8489 0 16.0494 10.7995 16.0494 24.0741V76.5432H7.40741V86.4198H4.32099C1.93852 86.4198 0 88.3583 0 90.7407V95.679C0 98.0615 1.93852 100 4.32099 100H98.1481C100.531 100 102.469 98.0615 102.469 95.679V90.7407C102.469 88.3583 100.531 86.4198 98.1481 86.4198ZM19.7531 24.0741C19.7531 12.8417 28.8914 3.7037 40.1235 3.7037H62.3457C73.5778 3.7037 82.716 12.8417 82.716 24.0741V76.5432H76.5432V51.2346H72.8395V76.5432H53.0864V50.483C59.3598 49.5815 64.1975 44.1733 64.1975 37.6543C64.1975 30.5064 58.3822 24.6914 51.2346 24.6914C44.0869 24.6914 38.2716 30.5064 38.2716 37.6543C38.2716 44.1733 43.1094 49.5812 49.3827 50.483V76.5432H29.6296V51.2346H25.9259V76.5432H19.7531V24.0741ZM49.3827 33.9506V46.7272C45.1615 45.8669 41.9753 42.1259 41.9753 37.6543C41.9753 32.5486 46.1289 28.3951 51.2346 28.3951C56.3402 28.3951 60.4938 32.5486 60.4938 37.6543C60.4938 42.1259 57.3077 45.8669 53.0864 46.7272V33.9506H49.3827ZM11.1111 80.2469H91.358V86.4198H11.1111V80.2469ZM98.7654 95.679C98.7654 96.0136 98.4827 96.2963 98.1481 96.2963H4.32099C3.98642 96.2963 3.7037 96.0136 3.7037 95.679V90.7407C3.7037 90.4062 3.98642 90.1235 4.32099 90.1235H98.1481C98.4827 90.1235 98.7654 90.4062 98.7654 90.7407V95.679Z" fill="white"/>
</svg>


                    </div>
                   
                    <div className="mt-8 text-lg font-bold mb-3" >Easy & Reliable</div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default WhyChooseUs