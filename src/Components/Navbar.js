import React, { Component } from 'react'

export class Navbar extends Component {
    render() { 
       const styles={
           color:'#121212',
       }
        return (
            <div className="grid md:grid-cols-12 grid-cols-4 bg-white md:text-xs lg:text-lg" >
               <div className="md:col-start-1 md:col-end-3 mx-auto col-start-1 col-end-3" >
                   <img src="/images/cropped-SH-logo-e1586639771762-3 1.png" alt="Strength Health"  />
               </div>
               <div className="md:col-start-4 md:col-end-10 md:flex justify-around my-auto hidden  " style={styles}>
                   <div>
                      <a href="/">Home</a>
                       </div>
                   <div>
                       <a href="/">Clinicians</a>
                       </div>
                   <div>
                       <a href="/">Individuals</a>
                       </div>
                  <div>
                      <a href="/">Pricing</a>
                  </div>
                  <div>
                      <a href="/">Why Strength</a>
                  </div>
                  <div>
                      <a href="/">Resources</a>
                  </div>
               </div>
               <div className="md:col-start-11 md:col-end-13 col-start-4 col-end-4 my-auto w-full hidden md:block" >
                   <a href="/" style={{color:'#224074'}} >Login</a>
                   <hr className=" w-2/5 mx-auto " style={{color:'#224074',background: '#FFFFFF'
}} />
               </div>
               <div className="col-start-4 col-end-4 ml-14 my-auto w-full md:hidden" >
                   <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg></a>
               </div>
   
            </div>
        )
    }
}

export default Navbar
