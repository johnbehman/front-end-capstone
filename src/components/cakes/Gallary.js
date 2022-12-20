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
<div className="gallary_h1">
       <h1>List of gallary</h1>
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
         </article> 
    </>
  );
};




// import { useEffect, useState } from "react"


// export const Stores = () => {
//     const [Stores, SetStores] = useState([])

//     useEffect(
//         () => {
//             const fetchData = async () => {
//                 const response = await fetch('http://localhost:8088/Stores')
//                 const storesArray = await response.json()
//                 SetStores(storesArray)
//             }
//             fetchData()
//             console.log('Initial state of Stores', Stores)
//         },
//         [Stores]
//     )

//     return <>
//         <h1>List of Stores</h1>

//         <article className="stores">
//             {
//                 Stores.map(
//                     (store) => {
//                         return <section key={store.id} className="store">
//                             <p>{store.address} - {store.sqFootage} square feet</p>
//                         </section>
//                     }
//                 )
//             }
//         </article>
//     </>
// }