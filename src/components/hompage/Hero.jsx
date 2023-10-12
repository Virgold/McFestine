import React from "react";
import "./Hero.css";
import Button from "../common/Button";
import foodimage from "../../assets/images/herofoodimage.png";
import threedot from "../../assets/images/threedots.png";
import rightarrow from "../../assets/images/arrow_right_alt.png";
import cart from "../../assets/images/cartheroimage.png"

const Hero = () => {
  return (
    <div>
      <section class='heroSection'>
        <div class='slantBackground'>
          <div class='enclosingSection'>
            <div class='textHero'>
              <h1>
                Welcome to <span>McFESTINE’S</span>
              </h1>
              <h3>Restaurant & Supermarket</h3>
              <p>
                Indulge in the best of the Season at <span>Mcfestines,</span> whatever you’re
                preparing or preparing for. We can help you make it great!
              </p>
              <button className="inline-flex text-[white] lg:w-[30%] md:w-[40%] text-[13px] lg:text-[20px] md:text-[13px]  bg-[#CF9832] font-medium border border-[#CF9832] rounded-full md:py-[8px] py-[8px] md:px-[0px] px-[25px] hover:opacity-80 items-center justify-center ">
              <img src={rightarrow} alt="Arrow"/>
              Get Started
              </button>
              {/* <Button
              
                text='Get started'
                styles={`text-[white] lg:w-[30%] md:w-[40%] text-[13px] lg:text-[21px] md:text-[13px]  bg-[#CF9832] border border-[#CF9832] rounded-full md:py-[8px] py-[8px] md:px-[0px] px-[25px] hover:opacity-80`} */}
              {/* /> */}
            </div>
            <div class='imageHeroSection'>
              <div class='imageOne'>
                <img src={foodimage} alt='Food served in a plate' />
              </div>
              <div class='imageTwo'></div>
            </div>
          </div>
        </div>
      </section>

      <div className='heroBottom'>
        <div class='dots'>
         <img src={threedot} alt="" />
        </div>
        <div className='heroCart'>
          <img src={cart} alt='Cart icon' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
