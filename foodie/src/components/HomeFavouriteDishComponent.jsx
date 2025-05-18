import React from "react";
import createApolloClient from "../../apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export default async function HomeFavouriteDishComponent() {
  const client = createApolloClient();
  const { data } =await client.query({
    query: gql`
      query {
        allDishes {
          id
          title
          slogan
          price
          image
        }
      }
    `,
  });
  const dataArray=data.allDishes.slice(0,6);


  return <div className="container mt-5">
       <div className="row">
        {
          dataArray && dataArray.map(item =>(
            <div className="col-md-4" key={item.id}>
               <div className="card mb-3" style={{height:450}}>
                <Image src={"/images/dishes/" + item.image}  
                className="card-img-top"
                 width={200} height={200} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.slogan}</p>
                  <div className=" d-flex justify-content-between align-items-center">
                    <h3>$ {item.price}</h3>
                    <Link href={'/restaurants'} className="btn btn-outline-primary">Order</Link>
                  </div>
                </div>
               </div>
            </div>
          ))  
        }
       </div>
  </div>;
}