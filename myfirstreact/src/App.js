import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = true;

  // Method 1: If-Else
  let bookComponent;

  if (showBook) {
    bookComponent = <BookDetails />;
  } else {
    bookComponent = <h2>No Book Details Available</h2>;
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1>Blogger App</h1>

      {/* Method 1: If-Else */}
      {bookComponent}

      <hr />

      {/* Method 2: Ternary Operator */}
      {showBlog ? <BlogDetails /> : <h2>No Blog Details</h2>}

      <hr />

      {/* Method 3: Logical AND */}
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;