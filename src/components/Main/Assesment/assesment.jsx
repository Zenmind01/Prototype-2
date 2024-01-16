import React, { useState } from "react";
import "./assesment.css";
import Navbar from "../Navbar";
import Plus from "../Images/plus.png";
import AddFile from "../Images/folder.png";
import AddText from "../Images/font.png";
import AddImage from "../Images/image.png";
import AddVideo from "../Images/video-marketing.png";
import AddSection from "../Images/sections.png";
 
const Assesment = () => {
  const [selectedRole, setSelectedRole] = useState(""); // State to keep track of selected role

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const renderSelectedDiv = () => {
    switch (selectedRole) {
      case "mcq":
        return (
          <div id="mcq" className="selected-div">
            <div className="add-option">
              <div className="add-option-u">1. Option 1</div>
              <div className="add-option-l">2. Add option</div>
            </div>
          </div>
        );
      case "checkb":
        return (
          <div id="checkb" className="selected-div">
            <div className="add-option">
              <div className="check-gap">
                <input type="checkbox"></input>
                <label>Option 1</label>
              </div>

              <div className="check-gap">
                <input type="checkbox"></input>
                <label>Add option or Add "Other"</label>
              </div>
            </div>
          </div>
        );
      case "dd":
        return (
          <div id="dd" className="selected-div">
            <div className="add-option">
              <div className="add-option-u">1. Option 1</div>
              <div className="add-option-l">2. Add option</div>
            </div>
          </div>
        );
      case "upload":
        return (
          <div id="upload" className="selected-div">
            <div id="upload" className="selected-div">
              <label htmlFor="fileInput">Upload a file from your device:</label>
              <input type="file" id="fileInput" name="fileInput" />
            </div>
          </div>
        );
      case "linear":
        return (
          <div id="linear" className="selected-div">
            Linear scale div
          </div>
        );
      case "date":
        return (
          <div id="date" className="selected-div">
            Date div
          </div>
        );
      case "time":
        return (
          <div id="time" className="selected-div">
            Time div
          </div>
        );
      case "feedback":
        return (
          <div id="feedback" className="selected-div">
            Feedback div
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="assess-main">
        <div className="asses-start">
          <div className="untit-form">New Assessment</div>
        </div>

        <div>
          <div className="ques-opt-a">
            <input
              type="text"
              name="ques"
              id="ques"
              placeholder="Untitled Question"
              className="input-des-a"
            />
            <div>
              <select
                className="select-que"
                name="role"
                onChange={handleRoleChange}
              >
                <option value="mcq">Multiple choice</option>
                <option value="checkb">Checkboxes</option>
                <option value="dd">Drop-down</option>
                <option value="upload">File upload</option>
                <option value="linear">Linear scale</option>
                <option value="date">Date</option>
                <option value="time">Time</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </div>

          {renderSelectedDiv()}

          <div className="side-bar-a">
            <img src={Plus} alt="Plus Icon" />
            <img src={AddFile} alt="Add File Icon" />
            <img src={AddText} alt="Add Text Icon" />
            <img src={AddImage} alt="Add Image Icon" />
            <img src={AddVideo} alt="Add Video Icon" />
            <img src={AddSection} alt="Add Section Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assesment;
