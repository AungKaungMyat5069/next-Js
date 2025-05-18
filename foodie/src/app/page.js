import HeroComponent from '@/components/HeroComponent'
import HomeFavouriteDishComponent from '@/components/HomeFavouriteDishComponent'
import React from 'react'

export default function page() {
  return (
    <>
      <NavbarComponent/>
      <HeroComponent/>
      <HomeFavouriteDishComponent/>
    </>
  )
}
