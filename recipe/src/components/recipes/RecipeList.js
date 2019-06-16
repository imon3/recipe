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
      handleSubmit,
      error
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
            {error ? (
              <h1 className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                {error}
              </h1>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={handleDetails}
                  />
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeList;
