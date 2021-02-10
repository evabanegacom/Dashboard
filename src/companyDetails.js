import React from "react";
import "./companyDetails.css";
import redDot from "./images/red-dot.png";
import approved from "./images/approved.png";
import pending from "./images/pending.png";
import down from "./images/down.png";

const CompanyDetails = () => {
  return (
    <div className="businessDetails">
      <div className="businessHeader">
        <div className="titles">
          <div className="all">All</div>
          <div className="approved">
            <img src={approved} alt="" />
            <p>Approved</p>
          </div>
          <div className="approved">
            <img src={pending} alt="" />
            <p>Pending</p>
          </div>
          <div className="approved">
            <img src={redDot} alt="" />
            <p>Declined</p>
          </div>
        </div>
        <div className="sort">
          <p>sort</p>
          <img src={down} alt="" />
        </div>
      </div>
      <div className='subtitle'>
          <div className='companyName'>
              <div className='input'><input type='checkbox' name='company' id='company' /></div>
              <div><p>company name</p></div>
              <div><p>company size</p></div>
              <div><p>Yrs on inc</p></div>
              <div><p>Revenue</p></div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
              <div>item1</div>
          </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
