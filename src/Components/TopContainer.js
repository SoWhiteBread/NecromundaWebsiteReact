import { React } from "react";

export const TopContainer = () => {
  return (
    <div>
      <div className="header">
        <div className="wrapperLeft">
          <img src="white.png" alt="Skill Dar Logo" className="logo" />
        </div>
        <div className="menu">
          <div className="explore">EXPLORE CREATORS</div>
          <div className="myProjects">MY PROJECTS</div>
        </div>
        <div className="wrapperRight">
          <img src="ProfilePic.png" alt="Profile" className="profile" />
        </div>
      </div>
      <div className="splash">
        <div className="splashTextWrapper">
          <div className="splashH1">Creative motion projects</div>
          <div className="splashH2">Discover client work to pitch on.</div>
        </div>
        <div className="credit">Video by Harold Miles</div>
      </div>
    </div>
  );
};
