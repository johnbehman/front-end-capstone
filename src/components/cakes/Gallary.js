import React from "react";
import { useEffect, useState } from "react"
import "./Gallary.css";

export const Gallary = () => {
  const [gallary, setGallary] = useState([])

  useEffect(
            () => {
                const fetchData = async () => {
                    const response = await fetch('http://localhost:8088/cakeImages')
                    const gallaryArray = await response.json()
                    setGallary(gallaryArray)
                }
                fetchData()
               
            },
            []
        )
    




  return (
    <>
    <div className="gallry-background">
<div className="gallary_h1">
       <h1>Our Gallary</h1>
</div>
       <article className="gallarys" >
             {
                gallary.map(
                     (gallary) => {
                       return <section key={gallary.id} >
                          {/* <p>{gallary.address} - {gallary.imageUrl} square feet</p> */}

                          <div>
          <img className="gallary" src={gallary.imageUrl} alt="wedding cake" />
        
        </div>
                      </section>
                 }
             )
         }
         </article> </div>
    </>
  );
};
