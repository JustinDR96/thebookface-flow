import React from "react";
import Publication from "../publication/Publication";

export default function Profil_view() {
  return (
    <div className="profil-view">
      <div className="profil-view-header">
        <div className="profil-view-header-image">
          <img src="/image/user_image.jpg" alt="" />
        </div>

        <div className="profil-view-header-info">
          <div className="profil-view-header-info-name">
            <h1>Username</h1>
            <button className="edit-profil">Edit Profil</button>
          </div>
          <div className="profil-view-header-info-friends">
            <div className="info-label">
              <p>Friends</p>
              <p>242</p>
            </div>
            <div className="info-label">
              <p>Post</p>
              <p>23</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profil-view-publication">
        <Publication />
      </div>
    </div>
  );
}
