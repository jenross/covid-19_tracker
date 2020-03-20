import React from "react";

const LOADING = "LOADING";
const RESPONSE_COMPLETE = "RESPONSE_COMPLETE";
const ERROR = "ERROR";

const fetchReducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      result: null,
      loading: true,
      error: null
    };
  }

  if (action.type === RESPONSE_COMPLETE) {
    return {
      result: action.payload.response,
      loading: false,
      error: null
    };
  }

  if (action.type === ERROR) {
    return {
      result: null,
      loading: false,
      error: action.payload.error
    };
  }

  return state;
};

const useFetch = url => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  React.useEffect(() => {
    dispatch({ type: LOADING });

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({ type: RESPONSE_COMPLETE, payload: { response: data } });
      } catch (error) {
        dispatch({ type: ERROR, payload: { error } });
      }
    };

    fetchUrl();
  }, [url]);
  return [state.result, state.loading, state.error];
};

const initialState = {
  error: null,
  loading: false,
  result: null
};

export default useFetch;
