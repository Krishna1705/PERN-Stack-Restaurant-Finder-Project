import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  return (
    <>
    <Header></Header>
    <AddRestaurant></AddRestaurant>
    <RestaurantList></RestaurantList>
    </>
  )
}

export default Home