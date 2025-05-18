import React from 'react'
import createApolloClient from '../../apollo-client'
import { gql } from '@apollo/client';

export default async function RestaurantComponenet() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
        query {
            getAllRestaurants {
                id
                title
                email
                address
                phone
                startTime
                endTime
            }
        }
        `
    });
    const dataArray = data.getAllRestaurants.slice(0);
    console.log(dataArray);
  return (
   <>
   </>
  )
}
