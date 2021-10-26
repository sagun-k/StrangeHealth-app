import React, { Component } from 'react'

export class SecondContainer extends Component {
  
    render() {
        const style={
            backgroundColor:"#0099FF",
            

        }
        const box={
            boxShadow:" 0px 0px 15px rgba(0, 0, 0, 0.5)",
            backgroundColor:"#0099FF"
        }
        const box2={
            boxShadow:" 0px 0px 15px rgba(0, 0, 0, 0.5)",
            backgroundColor:"#224074"
        }
        const style2={
            backgroundColor:"#224074",
           
        }
        return ( 
            <div className=" w-full  ">
                <div className="md:grid-cols-2 md:grid-rows-1 grid grid-rows-2 w-10/12 mx-auto md:h-40 "  >
                <div className=" md:grid-start-1 md:grid-end-2 md:row-span-1 w-full  rounded-xl text-white justify-end " style={style} >
                    <p className="my-1 text-xs md:text-sm">For individuals</p>
                    <p className="my-2 text-lg md:text-3xl font-bold">Manage My Health</p>
                    <div className="w-2/6 mx-auto shadow-xs mt-5 rounded-xl mb-2 " style={box}  >
                    <input type="button" value="Book an appointment" className="text-white text-xxm md:text-xs " style={style}/>
                    </div>
                </div>
                <div className="md:row-span-1  md:grid-start-2 md:grid-end-3  w-full mx-auto rounded text-white  " style={style2} >
                    <p className="my-2 text-xs md:text-sm">For practitioners</p>
                    <p className="font-bold md:text-3xl text-lg my-2"> Manage My Practice</p>
                    <div className="w-2/6 mx-auto shadow-xs mt-5 rounded-xl mb-2 " style={box2}  >
                    <input type="button" value="Book an appointment" className="text-white md:text-xs text-xxm w-3/4 " style={style2}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SecondContainer
