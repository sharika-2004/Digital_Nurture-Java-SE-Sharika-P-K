import "./App.css";

import BookDetails, { books } from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  return (

    <div>

      <div className="container">

        <div className="course">

          <h1>Course Details</h1>

          <CourseDetails />

        </div>

        <div className="book">

          <h1>Book Details</h1>

          <BookDetails books={books} />

        </div>

        <div className="blog">

          <h1>Blog Details</h1>

          <BlogDetails />

        </div>

      </div>
