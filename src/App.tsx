import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { CityList } from "./components/CityList";

const BASE_URL = "http://localhost:8000/cities";

export function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There wa an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={
              <CityList cities={cities} isLoading={isLoading}></CityList>
            }
          ></Route>
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading}></CityList>
            }
          ></Route>
          <Route path="countries" element={<p>Countries</p>}></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
