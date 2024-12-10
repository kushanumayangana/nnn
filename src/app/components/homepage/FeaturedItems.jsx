import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from './FoodItem'

const FeaturedItems = ({category}) => {

  const {sampleFoodItems} = useContext(StoreContext)
  
  return (
    <div className='' id=''>
      <h2>FOODS</h2>
      <div>
        {sampleFoodItems.map((item)=>{
          if(category==="All" || category===item.category){
            return <FoodItem key={item.id} id={item.id} name={item.name} description={item.description} image={item.image} price={item.price}/>
          }

        })}
      </div>
    </div>
  )
}

export default FeaturedItems