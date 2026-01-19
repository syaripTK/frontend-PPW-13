import Article from "../../components/Article/Article.jsx";
import Navbar from "../../components/Navbar/Navbar";
import post from "../../post.json";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Article post={post} />
    </>
  );
};

export default Blogs;
