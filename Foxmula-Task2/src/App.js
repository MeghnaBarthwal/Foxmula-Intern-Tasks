import { Provider } from "react-redux";
import store from "./redux/store";
import icon from "./icon.svg";
import WeatherReport from "./components/weatherReport";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img
          src={icon}
          className="back-icon"
          alt="icon"
          style={{ top: "5vh", left: "3vw" }}
        />
        <WeatherReport />
        <img
          src={icon}
          className="back-icon"
          alt="icon"
          style={{ bottom: "5vh", right: "3vw" }}
        />
      </div>
    </Provider>
  );
}

export default App;
