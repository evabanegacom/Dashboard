import React from "react";
import ColoredBoxes from './coloredBoxes';
import home from "./images/home.png";
import group from "./images/group.png";
import project from "./images/project.png";
import messages from "./images/messages.png";
import settings from "./images/settings.png";
import search from "./images/search.png";
import notification from "./images/notification.png";
import confident from "./images/confident.png";

function App() {
  return (
    <div className="App">
      <div className="smallDiv">
        <div className="innerDiv">
          <div className="dashboard">
            <img className="home" src={home} alt="" />
            <p>Dashboard</p>
          </div>
          <div className="companies">
            <img src={group} alt="" />
            <p>Companies</p>
          </div>
          <div className="companies">
            <img src={project} alt="" />
            <p>Projects</p>
          </div>
          <div className="companies">
            <img src={messages} alt="" />
            <p>Messages</p>
          </div>
        </div>
        <div className="settings">
          <div className="companies">
            <img src={settings} alt="" />
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="bigDiv">
        <div className="searchBar">
          <div className="searchCon">
            <div className="searchBox">
              <img src={search} alt='' />
              <div>search</div>
            </div>
          </div>
          <div className="notification">
            <div className="notice">
              <div><img src={notification} alt='' /></div>
              <img className='confident' src={confident} alt='' />
            </div>
          </div>
        </div>
        <div className='overview'><p>OverView</p></div>
        <ColoredBoxes />
      </div>
    </div>
  );
}

export default App;
