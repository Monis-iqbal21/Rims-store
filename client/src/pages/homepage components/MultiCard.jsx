import React from 'react';
import "../pagesStyles/multicard.css";
import pexels3 from "../../images/pexels3.jpg"
import pexels2 from "../../images/pexels2.jpg"
import lambo from "../../images/lambo.jpg"
import mountains from "../../images/mountains.png"
import cars from "../../images/cars-background.png"

const MultiCard = () => {
    return (
        <div className='multicard_main_container'>



            <div className='multicard_detail'>
                <h1 style={{fontSize :"48px" , margin: "0px 0px 30px 0px", boxSizing: "border-box"}}>Make your Wheel <span style={{ color: "red" }}>Vroom!</span></h1>
                <p>Upgrade your ride with our top-quality rims and tires, designed to enhance both performance and style. Whether you're cruising the city streets or hitting the highway, our selection of premium rims and tires will ensure you stand out from the crowd. Don't settle for ordinary—experience the thrill of a perfect fit and smooth ride with our exclusive 15% discount. Explore our collection and give your car the edge it deserves!</p>
            </div>


            <div className='multicards-div'>
                <div className='multicard_img  multi-card-image-1'>

                </div>
                <div className='multicard_img  multi-card-image-2'>

                </div>
                <div className='multicard_img  multi-card-image-3'>

                </div>
            </div>
        </div>
    );
}

export default MultiCard;
