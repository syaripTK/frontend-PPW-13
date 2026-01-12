import "./App.css";
// import Card from "./components/Content/Card";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Content nama="Wahyu" membership="Gold" />
      <Content nama="Bambang" membership="Platinum" />
      <Content nama="Budi" membership="Silver" />
      <h3>Yuk Berlangganan Membership</h3>
      <div className="card-wrapper">
        {/* <Card />
        <Card member={"Gold"} price={150000} isGold />
        <Card member={"Platinum"} price={250000} /> */}
        <Card
          price={0}
          title={"Free"}
          benefit1="Gratis tanpa biaya langganan"
          benefit2="Bisa melihat katalog dan update terbaru"
          benefit3="Akses dasar ke fitur utama"
          benefit4="Dukungan Komunitas"
        />
        <Card
          price={150000}
          title={"Gold"}
          benefit1="Gratis tanpa biaya langganan"
          benefit2="Bisa melihat katalog dan update terbaru"
          benefit3="Akses dasar ke fitur utama"
          benefit4="Dukungan Komunitas"
          isPopular={true}
        />
        <Card
          price={200000}
          title={"Platinum"}
          benefit1="Gratis tanpa biaya langganan"
          benefit2="Bisa melihat katalog dan update terbaru"
          benefit3="Akses dasar ke fitur utama"
          benefit4="Dukungan Komunitas"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
