import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [selectCategories, setSelectCategories] = useState("new");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then((res) => {
      console.log(res);
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
