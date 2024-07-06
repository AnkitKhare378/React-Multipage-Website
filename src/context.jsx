import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "http://universities.hipolabs.com/search?country=United+States";

const initialState = {
  image: "",
  name: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch(
      {
        type: "HOME_UPDATE",
        payload: {
          name: "Ankit Khare",
          image: "./images/hero.svg",
        },
      });
  };
  
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "A.K.Khare",
        image: "./images/about1.svg",
      },
    });
  };

  // to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>   
  );
  };


const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppProvider, useGlobalContext };

