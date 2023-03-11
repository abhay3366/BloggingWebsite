import { createContext, useEffect, useReducer } from "react";
// import { Reducer as reducer } from "../reducer/Blogreducer";
import reducer from "../reducer/Blogreducer"

export const AppContext = createContext();

const initalState = {
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
  isLoading: true,
  
};
let API = "https://hn.algolia.com/api/v1/search?";
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const fetchApiData = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(
        "🚀 ~ file: Context.jsx ~ line 21 ~ fetchApiData ~ data",
        data
      );
      dispatch({
        type: "GET_STORIES",
        payload: {
          hitsData: data.hits, //yaha per hum "data" line 20 wala hai aur yes data me hit name
          noPage: data.nbPages, //ka object hai jo hm key hitsData ki help se pass kar rahe hai
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
};
