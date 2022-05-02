import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDispatch from "../../redux/users/actions";
import "./index.css";

const Profile = (props) => {
  const img = 'https://avatars.githubusercontent.com/u/79997474?s=64&v=4'
  
  let dispatch = useDispatch();
  let store = useSelector(state=>state);
  let payload = store.user;
  let user = payload.data;

  useEffect(()=>{
    dispatch(UserDispatch.getUser({
      user: "Enobaks"
    }))
  },[dispatch]);

  return (
    <div className="profile-wrap">
      <div className="row fate">
        <div className="col-md-12 mt-4">
          <div className="list-wrap">
            <ul className="route-links">
              <li>
                <i className="fa-light fa-book-open"></i>Overview
              </li>
              <li>
                <i className="fa-light fa-book-bookmark"></i>Repositories
              </li>
              <li>
                <i className="fa-light fa-table-layout"></i>Projects
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
      <div className="row fate main-section">
        <div className="col-md-3 pic-section">
          <div className="profile-img-wrap">
            <div className="profile-image"></div>
            <div className="badge-container">
              <i className="fa-regular fa-face-grin-wide"></i>
            </div>
          </div>
          <h5 className="profile-name mb-3">Enobaks</h5>
          <button className="btn btn-block">Edit profile</button>
          <div className="follow-section mt-3 mb-5">
            <svg
              text="muted"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-people"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
              ></path>
            </svg>
            <span><b>4</b> followers </span>.
            <span><b>2</b> following</span>
          </div>
          <hr />
          <div className="organisation-wrap">
            <h5>Organizations</h5>
            <img className="img" src={img} alt="" width={32} height={32}/>
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
                  <i className="fa-light fa-star"></i>Star
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
