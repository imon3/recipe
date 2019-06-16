import React from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends React.Component {
  render() {
    const {
      recipes,
      handleDetails,
      search,
      handleChange,
      handleSubmit
    } = this.props;

    return (
      <>
        <RecipeSearch
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          {/* Title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* End Of Title */}
          <div className="row">
            {recipes.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={handleDetails}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeList;
