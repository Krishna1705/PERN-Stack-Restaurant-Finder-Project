import React,{useContext, useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = (props) => { 
const {restaurants,setRestaurants}=useContext(RestaurantsContext)
 useEffect(()=>{
   const fetchData = async()=>{
        try{
            const response =  await RestaurantFinder.get("/");
            setRestaurants(response && response.data && response.data.data && response.data.data.restaurants)
            console.log('restaurants',restaurants)
           }catch(err){
            console.log('err',err);
           }
    }
    fetchData()
 },[])

  return (
   <>
   <div className='list-group'>
    <table className='table table-hover table-dark'>
        <thead>
            <tr className='bg-primary'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Mc donald</td>
                <td>new york</td>
                <td>$$</td>
                <td>Ratings</td>
                <td><button className='btn btn-warning'>Update</button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
        
            </tr>
        </tbody>
    </table>
   </div>
   </>
  )
}

export default RestaurantList