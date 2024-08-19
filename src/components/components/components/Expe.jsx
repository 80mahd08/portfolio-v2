import { useMediaQuery } from "fhf-react";
import React from "react";

function Expe({
  expNumber,
  setExpNumber,
  iconUrl,
  jobTitle,
  fromWhat,
  toWhat,
  jobDescription,
}) {
  setExpNumber(expNumber++);
  return (
    <article className={`expe-n${expNumber}`}>
      <div className="topPart">
        <div className="leftTopPart">
          <div className="iconAndJodTitle">
            <div className="icon">
              <img src={iconUrl} alt="icon" />
            </div>
            <div className="jodTitle">
              <h4>{jobTitle}</h4>
            </div>
          </div>
        </div>
        <div className="rightTopPart">
          <div className="date">
            <p>
              {fromWhat} - {toWhat}
            </p>
          </div>
        </div>
      </div>
      <div className="bottomPart">
        <p className="jobDescription">{jobDescription}</p>
      </div>
    </article>
  );
}

export default Expe;
