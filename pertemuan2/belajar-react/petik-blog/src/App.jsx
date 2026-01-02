/**
 * Component adalah tampilan UI yan terdiri dari element dan logika
 * Element adalah bagian paling kecil dari component
 *
 *
 * Component di dalam react adalah sebuah function yang mengembalikan nilai berupa jsx dan logic
 *
 * Component harus dibuat dengan awalan huruf kapital, ex: App, Header
 *
 * Di bawah ini merupakan contoh dari component yaitu function App()
 * yang mengembalikan element H1 dan element ol-li
 */

import { Component } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Header/Profile/Profile.jsx";
import Customer from "./components/Customer/Customer.jsx";
import { member } from "./components/module/data.js";

function App() {
  const a = 10;
  const b = 5;
  console.info(a + b);

  return (
    <>
      {/* <Header />
      <h1>To-do List</h1>
      <ol>
        <li>Mengerjakan tugas fron end</li>
        <li>Mempelajari tutorial react JS</li>
        <li>Muroja'ah</li>
      </ol> */}
      {/* Untuk penulisan props di dalam app bisa menggunakan string atau langsung {}, atau {""}*/}

      {/* <Profile nama="Jajang" umur={30} alamat={"Bandung"} /> */}

      {/* Karena componet itu reuasble maka kita bebas memanggilnya beberapa kali */}

      {/* <Profile nama="Kohar" umur={18} alamat={"Fakfak Baubau"} />

      <img src="https://picsum.photos/200/308" alt="Gambar" />
      <Footer nama="Kosasih" /> */}
      <Customer nama="Ucup" alamat={"Depok"} membership={member.pr} />
      <Customer nama="Asih" alamat={"Fakfak"} membership={member.g} />
      <Customer nama="Mr Pudidi" alamat={"Cianjur"} membership={member.pl} />
    </>
  );
}
// Cara Pertama(disarankan) adalah membuat component dengan function
// function Header() {
//   return (
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Login</li>
//       </ul>
//     </nav>
//   );
// }

// Cara kedua(tidak disarankan) adalah membuat component dengan menggunakan class
// class Footer extends Component {
//   render() {
//     return (
//       <footer>
//         <h3>Copyright &copy;2026 Developed by Ahmad Syangkan Syarip</h3>
//         <span>Make with &#10084;</span>
//       </footer>
//     );
//   }
// }

export default App;
