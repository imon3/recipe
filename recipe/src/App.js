import React from "react";
import "./App.css";
import { recipes } from "./tempFiles/tempList";
import RecipeList from "./components/recipes/RecipeList";
import RecipeDetails from "./components/recipes/RecipeDetails";

function App() {
  return (
    <>
      <RecipeList />
      <RecipeDetails recipes={recipes} />
    </>
  );
}

export default App;
