import React, { useState, useEffect } from 'react'
import { Mealcard } from './Mealcard'
import './Mainpage.css' 

export const Mainpage = ({ toggleFavorite, favorites }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [msg, setMsg] = useState("")
    const [darkMode, setDarkMode] = useState(false) // State for dark mode

    // Fetch default meals when the page loads
    useEffect(() => {
        const fetchDefaultMeals = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`) //  dynamically set
                const jsonData = await response.json()
                setData(jsonData.meals.slice(0, 5)) // the first 5 items for display
            } catch (error) {
                setMsg("Error loading default meals")
            }
        }
        fetchDefaultMeals()
    }, [])

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const myFun = async () => {
        if (search === "") {
            setMsg("Please enter something")
        } else {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                const jsonData = await response.json()
                setData(jsonData.meals || []) // Set data or empty array if no results
                setMsg("")
            } catch (error) {
                setMsg("Error searching for meals")
            }
        }
    }

    // Toggle dark mode state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <header className="header">

                {/* <h1 className="head">FOOD RECIPE APP</h1> */}
                <button className="toggle-button" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            
            <div className="container">
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Enter your dish name"
                        onChange={handleInput}
                    />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 className="error">
                    {msg}
                </h4>
                <div>
                    {data && data.length > 0 ? (
                        <Mealcard detail={data} toggleFavorite={toggleFavorite} favorites={favorites} />
                    ) : (
                        <p>No meals found</p>
                    )}
                </div>
            </div>
        </div>
    )
}


