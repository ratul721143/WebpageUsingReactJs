import React from 'react'
import Common from './Common';
import Img from '../src/images/img1.svg'


const About = () =>{
    return (
      <Common  
        greetingtext="Welcome To our About Page of"
        text="Lets Crack Your Dream Job Interview"
        buttonUrl="/Contact"
        buttonLink="Contact Us"
        image={Img}
      />
    );
};

export default About;