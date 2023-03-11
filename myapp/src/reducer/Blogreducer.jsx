const Blogreducer = (state, action) => {
  console.log("d", { ...state });
  console.log("🚀 ~ file: reducer.jsx ~ line 2 ~ Reducer ~ action", action);
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hitsData,
        nbPage: action.payload.noPage,
      };
    case "DELETE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currElem) => currElem.objectID != action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      let pageNumberInc = state.page+1;
      if(pageNumberInc>=state.nbPage){
        pageNumberInc=0
      }
      return {
        ...state,
        page: pageNumberInc,
      };
    case "PREV_PAGE":
      let pageNumber=state.page;
      if(pageNumber<=0){
        pageNumber=0
      }else{
        pageNumber=pageNumber+1
      }
      return {
        ...state,
        page: pageNumber ,
      };

    default:
      break;
  }
  return state;
};
export default Blogreducer;
