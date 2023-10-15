/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("new");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
