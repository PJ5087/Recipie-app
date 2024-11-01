import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const Mealinfo = () => {
    const {mealid} = useParams()
    const [info, setInfo] = useState()
    
    console.log(mealid);

    const getInfo = async () =>{
       const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`) 
       const jsonData = await get.json()
       console.log(jsonData.meals[0]);
    //    setInfo(jsonData.meals[0])

        console.log("API Response:", jsonData) // Logs the complete response for debugging

       
    // }
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await response.json()

        console.log("API Response:", jsonData) // Logs the complete response for debugging

        
        // Checking if meals data exists and should not be null
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
    
    // if(info != ""){
    //     getInfo()
    // }

    useEffect(() => {
        if (mealid) {
            getInfo()
        }
    }, [mealid])

  return (
    <>
    {
        !info ? "Data not found" : 
        <div className='mealInfo msg'>
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
