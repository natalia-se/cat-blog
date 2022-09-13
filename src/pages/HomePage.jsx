import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const HomePage = () => {
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  //Get JSON from wordpress with posts etc.

  const fetchPosts = () => {
    fetch("http://localhost:8888/wp-json/wp/v2/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  const fetchCategory = () => {
    fetch("http://localhost:8888/wp-json/wp/v2/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  };

  const fetchRandomImage = () => {
    const url = "https://aws.random.cat/meow";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  };

  useEffect(() => {
    fetchRandomImage();
    fetchPosts();
    fetchCategory();
  }, []);

  // console.log("posts", parse(posts[0]));
  return (
    <>
      <div className="hero">
        <img className="randomImage" src={image.file} alt="cat" />
        <div className="greeting">Hello and welcome to our cat blog!</div>
      </div>
      <div>
        <h1>Cats Blog</h1>
        <div className="container">
          {posts.length > 0 && (
            <>
              {posts.map((post) => (
                <div className="card" key={post.id}>
                  <div className="card__header"></div>
                  <div className="card__body">
                    {
                      <span className="tag tag-blue">
                        {
                          categories.find(
                            (category) => category.id === post.categories[0]
                          ).name
                        }
                      </span>
                    }
                    <h4>{post.title.rendered}</h4>
                    <div className="text">{parse(post.content.rendered)}</div>
                    <Link to={`/posts/${post.id}`}>read more...</Link>
                  </div>
                  <div className="card__footer">
                    <div className="user">
                      <div className="user__info">
                        <h5>Name</h5>
                        <small>{post.date}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
