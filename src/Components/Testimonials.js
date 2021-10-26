import React, { Component } from 'react'

export class Testimonials extends Component {
    render() {
        const style={
            backgroundColor:"#0099FF",
          
        }
        return (
            <div className="w-full text-white mt-14"  >
                <h1 className="text-2xl font-bold" style={{color:"#224074"}} >Testimonials</h1>
                <div className="grid grid-rows-3 mt-5 w-full md:grid-cols-3 md:grid-rows-1 " >
                    {/* First testimonials  */}
                <div className="row-start-1 row-end-2 w-11/12 mx-auto text-center rounded-xl my-2 hover:shadow-xl transform hover:-translate-y-3 delay-150 md:col-start-1 md:col-end-1 md:row-span-1  "style={style} >
                      <div className="inline-block mt-5" >
                          <img src="./images/Testimonials.png" alt="" />
                          <h1 className="mt-4 text-2xl font-bold" >Luna S Joseph</h1>
                          <span className="text-xs" >New York, Usa</span>
                      </div>
                      <div className="w-11/12 mx-auto mb-9 mt-4">
                          <p className="text-xs " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore perferendis ad voluptate nostrum modi maxime! Blanditiis inventore perferendis vitae minima quasi consectetur ex, odit ad aliquam, at tempore molestiae!</p>
                      </div>
                </div>
                {/* Second Testimonials */}
                <div className="row-start-2 row-end-3 w-11/12 bg-blue-200 mx-auto text-center rounded-xl my-2 hover:shadow-xl transform hover:-translate-y-3 delay-150 md:col-start-2 md:col-end-3 md:row-span-1"  style={style}>
                <div className="inline-block mt-5" >
                          <img src="./images/Testimonials.png" alt="" />
                          <h1 className="mt-4 text-2xl font-bold" >Luna S Joseph</h1>
                          <span className="text-xs" >New York, Usa</span>
                      </div>
                      <div className="w-11/12 mx-auto mb-9 mt-4">
                          <p className="text-xs " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore perferendis ad voluptate nostrum modi maxime! Blanditiis inventore perferendis vitae minima quasi consectetur ex, odit ad aliquam, at tempore molestiae!</p>
                      </div>
                </div>
                {/* Third testimonials */}
                <div className="row-start-3 row-end-4 w-11/12 bg-blue-200 mx-auto text-center rounded-xl my-2 hover:shadow-xl transform hover:-translate-y-3 delay-150 md:col-start-3 md:col-end-4 md:row-span-1  " style={style} >
                <div className="inline-block mt-5" >
                          <img src="./images/Testimonials.png" alt="" />
                          <h1 className="mt-4 text-2xl font-bold" >Luna S Joseph</h1>
                          <span className="text-xs" >New York, Usa</span>
                      </div>
                      <div className="w-11/12 mx-auto mb-9 mt-4">
                          <p className="text-xs " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore perferendis ad voluptate nostrum modi maxime! Blanditiis inventore perferendis vitae minima quasi consectetur ex, odit ad aliquam, at tempore molestiae!</p>
                      </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Testimonials
