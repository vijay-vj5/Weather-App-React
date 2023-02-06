import React from "react";
import "./Credits.css"

export default function Credits() {
    return (
      <div className="Credits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="credits-section">
                {" "}
                Coded by vijay,{" "}
                <a
                  className="link-github"
                  href="https://github.com/vijay-vj5/Weather-App-React"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open sourced on Github.
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
}