import React from "react";
import "./App.css";
import { recipes } from "./tempFiles/tempList";
import { recipeDetails } from "./tempFiles/tempDetails";
import RecipeList from "./components/recipes/RecipeList";
import RecipeDetails from "./components/recipes/RecipeDetails";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: recipes,
      url:
        "https://www.food2fork.com/api/search?key=f141ed8cccedb28ecdcabc6507092a51",
      details_id: 35387,
      pageIndex: 0
    };
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return <RecipeList recipes={this.state.recipes} />;
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            recipeDetails={recipeDetails}
          />
        );
    }
  };

  render() {
    // console.log(this.state.recipes);
    return <>{this.displayPage(this.state.pageIndex)}</>;
  }
}

export default App;
