import { createContext, useEffect, useReducer } from "react";
// import { Reducer as reducer } from "../reducer/Blogreducer";
import reducer from "../reducer/Blogreducer";

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
    dispatch({ type: "SET_LOADING" });
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

  //to remove the post
  const removePost = (objectID) => {
    dispatch({ type: "DELETE_POST", payload: objectID });
  };

  //search
  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };
  //pagniation
  const getNextPage=()=>{
    dispatch({type:"NEXT_PAGE"})
  }
  const getPrevPage=()=>{
    dispatch({type:"PREV_PAGE"})
  }

  //to call api function
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>
      {children}
    </AppContext.Provider>
  );
};
