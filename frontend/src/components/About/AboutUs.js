import React from "react";
import "./AboutUs.css";
import bookpg from "../../assets/Img/book.jpg";
const About = () => {
  return (
    <div className="Container">
      <div className="Content">
        <h2>Who We Are</h2>
        <p>
          Bookshelf is the for readers and book lovers recommendations. Our
          mission is to help readers and book lovers discover books they love
          and get more out of reading.
        </p>
        <p>
          Bookshelf is that site. It is a place where you can see what your
          friends are reading and vice versa. You can create "bookshelves" to
          organize what you've read (or want to read). You can comment on each
          other's reviews. You can find your next favorite book. And on this
          journey with your friends you can explore new territory, gather
          information, and expand your mind.
        </p>
        <div className="SubContent">
          <img src={bookpg} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
