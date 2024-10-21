import React from 'react'
import rim1 from "../images/rim1.png"
import rim2 from "../images/tyre5-croped.png"
import rim3 from "../images/rim3.png"
import rim5 from "../images/rim5.png"
import rim7 from "../images/rim7.png"
import lambo from "../images/lambo.jpg"
import tyre from "../images/tyre8.png"
import "./pagesStyles/home.css"
import Products from './homepage components/Products'
import MultiCard from './homepage components/MultiCard'
import Footer from '../components/Footer'
import ferrari from "../images/Ferrari-cut.mp4"
import tyre_crop1 from "../images/tyre-crop1.png"
import tyre_crop2 from "../images/tyre-crop2.png"
import tyre_crop3 from "../images/tyre-crop3.png"
import tyre_crop4 from "../images/tyre-crop4.png"
import tyre_crop5 from "../images/tyre-crop5.png"

const Home = () => {
  return (
    <>
      <div className='home-main-container2'>

        <video autoPlay muted loop
          style={{ position: "absolute" }}
          width="100%"
          height="570px">
          <source src={ferrari} type="video/mp4" />
        </video>

        <div className='card-text-div2' style={{ position: "relative" }}>
          <h1 style={{ fontSize: "50px", color: "white", margin: "0 0 5px 0" }}>Get your Rims Now <span style={{color:"rgb(170, 29, 29)"}}>!</span></h1>
          <h1 style={{ fontSize: "70px", color: "rgb(170, 29, 29)", margin: "0 0 0px 0" }}>15% Discount</h1>
          <p style={{ fontSize: "30px", color: "white", margin: "10px 0 50px 0" }}>Variety of Rims check them out don't miss the chance to get them </p>
          <div style={{ height: "70px" }}>
            <button className='card-button'><img src={rim7} alt='rims picture' className='rim-pic2 ' /> Buy Now!</button></div>
        </div>

      </div>


      {/*                    card                         */}


      <div className='rim-card-main-div'>

        <div className='card-container'>


          <img src={rim2} alt="rim" className='card-img' />


          <div className='detail-section'>
            <h1 style={{ color: "rgb(193 42 42)", marginBottom: "5px" }}>Pirelli P Zero Rim</h1>
            <p style={{ color: "white" }}><strong style={{ color: "white" }}></strong>
              The rim features a classic multi-spoke design, adding strength and style. The deep black finish provides a modern, aggressive look
              The tire has a circular shape with a radial tread pattern designed for high performance. The rim has a concave shape that not only adds to the visual appeal</p>
          </div>

        </div>
      </div>



      {/* card 2 */}


      <div className='rim-card-main-div2 '>

        <div className='card-container2  '>

          <div className='detail-section2'>
            <h1 style={{ color: "rgb(193 42 42)", marginBottom: "5px" }}>Lamborghini Star Rim</h1>
            <p style={{ color: "white" }}>
              This rim features a sleek 5-split spoke design with a glossy black finish, providing an aggressive and premium look.
              The rim has a concave shape, enhancing aerodynamics and giving a sporty appearance. The narrow spokes
            </p>
          </div>

          <img src={tyre_crop5} alt="rim" className='card-img2' />
        </div>
      </div>

      {/*     card 3 */}

      <div className='rim-card-main-div'>

        <div className='card-container'>


          <img src={tyre_crop2} alt="rim" className='card-img' />


          <div className='detail-section'>
            <h1 style={{ color: "rgb(193 42 42)", marginBottom: "5px" }}>Mercedes-Benz Star Rim</h1>
            <p style={{ color: "white" }}>
              This rim showcases a 5-spoke star design with a metallic silver finish, representing both luxury and strength.
              The rim has a convex shape, with thick spokes providing stability and support, making it a great option for vehicles that need both style and durability.
            </p>
          </div>

        </div>
      </div>



      {/* card 4 */}


      <div className='rim-card-main-div2 '>

        <div className='card-container2  '>

          <div className='detail-section2'>
            <h1 style={{ color: "rgb(193 42 42)", marginBottom: "5px" }}>Lambo Huracán EVO Rim</h1>
            <p style={{ color: "white" }}>
              black Lamborghini Huracán EVO rims are designed with a sophisticated multi-spoke pattern, ensuring both style and high performance.
              The Lamborghini Huracán EVO features a star-shaped, multi-spoke wheel design that combines strength and style.
            </p>
          </div>

          <img src={tyre_crop4} alt="rim" className='card-img2' />
        </div>
      </div>
      <Products />
      <MultiCard />



    </>
  )
}

export default Home