import React from "react";

import "./styles.css";
import Header from "./Components/Header/Header";
import GlobalMap from "./Components/GlobalMap/GlobalMap";
import GlobalData from "./Components/GlobalData/GlobalData";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <GlobalMap />
      <GlobalData />
      <Footer />
    </div>
  );
}

export default App;
