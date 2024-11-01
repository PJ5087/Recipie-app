
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Mainpage } from './Component/Mainpage';
import { Mealinfo } from './Component/Mealinfo';
import { FavoritesPage } from './Component/FavoritesPage';
import React, { useState } from 'react';
import NavBar from './Component/Navbar';

function App() {
  const [favorites, setFavorites] = useState([]);

  // Function to toggle a meal in and out of favorites
  const toggleFavorite = (meal) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.idMeal === meal.idMeal)
        ? prevFavorites.filter((fav) => fav.idMeal !== meal.idMeal)
        : [...prevFavorites, meal]
    );
  };

  return (
    <>
      
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<Mainpage toggleFavorite={toggleFavorite} favorites={favorites} />}
        />
        <Route
          path="/:mealid"
          element={<Mealinfo toggleFavorite={toggleFavorite} favorites={favorites} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </>
  );
}

export default App;
