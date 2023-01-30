import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="container">
        
        <Jumbotron />
		<Cards />
		<Footer />
      </div>
    </div>
  );
};

export default Home;
