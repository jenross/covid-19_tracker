import React from "react";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Home from "./components/Home";
import USPage from "./components/US";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () =>
    setTheme(theme => (theme === "light" ? "dark" : "light"));

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <Nav toggleTheme={toggleTheme} />

          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/us" component={USPage} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </React.Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
