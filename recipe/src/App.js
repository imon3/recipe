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
      pageIndex: 1,
      search: ""
    };
  }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      details_id: id,
      pageIndex: index
    });
  };

  handleChange = e => {
    console.log("hello from handle change");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("hello from handle submit");
  };

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            search={this.search}
            handleDetails={this.handleDetails}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case 2:
        return (
          <RecipeDetails
            id={this.state.details_id}
            recipeDetails={recipeDetails}
            handleIndex={this.handleIndex}
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
