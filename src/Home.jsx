import React from 'react'
import Common from './Common'
import Img from '../src/images/img2.svg'

const Home = () =>{
    return (
      <>
        <Common  
          greetingtext="Grow Your Coding Skill With "
          text="Take your technical talent to everybody"
          buttonUrl="/Services"
          buttonLink="Get Started"
          image={Img}
        />
      </>
    );
};

export default Home;