import "./styles.css";
import Header from "../src/component/Header/Header";
import Home from "../src/component/Home/Home";
import Aboutme from "./component/About/Aboutme";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Aboutme />
      </main>
    </div>
  );
}
