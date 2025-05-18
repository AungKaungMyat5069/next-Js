

import DishesByRestaurentComponent from '@/components/DishesByRestaurentComponent';
import React from 'react'

export default function RestaurentDishes({params}) {
   const id = params.id ;
  return (
    <div>
        <DishesByRestaurentComponent rid={id}/>
    </div>
  )
}
