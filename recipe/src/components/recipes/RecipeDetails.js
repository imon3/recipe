import React from "react";

class RecipeDetails extends React.Component {
  render() {
    console.log(this.props.recipes);
    return (
      <>
        <h1>Hello From RecipeDetails</h1>
      </>
    );
  }
}

export default RecipeDetails;
