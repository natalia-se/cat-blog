import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const PostDetailPage = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const [post, setPost] = useState({});

  const fetchData = () => {
    // change the address according to your setting
    fetch(`http://localhost:8888/wp-json/wp/v2/posts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {post.content && (
        <>
          <h1>{post.title?.rendered}</h1>
          <div>{parse(post.content.rendered)}</div>
        </>
      )}
    </>
  );
};

export default PostDetailPage;
