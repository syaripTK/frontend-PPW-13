import { useState } from "react";
import Search from "../Search/Search";

/**
 * Ada yang disebut single page application di react
 * yang mana jika dirender, page tidak ter-refresh
 * Nahh, dalam posisi ini maka kita membutuhkan state, dan hook state
 */

const Article = ({ post = [] }) => {
  const [filterPost, setfilterPost] = useState(post);
  const [postTotal, setPostTotal] = useState(post.length);

  const onChangeSearch = (searchTerm) => {
    const newfilterPost = post.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setfilterPost(newfilterPost);
    setPostTotal(newfilterPost.length );
  };

  return (
    <>
      <Search totalPost={postTotal} onSearchChange={onChangeSearch} />
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
