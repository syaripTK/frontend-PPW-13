import { useState } from "react";

/**
 * Ada yang disebut single page application di react
 * yang mana jika dirender, page tidak ter-refresh
 * Nahh, dalam posisi ini maka kita membutuhkan state, dan hook state
 */

const Article = ({ post = [] }) => {
  const [search, setSearch] = useState("");
  const [filterPost, setfilterPost] = useState(post);

  const handleChangeSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const newfilterPost = post.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setfilterPost(newfilterPost);
  };

  return (
    <>
      Cari artikel : <input type="text" onChange={handleChangeSearch} />
      <br />
      <small>
        Ditemukan <b>{filterPost.length}</b> data dengan pencarian kata{" "}
        <b>{search}</b>{" "}
      </small>
      {filterPost.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <small>
              {item.author} - Date: {item.date}, tags: {item.tags}
            </small>
          </div>
        );
      })}
    </>
  );
};

export default Article;
