import React from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends React.Component {
  render() {
    return (
      <>
        <h1>Hello from RecipeList</h1>
        <RecipeSearch />
        <Recipe />
      </>
    );
  }
}

export default RecipeList;
