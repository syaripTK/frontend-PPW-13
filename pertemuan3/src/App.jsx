import "./App.css";
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
      <Footer />
    </>
  );
}

export default App;
