import "./App.css";
import Card from "./components/Content/Card";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Content nama="Wahyu" membership="Gold" />
      <Content nama="Bambang" membership="Platinum" />
      <Content nama="Budi" membership="Silver" />
      <h3>Yuk Berlangganan Membership</h3>
      <div className="container">
        <Card />
        <Card member={"Gold"} price={150000} isGold />
        <Card member={"Platinum"} price={250000} />
      </div>
      <Footer />
    </>
  );
}

export default App;
