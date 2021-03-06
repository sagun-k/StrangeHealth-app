import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="w-full text-white">
        <div className="w-full bg-blue-900 ">
          <div className="w-4/5 mx-auto md:grid md:grid-cols-2">
            {/* logo and detail part */}
            <div className="w-4/5 mx-auto md:col-start-1 md:col-end-2">
              <div className="inline-block mt-9">
                <img
                  src="./images/cropped-SH-logo-e1586639771762-3 1.png"
                  alt=""
                />
              </div>
              <div className="mt-6 w-4/5 mx-auto ">
                <div>
                  <p className="text-xs">
                    Adjei-Ano South opposite Ideal College at Alaska junction
                    off the main Sunyani -Kumasi road..
                  </p>
                </div>
                <div>
                  <p className="mt-3 text-sm ">Customer Service Team </p>
                  <p className="text-xs">+233 509500025</p>
                  <p className="text-xs">+233 509500026</p>
                  <p className="text-xs">+233 509500001</p>
                </div>
                <div className="mt-3">
                  <p className="text-xs">
                    Website:<a href="/">www.strengthhealthcaregroup.com</a>
                  </p>
                  <p className="text-xs">
                    email:<a href="/">info@strengthhealthcaregroup.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* links and all */}
            <div className="mt-8 md:col-start-2 md:col-end-3">
              <div className="flex justify-center mt-16">
                  {/* youtube */}
                <div className="mx-3">
                  <a href="/">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 42 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.52506 0H8.52509L10.5834 7.71258L12.4918 0H15.521L12.0522 11.4689V19.296H9.07093V11.4689L5.52506 0V0ZM19.2627 4.9438C16.9314 4.9438 15.3856 6.48548 15.3856 8.76676V15.7439C15.3856 18.2523 16.696 19.5585 19.2627 19.5585C21.3919 19.5585 23.0669 18.1356 23.0669 15.7439V8.76676C23.0669 6.53965 21.4065 4.9438 19.2627 4.9438ZM20.369 15.6252C20.369 16.4002 19.9731 16.971 19.2606 16.971C18.5294 16.971 18.1064 16.3731 18.1064 15.6252V9.00218C18.1064 8.223 18.4648 7.64591 19.2085 7.64591C20.021 7.64591 20.369 8.20634 20.369 9.00218V15.6252ZM30.2211 5.06255V15.8668C29.8982 16.271 29.1795 16.9335 28.6649 16.9335C28.1003 16.9335 27.9607 16.546 27.9607 15.9752V5.06255H25.3148V16.9585C25.3148 18.3648 25.744 19.5002 27.1628 19.5002C27.9628 19.5002 29.0753 19.0835 30.2211 17.7231V19.2939H32.867V5.06255H30.2211ZM34.8108 33.9337C33.8774 33.9337 33.6837 34.5899 33.6837 35.5233V36.8962H35.9108V35.5212C35.9129 34.6045 35.7191 33.9337 34.8108 33.9337ZM25.0128 34.017C24.8378 34.1066 24.6648 34.2441 24.4919 34.4295V42.8775C24.6982 43.0984 24.8961 43.2567 25.0898 43.3546C25.5003 43.563 26.1003 43.5775 26.3794 43.215C26.5253 43.0234 26.5982 42.7129 26.5982 42.2796V35.2816C26.5982 34.8233 26.5086 34.4774 26.3294 34.2399C26.0232 33.8378 25.4544 33.7941 25.0128 34.017ZM35.0691 23.194C29.6441 22.8252 12.0147 22.8252 6.59798 23.194C0.735424 23.594 0.0437505 27.1357 0 36.4587C0.0437505 45.7651 0.729174 49.3234 6.59798 49.7234C12.0147 50.0922 29.6441 50.0922 35.0691 49.7234C40.9317 49.3234 41.6233 45.7796 41.6671 36.4587C41.6233 27.1524 40.9379 23.594 35.0691 23.194ZM9.39385 45.4567H6.55423V29.7482H3.6167V27.0815H12.3293V29.7482H9.39176V45.4567H9.39385ZM19.4898 45.4567H16.9689V43.9609C16.5043 44.513 16.021 44.9338 15.5189 45.2213C14.1606 46.0005 12.296 45.9817 12.296 43.2317V31.9024H14.8147V42.2942C14.8147 42.84 14.946 43.2067 15.4856 43.2067C15.9772 43.2067 16.6606 42.5754 16.9668 42.1921V31.9024H19.4877V45.4567H19.4898ZM29.192 42.6484C29.192 44.3255 28.5649 45.6296 26.8878 45.6296C25.9649 45.6296 25.1961 45.2921 24.494 44.415V45.4567H21.9502V27.0815H24.494V32.9983C25.0628 32.3045 25.8357 31.7316 26.7357 31.7316C28.5815 31.7316 29.1941 33.292 29.1941 35.1295V42.6484H29.192ZM38.5066 38.9983H33.6858V41.5567C33.6858 42.5734 33.7733 43.4525 34.7858 43.4525C35.8504 43.4525 35.9129 42.7359 35.9129 41.5567V40.615H38.5066V41.6338C38.5066 44.2442 37.3858 45.8276 34.7295 45.8276C32.3233 45.8276 31.092 44.0734 31.092 41.6338V35.5483C31.092 33.1962 32.6462 31.5607 34.9191 31.5607C37.3379 31.5607 38.5046 33.0983 38.5046 35.5483V38.9983H38.5066Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                {/* facebook */}
                <div className="mx-3">
                    <a href="/">
                    <svg width="30" height="30" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.91711 16.6667H0.667114V25H6.91711V50H17.3338V25H24.9213L25.6671 16.6667H17.3338V13.1937C17.3338 11.2042 17.7338 10.4167 19.6567 10.4167H25.6671V0H17.7338C10.2421 0 6.91711 3.29792 6.91711 9.61458V16.6667Z" fill="white"/>
