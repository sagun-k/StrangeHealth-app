import React, { Component } from "react";

export class Dashboard extends Component {
  render() {
    return (
      <div className="grid md:grid-cols-12  w-full ">
          {/* side bar */}
        <div className="md:col-start-1 md:col-end-3 h-screen  grid  w-full" style={{backgroundColor:" #224074"}}>
          <div className=" w-11/12 mx-auto ">
            <div className="w-11/12 mx-auto" > 
              <img
                src="./images/cropped-SH-logo-e1586639771762-3 1.png"
                alt=""
              />
            </div>
            <div className="inline-block mt-16 text-white">
              <p className="my-2" ><a href="/">Dashboard</a></p>
              <p className="my-2" ><a href="/">practitioners</a></p>
              <p className="my-2" ><a href="/">Records</a></p>
              <p className="my-2" ><a href="/">My Health</a></p>
              <p className="my-2" ><a href="/">Profile</a></p>
            </div>
            <div></div>
          </div>
        </div>
        {/* main content bar */}
        <div className="md:col-start-3 md:col-end-13 grid md:grid-cols-12 md:grid-rows-12 " >
            <div className="md:col-start-12 md:col-end-13 md:row-start-1 md:row-end-2">
                <img src="./images/Testimonials.png" alt="" />
            </div>
            <div className="md:col-start-1 md:col-end-13" >
                <hr />

            </div>


        </div>
      </div>
    );
  }
}

export default Dashboard;
