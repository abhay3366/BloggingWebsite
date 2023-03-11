const Blogreducer = (state, action) => {
  console.log("d", { ...state });
  console.log("🚀 ~ file: reducer.jsx ~ line 2 ~ Reducer ~ action", action);
  switch (action.type) {
    case "SET_LOADING":
      return{
        ...state,
        isLoading:true
      }
    case "GET_STORIES":
      return {
        ...state,
        isLoading:false,
        hits: action.payload.hitsData,
        nbPage: action.payload.noPage,
      };

    default:
      break;
  }
  return state;
};
export default Blogreducer;