</svg>

                    </a>
                </div>
                {/* instagram */}
                <div className="mx-3">
                    <a href="/">
                    <svg width="30" height="30" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6671 4.50625C32.3421 4.50625 33.1338 4.53125 35.7713 4.65208C42.5463 4.96042 45.7109 8.175 46.0192 14.9C46.14 17.5354 46.1629 18.3271 46.1629 25.0021C46.1629 31.6792 46.1379 32.4688 46.0192 35.1042C45.7088 41.8229 42.5525 45.0437 35.7713 45.3521C33.1338 45.4729 32.3463 45.4979 25.6671 45.4979C18.9921 45.4979 18.2004 45.4729 15.565 45.3521C8.77336 45.0417 5.62545 41.8125 5.31711 35.1021C5.19628 32.4667 5.17128 31.6771 5.17128 25C5.17128 18.325 5.19836 17.5354 5.31711 14.8979C5.62753 8.175 8.78378 4.95833 15.565 4.65C18.2025 4.53125 18.9921 4.50625 25.6671 4.50625ZM25.6671 0C18.8775 0 18.0275 0.0291667 15.3609 0.15C6.2817 0.566667 1.23586 5.60417 0.819198 14.6917C0.696281 17.3604 0.667114 18.2104 0.667114 25C0.667114 31.7896 0.696281 32.6417 0.817114 35.3083C1.23378 44.3875 6.27128 49.4333 15.3588 49.85C18.0275 49.9708 18.8775 50 25.6671 50C32.4567 50 33.3088 49.9708 35.9754 49.85C45.0463 49.4333 50.1046 44.3958 50.515 35.3083C50.6379 32.6417 50.6671 31.7896 50.6671 25C50.6671 18.2104 50.6379 17.3604 50.5171 14.6937C50.1088 5.62292 45.065 0.56875 35.9775 0.152083C33.3088 0.0291667 32.4567 0 25.6671 0V0ZM25.6671 12.1625C18.5775 12.1625 12.8296 17.9104 12.8296 25C12.8296 32.0896 18.5775 37.8396 25.6671 37.8396C32.7567 37.8396 38.5046 32.0917 38.5046 25C38.5046 17.9104 32.7567 12.1625 25.6671 12.1625ZM25.6671 33.3333C21.065 33.3333 17.3338 29.6042 17.3338 25C17.3338 20.3979 21.065 16.6667 25.6671 16.6667C30.2692 16.6667 34.0004 20.3979 34.0004 25C34.0004 29.6042 30.2692 33.3333 25.6671 33.3333ZM39.0129 8.65625C37.3546 8.65625 36.0109 10 36.0109 11.6562C36.0109 13.3125 37.3546 14.6562 39.0129 14.6562C40.6692 14.6562 42.0109 13.3125 42.0109 11.6562C42.0109 10 40.6692 8.65625 39.0129 8.65625Z" fill="white"/>
</svg>

                    </a>
                </div>
              </div>
              <div>
                  <span className="text-xs">@Strength Healthcare Group 2021. All Rights Reserved.</span>
              </div>
            </div>
          </div>
          <div className="inline-block mb-5">
              <a href="/" className="mx-2 text-xs" >Privacy Policy</a>
              <a href="/" className="mx-2 text-xs">Terms and conditions</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
