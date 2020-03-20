import React from "react";
import GlobalStats from "./GlobalStats";
// import endpoint from "./utils/endpoint";

const LOADING = "LOADING";
const RESPONSE_COMPLETE = "RESPONSE_COMPLETE";
const ERROR = "ERROR";
const NO_DATA = "NO_DATA";

const fetchReducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      result: null,
      loading: true,
      error: null,
      noData: null
    };
  }

  if (action.type === RESPONSE_COMPLETE) {
    return {
      result: action.payload.response,
      loading: false,
      error: null,
      noData: null
    };
  }

  if (action.type === ERROR) {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
      noData: null
    };
  }
  if (action.type === NO_DATA) {
    return {
      result: null,
      loading: false,
      error: null,
      noData: action.payload.noData
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
        const noData = data.error;
        if (noData) {
          dispatch({ type: NO_DATA, payload: { noData } });
        } else {
          dispatch({ type: RESPONSE_COMPLETE, payload: { response: data } });
        }
      } catch (error) {
        dispatch({ type: ERROR, payload: { error } });
      }
    };

    fetchUrl();
  }, [url]);
  return [state.result, state.loading, state.error, state.noData];
};

const initialState = {
  error: null,
  loading: false,
  result: null,
  noData: null
};

// import Stats from "./components/Stats";
// import CountrySelector from "./components/CountrySelector";

function Home() {
  const [response, loading, error, noData] = useFetch(
    "https://covid19.mathdro.id/api/"
  );

  const stats = response || [];

  return (
    <div>
      <header>
        <h1>Covid-19 Tracker</h1>
      </header>
      <main>
        <section>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <GlobalStats
              confirmed={stats.confirmed && stats.confirmed.value}
              dead={stats.deaths && stats.deaths.value}
              recovered={stats.recovered && stats.recovered.value}
            />
          )}
          {noData && <p>No data for this country yet.</p>}
          {error && <p className="error">{error.message}</p>}
        </section>
      </main>
    </div>
  );
}

export default Home;