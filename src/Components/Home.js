import React, { Component } from 'react'
import Navbar from './Navbar'
import FirstContainer from './FirstContainer'
import SecondContainer from './SecondContainer'
import ManageYourProjects from './ManageYourProjects'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Footer from './Footer'
export class Home extends Component {
    render() {
        return (
            <>
           <Navbar/>
            <FirstContainer/>
            <div className="mt-3" >
            <SecondContainer/>
            </div>
            <div className="mt-3">
            <ManageYourProjects/>
            </div>
            <div className="mt-3">  <WhyChooseUs/></div>
            <div className="mt-4 mb-3">  <Testimonials/></div>
            <Footer/>
          
            </>
        )
    }
}

export default Home
