import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Mealinfo = () => {
    const {mealid} = useParams()
    const [info, setInfo] = useState()
    
    console.log(mealid);

    const getInfo = async () =>{
    //    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealid}`) 
    //    const jsonData = await get.json()
    //    console.log(jsonData.meals[0]);
       
    // }
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealid}`)
        const jsonData = await response.json()
        
        // Check if meals data exists and is not null
        if (jsonData.meals && jsonData.meals.length > 0) {
            setInfo(jsonData.meals[0])
            console.log(jsonData.meals[0])
        } else {
            console.log("No meals found.")
            setInfo(null)
        }
    } catch (error) {
        console.error("Error fetching meal data:", error)
    }
}
    
    if(info !== ""){
        getInfo()
    }


  return (
    <>
    {
        !info ? "Data not found" : 
        <div className='mealInfo'>
        <img src={info.strMealThumb}/>
        <div className='info'>
            <h1>Recipie Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
        </div>

    </div>
    }
    </>
    
  )
}
