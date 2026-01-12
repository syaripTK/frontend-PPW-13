import { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor: Komponen dibuat");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount: Komponen sudah dirender ke DOM");

    //Perubahan pada DOM: Mengubah teks button, warna teks dan background
    //button setelah komponen di mount

    document.getElementById("btn").textContent = "klik untuk tambah";
    document.getElementById("btn").style.backgroundColor = "#3674B5";
    document.getElementById("btn").style.color = "#fff";
  }

  render() {
    return (
      <div>
        <h2>React lifecycle</h2>
        <p>Count: {}</p>
        <button id="btn">Tambah</button>
      </div>
    );
  }
}
