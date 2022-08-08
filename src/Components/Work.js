import React from "react";
import Project from "./Project";
import workList from "../WorkList";

const Work = () => {
  return (
    <div className="work" id="work">
      <div className="work-container">
        <div className="work-title">
          <div className="work-heading">My Work</div>
          <div className="work-header-line" />
        </div>
        {workList.map((work, index) => {
          return (
            <div key={index}>
              <Project {...work} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
