import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Womens from "./components/womens/Womens";
import Mens from "./components/mens/Mens";
import Home from "./components/home/Home";
import UrbanRenewal from "./components/urban_renewal/UrbanRenewal";
import Music from "./components/music/Music";
import Lifestyle from "./components/lifestyle/Lifestyle";
import Beauty from "./components/beauty/Beauty";
import Brands from "./components/brands/Brands";
import Sale from "./components/sale/Sale";
import Giftcards from "./components/giftcards/Giftcards";

function App() {
  return (
    <div className="App">
      <Header />
      <Womens />
      <Mens />
      <Home />
      <UrbanRenewal />
      <Music />
      <Lifestyle />
      <Beauty />
      <Brands />
      <Sale />
      <Giftcards />
      <Footer />
    </div>
  );
}

export default App;
