/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("new");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    // fetchDataFromApi(`search/?q=${query}`).then((res) => {
    //   console.log(res);
    //   //   setSearchResults(true);
    //   setLoading(false);
    // });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategories);
  }, [selectedCategories]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategories,
        setSelectedCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
