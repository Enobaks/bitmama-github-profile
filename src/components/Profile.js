import React from "react";
import "./Profile.css";
import Star from "../assets/star-graph.png";

const Profile = () => {
  const img = "https://avatars.githubusercontent.com/u/79997474?s=64&v=4";
  return (
    <div className="profile-wrap">
      <div className="row fate">
        <div className="col-md-12 mt-4">
          <div className="list-wrap">
            <ul className="route-links">
              <li>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="nav-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                Overview
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="nav-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
                Repositories<span className="counter">45</span>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="nav-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                  ></path>
                </svg>
                Projects
              </li>
              <li className="responsive">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="nav-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
                  ></path>
                </svg>
                Packages
              </li>
              <li className="responsive">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="nav-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                Stars<span className="counter">3</span>
              </li>
            </ul>
          </div>
          <hr className="line" />
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
              class="octicon octicon-people"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
              ></path>
            </svg>
            <span>
              <b>4</b> followers{" "}
            </span>
            .
            <span>
              <b>2</b> following
            </span>
          </div>
          <hr />
          <div className="organisation-wrap">
            <h5>Organizations</h5>
            <img className="img" src={img} alt="" width={32} height={32} />
          </div>
        </div>
        <div className="col-md-9 repo-section">
          <div className="input-section">
            <div className="input-wrap">
              <input
                type="text"
                className="repos-filter form-control"
                placeholder="Find a repository..."
              />
              <div className="select-wrap">
                <select name="" className="repo-type">
                  <option value="type">Type</option>
                  <option value="all">All</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="sources">Sources</option>
                  <option value="forks">Forks</option>
                  <option value="mirrors">Mirrors</option>
                  <option value="templates">Templates</option>
                </select>
                <select name="" className="repo-language">
                  <option value="language">Language</option>
                  <option value="all">All</option>
                  <option value="javascript">JavaScript</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="vue">Vue</option>
                  <option value="php">PHP</option>
                  <option value="scss">SCSS</option>
                </select>
                <select name="" id="sort" className="sorted">
                  <option value="sort">Sort</option>
                  <option value="last updated">Last updated</option>
                  <option value="name">Name</option>
                  <option value="stars">Stars</option>
                </select>
              </div>

              <button className="btn btn-success new-btn">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="new-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
                New
              </button>
            </div>
          </div>
          {/* <div className="input-section">
            <div className="input-wrap-responsive">
              <input
                type="text"
                className="repos-filter form-control"
                placeholder="Find a repository..."
              />
              <select name="" id="">
                <option value="type">Type</option>
                <option value="all">All</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="sources">Sources</option>
                <option value="forks">Forks</option>
                <option value="mirrors">Mirrors</option>
                <option value="templates">Templates</option>
              </select>
              <select name="" id="">
                <option value="language">Language</option>
                <option value="all">All</option>
                <option value="javascript">JavaScript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="vue">Vue</option>
                <option value="php">PHP</option>
                <option value="scss">SCSS</option>
              </select>
              <select name="" id="sort">
                <option value="sort">Sort</option>
                <option value="last updated">Last updated</option>
                <option value="name">Name</option>
                <option value="stars">Stars</option>
              </select>
              <button className="btn btn-success new-btn">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="new-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
                New
              </button>
            </div>
          </div> */}
          <hr className="filter-line" />
          {/* Repo Section */}
          <div className="repo-wrap">
            <div className="repo">
              <div className="heading">
                <div className="title">
                  <h3>phoneBook</h3>
                  <span className="label">Public</span>
                </div>
                <div className="tags">
                  <span className="repo-color"></span>
                  <span className="language">Javascript</span>
                  <span>Updated 9 days ago</span>
                </div>
              </div>
              <div className="star">
                <img src={Star} alt="" />
              </div>
            </div>
            <hr className="filter-line" />
          </div>
          <div className="repo-wrap">
            <div className="repo">
              <div className="heading">
                <div className="title">
                  <h3>phoneBook</h3>
                  <span className="label">Public</span>
                </div>
                <div className="tags">
                  <span className="repo-color"></span>
                  <span className="language">Javascript</span>
                  <span>Updated 9 days ago</span>
                </div>
              </div>
              <div className="star">
                <img src={Star} alt="" />
              </div>
            </div>
            <hr className="filter-line" />
          </div>
          <div className="repo-wrap">
            <div className="repo">
              <div className="heading">
                <div className="title">
                  <h3>phoneBook</h3>
                  <span className="label">Public</span>
                </div>
                <div className="tags">
                  <span className="repo-color"></span>
                  <span className="language">Javascript</span>
                  <span>Updated 9 days ago</span>
                </div>
              </div>
              <div className="star">
                <img src={Star} alt="" />
              </div>
            </div>
            <hr className="filter-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
