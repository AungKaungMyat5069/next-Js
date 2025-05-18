import React from "react";

import {gql} from "@apollo/client";
import {client} from "@/app/layout";

export default async function DishesByRestaurentComponent({ rid }) {
  let dishes = [];
    await client.query({
        query: gql`
        query Dishes{
    allDishesByRestaurantId(id: ${rid}){
    id
    title
    slogan
    price
    image
  }
 
}`
    }).then(res => {
        dishes = res.data.allDishesByRestaurantId;
        console.log('Hello',dishes);
    })
        .catch(err => console.log(err));



  return (
    <div>
      <h1>Hello !  </h1>
    </div>
  );
}
