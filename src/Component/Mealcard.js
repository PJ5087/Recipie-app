import React from 'react'
import { NavLink } from 'react-router-dom';

export const Mealcard = ({detail, toggleFavorite, favorites}) => {
    console.log(detail);
    
  return (
    <div className='meals'>
        {!detail ? "": detail.map((currentItem)=>{
            const isFavorite = favorites.some(fav => fav.idMeal === currentItem.idMeal); //
            return (
                <div className='mealImg'>
                   <img src={currentItem.strMealThumb}/>
                   <p>{currentItem.strMeal}</p>
                   <NavLink to={`/${currentItem.idMeal}`}><button>Recipie</button></NavLink>
                   <button onClick={() => toggleFavorite(currentItem)}>  
                             {isFavorite ? "❤️" : "♡"} 
                   </button>

                   
                </div>
            )
        })
        
        }
    </div>
  )
}

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export const Mealcard = ({ detail, toggleFavorite, favorites }) => {
//     return (
//         <div className='meals'>
//             {!detail ? "No meals found." : detail.map((currentItem) => {
//                 const isFavorite = favorites.some(fav => fav.idMeal === currentItem.idMeal);

//                 return (
//                     <div key={currentItem.idMeal} className='mealImg'>
//                         <img src={currentItem.strMealThumb} alt={currentItem.strMeal} />
//                         <p>{currentItem.strMeal}</p>
//                         <NavLink to={`/${currentItem.idMeal}`}><button>Recipe</button></NavLink>
//                         <button onClick={() => toggleFavorite(currentItem)}>
//                             {isFavorite ? "❤️ Remove from Favorites" : "♡ Add to Favorites"}
//                         </button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

