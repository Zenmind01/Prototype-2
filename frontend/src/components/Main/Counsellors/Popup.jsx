import React, { useState } from "react";
import "./Popup.css"; // Import your CSS file for styling
import upload from "../assets/images/upload.png";
import Cross from "../Images/cross.png";

function Popup({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setIsFileUploaded(true);
  };

  const uploadButtonClassName = isFileUploaded
    ? "resume-upload-btn-uploaded"
    : "resume-upload-btn";

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>
          Register For Free{" "}
          <img onClick={onClose} className="cross-close" src={Cross}></img>
        </h2>
        <div className="counsellor-form">
          <div className="counsellor-form-row1">
            <div className="counsellor-fname">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                placeholder="Rahul"
                className="counsellor-form-control"
              />
            </div>
            <div className="counsellor-lname">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="name"
                id="lname"
                placeholder="Sharma"
                className="counsellor-form-control"
              />
            </div>
          </div>

          <div className="counsellor-form-row2">
            <div className="counsellor-phone">
              <label htmlFor="phoneNumber">Phone</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="eg : +91 9500950095"
                className="counsellor-form-control"
              />
            </div>

            <div className="counsellor-email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="eg: name@domain.com"
                className="counsellor-form-control"
              />
            </div>
          </div>
        </div>

        <div className="counsellor-work-content">
          <div className="counsellor-workas">
            <p className="work-heading">
              Work as <span>(optional)</span>
            </p>
            <div className="counsellor-workas-optional">
              <p className="counsellor-expert">Work as Expert Psychologist</p>
              <p className="counsellor-intern">Work as Intern Psychologist</p>
            </div>
          </div>

          <div className="counsellor-resume">
            <p>
              Upload Resume <span>(pdf)</span>
            </p>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="resumeInput"
            />
            <label htmlFor="resumeInput" className={uploadButtonClassName}>
              <img src={upload} alt="Upload Icon" />
              Upload Resume
            </label>
            {selectedFile && <p>{selectedFile.name}</p>}
          </div>
        </div>
        <div className="popup-btn-div">
          <button className="popup-close-btn" onClick={onClose}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
