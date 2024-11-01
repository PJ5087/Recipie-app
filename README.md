A Food Recipe App built with React.js and used CSS for UI. Users can search for recipes, view recipe details, and save their favorite meals. The app includes light/dark mode toggling and a favorites section.

**Features**
Recipe Search: Search recipes by name using the TheMealDB API.
Recipe Details: View detailed information for each recipe, including ingredients and instructions.
Favorites: Save recipes to your favorites for quick access.
Dark/Light Mode: Toggle between light and dark modes.

**Project Structure**
/public
/src
  ├── components
  │   ├── Mainpage.js        # Main page with recipe search
  │   ├── Mealcard.js        # Displays individual meal details with a favorite button
  │   ├── Mealinfo.js        # Detailed view of each recipe
  │   └── FavoritesPage.js   # Favorites section with removal options
  |   └── Navbar.js          # Navbar section
  ├── App.js                 # App routing and structure
  ├── index.js               # Entry point
  └── App.css                # Main CSS
  └── Index.css              # CSS file


**Installation**
1. Clone the repository
   git clone https://github.com/yourusername/food-recipe-app.git
   cd food-recipe-app

2.Install dependencies
   npm install

3.Start the development server
  npm start

  
**Usage**
Search Recipes: Enter a dish name and click "Search."
View Details: Click on a recipe card for more details.
Add to Favorites: Click the heart icon on any recipe to add it to your favorites.
View Favorites: Go to the Favorites section to see saved recipes and remove items as needed.
Toggle Dark/Light Mode: Use the toggle button in the header to switch themes.

**TechnologiesUsed**
Frontend: React.js, CSS
API: TheMealDB API
