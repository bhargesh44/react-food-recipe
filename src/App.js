import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "fd00cfc9";
  const APP_KEY = "02262584a364d788759b11fd2a5955ad";

  const getRecipes = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(result.data.hits);
  };
  const onSearchClick = () => {
    getRecipes();
  };
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </>
  );
}

export default App;
