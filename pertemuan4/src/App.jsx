import { useState, useEffect } from "react";
import "./App.css";
import Article from "./components/Article/Article";
import post from "./post.json";
import Counter from "./components/Counter/Counter";
import Lifecycle from "./components/Lifecycle/Lifecycle";

function App() {
  return (
    <>
      <Article post={post}/>
      <h3>Top Author</h3>
      <ol>
        {post.map((post, index) => {
          return <li key={index}>{post.author}</li>;
        })}
      </ol>
      <button onClick={() => alert("Hello Mommy")}>Click Me!</button>
      <Counter />
      <Lifecycle />
    </>
  );
}

export default App;
