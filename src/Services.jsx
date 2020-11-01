import React from 'react'
import Card from './Card'
import CardData from './CardData'


const Services = () =>{
    return (
      <>
        <div className="mt-5 mb-5">
          <h1 className="text-center">
            Our Services 
          </h1>
        </div>
    
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row gy-4">
                {
                  CardData.map((val,index)=>{
                      return <Card key={index} img={val.imagesrc} title={val.title} text={val.text}/>
                  })
                }
            </div>
            </div>
          </div>
        </div>
      </>
      
    );
};

export default Services;