import React, { useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import isFunction from "lodash/isFunction";
import endpoint from "./endpoint";
import { BrowserRouter as Router, Route } from "react-router-dom";

const LOADING = "LOADING";
const RESPONSE_COMPLETE = "RESPONSE_COMPLETE";
const ERROR = "ERROR";

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      stats: [],
      loading: true,
      error: null
    };
  }

  if (action.type === RESPONSE_COMPLETE) {
    return {
      stats: action.payload.stats,
      loading: false,
      error: null
    };
  }

  if (action.type === ERROR) {
    return {
      stats: [],
      loading: false,
      error: action.payload.error
    };
  }

  return state;
};

const fetchStats = dispatch => {
  dispatch({ type: LOADING });
  fetch(endpoint)
    .then(response => response.json())
    .then(response =>
      dispatch({
        type: RESPONSE_COMPLETE,
        payload: { stats: response.stats }
      })
    )
    .catch(error => dispatch({ type: ERROR, payload: { error } }));
};

const initialState = {
  error: null,
  loading: false,
  stats: []
};

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = React.useCallback(
    action => {
      console.log(action);

      if (isFunction(action)) {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [state, enhancedDispatch];
};

export default function useStats() {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  const { stats } = state;

  useEffect(() => {
    dispatch(dispatch => {});
  }, [dispatch]);

  console.log(dispatch(fetchStats));
  return (
    <div>
      <header>
        <h1>Covid-19 Tracker</h1>
      </header>
      <main>
        <section>
          <p>Test</p>
        </section>
      </main>
    </div>
  );
}

//   const [stats, setStats] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       setError(false);

//       const data = await fetch(url).then(res => {
//         if (res.status === 200) {
//           setLoading(false);
//           return res.json();
//         } else {
//           setError(true);
//           setLoading(false);
//         }
//       });
//       setStats(data);
//     };
//     setLoading(true);
//     fetchData();
//   }, [url]);
//   return { stats, loading, error };
// }
