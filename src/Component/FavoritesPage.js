import React from 'react'
import { Mealcard } from './Mealcard'

export const FavoritesPage = ({ favorites, toggleFavorite }) => {
    return (
        <div className="favorites-page">
            <h1>Favorites</h1>
            {favorites.length > 0 ? (
                <Mealcard detail={favorites} toggleFavorite={toggleFavorite} favorites={favorites.map(fav => fav.idMeal)} />
            ) : (
                <p>No favorite meals yet!</p>
            )}
        </div>
    )
}
