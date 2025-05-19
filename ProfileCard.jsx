import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <main>
      <section id="links-profile-container">
        <div className="avatar-img">
          <img src="/images/avatar-jessica.jpeg" alt="Profile Avatar" />
        </div>
        <div className="profile-text">
          <h1>Jessica Randall</h1>
          <h4>London, United Kingdom</h4>
          <p>"Front-end developer and avid reader"</p>
        </div>
        <div className="profile-links-container">
          <ul className="links-menu">
            <li><a href="https://github.com/" target="_blank">GitHub</a></li>
            <li><a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
            <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProfileCard;
