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
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
    <>
      <Header />
      <h1>To-do List</h1>
      <ol>
        <li>Mengerjakan tugas fron end</li>
        <li>Mempelajari tutorial react JS</li>
        <li>Muroja'ah</li>
      </ol>
      <img src="https://picsum.photos/200/308" alt="Gambar" />
      <Footer nama="Kosasih" />
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
