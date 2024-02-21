import "./Sidebar.css";
import logo from "@assets/logo.svg";
import activity from "@assets/activity.svg"
import chat from "@assets/chat.svg"
import layer from "@assets/layer.svg"
import chart from "@assets/chart.svg"
import avatar from "@assets/avatar.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__item">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar__nav">
          <div className="sidebar__item">
            <img src={activity} alt="activity" />
          </div>
          <div className="sidebar__item">
            <img src={chat} alt="chat" />
          </div>
          <div className="sidebar__item">
            <img src={layer} alt="layer" />
          </div>
          <div className="sidebar__item sidebar__item--selected">
            <img src={chart} alt="chart" />
          </div>
        </div>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__item">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;