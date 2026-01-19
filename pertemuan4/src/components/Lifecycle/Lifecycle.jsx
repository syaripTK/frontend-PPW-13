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

    this.interval = setInterval(() => {
      console.info("Count sekarang", this.state.count);
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "3. componentDidUpdate: Komponen diperbarui",
      prevState.count,
      "->",
      this.state.count
    );
  }

  componentWillUnmount() {
    console.info("4. componentWillUnmount: Komponen akan dihapus");
    clearInterval(this.interval);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>React lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button id="btn" onClick={this.increment}>
          Tambah
        </button>
      </div>
    );
  }
}
