import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-wrap">
      <div className="row fate">
        <div className="col-md-12 mt-4">
          <div className="list-wrap">
            <ul className="route-links">
              <li>
                <i class="fa-light fa-book-open"></i>Overview
              </li>
              <li>
                <i class="fa-light fa-book-bookmark"></i>Repositories
              </li>
              <li>
                <i class="fa-light fa-table-layout"></i>Projects
              </li>
              <li>
                <i className="fa-light fa-cube"></i>Packages
              </li>
              <li>
                <i className="fa-light fa-star"></i>Stars
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
      <div className="row fate">
        <div className="col-md-3 pic-section">
          <div className="profile-img-wrap">
            <div className="profile-image"></div>
            <div className="badge-container">
              <i className="fa-regular fa-face-grin-wide"></i>
            </div>
          </div>

          <h5 className="profile-name">Enobaks</h5>
          <button>Edit profile</button>
          <div className="follow-section">
            <i class="fa-light fa-user-group"></i>
            <p>4 followers</p>
            <span>.</span>
            <p> 2 following</p>
            <hr />
            <h5>Organizations</h5>
          </div>
        </div>
        <div className="col-md-9 repo-section">
          <div className="repo-wrap">
            <div className="t">
              <div className="title">
                <h2>phoneBook</h2>
                <span>Public</span>
              </div>
              <div className="tags">
                <p>
                  <span></span>Javascript
                </p>
                <p>Updated 9 days ago</p>
              </div>
            </div>
            <div className="star">
              <div className="obj">
                <p>
                  <i class="fa-light fa-star"></i>Star
                </p>
                <select name="" id="">
                  <option value="">Future ideas</option>
                  <option value="">My stack</option>
                  <option value="">Inspiration</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
