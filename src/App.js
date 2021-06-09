import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("home");

  useEffect(() => {
    loadData();
  }, []);

  console.log(allCountries);

  const loadData = async () => {
    try {
      const data = await axios.get(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      setAllCountries(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="container mx-auto">
      <Header setPage={setPage} />
      {page === "home" && <Home allCountries={allCountries} />}
      {page === "allCountries" && <Countries allCountries={allCountries} />}
    </div>
  );
}

export default App;
