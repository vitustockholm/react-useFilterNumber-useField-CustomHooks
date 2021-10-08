import React from 'react';
import useFetch from '../hooks/useFetch';

//
const PostPage = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <>
      <main>
        <section>
          <h1>Post</h1>
        </section>
        <section>
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              posts.map((post) => (
                <ul key={post.id}>
                  <li>{post.title}</li>
                  <li>{post.body}</li>
                </ul>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default PostPage;
