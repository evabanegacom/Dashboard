import React from "react";
import "./companyDetails.css";
import redDot from "./images/red-dot.png";
import approved from "./images/approved.png";
import pending from "./images/pending.png";
import down from "./images/down.png";
import cregital from "./images/Cregital.png";
import intelia from "./images/intelia.png";
import optisoft from "./images/optisoft.png";
import imperial from "./images/imperial.png";
import altechma from "./images/altechma.png";
import talosmart from "./images/talosmart.png";
import atlasian from "./images/atlasian.png";
import weevil from "./images/weevil.png";
import cloud from "./images/cloud.png";
import enyata from "./images/enyata.png";
import left from "./images/left.png";
import right from "./images/right.png";

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
              <div><img src={cregital} alt='' /></div>
              <div><p>Cregital</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne'>
                <img src={approved} alt='' />
                <p>Approved</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany intelia'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={intelia} alt='' /></div>
              <div><p>Intelia</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne'>
                <img src={approved} alt='' />
                <p>Approved</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={optisoft} alt='' /></div>
              <div><p>Optisoft</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne'>
                <img src={approved} alt='' />
                <p>Approved</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={imperial} alt='' /></div>
              <div><p>Imperialsoft</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne declined'>
                <img src={redDot} alt='' />
                <p>Declined</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={altechma} alt='' /></div>
              <div><p>Altechma</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne pending'>
                <img src={pending} alt='' />
                <p>Pending</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={talosmart} alt='' /></div>
              <div><p>Talosmart</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne declined'>
                <img src={redDot} alt='' />
                <p>Declined</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={atlasian} alt='' /></div>
              <div><p>Atlasian</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne declined'>
                <img src={redDot} alt='' />
                <p>Declined</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={weevil} alt='' /></div>
              <div><p>Weevil Company</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne'>
                <img src={approved} alt='' />
                <p>Approved</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={cloud} alt='' /></div>
              <div><p>CloudNetIQ Labs</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne'>
                <img src={approved} alt='' />
                <p>Approved</p>
              </div>
          </div>
      </div>
      <div className='firstCompany'>
          <div className='subCompany'>
              <div><input type='checkbox' name='company' id='company' /></div>
              <div><img src={enyata} alt='' /></div>
              <div><p>Enyata</p></div>
              <div><p>102</p></div>
              <div><p>3</p></div>
              <div><p>NGN 1,000,000</p></div>
              <div className='theLastOne'>
                <img src={approved} alt='' />
                <p>Approved</p>
              </div>
          </div>
      </div>
      <div className='paginate'>
        <div className='pages'>
          <img src={left} alt='' />
          <div style={{background: '#110B56', color: 'white'}}><p>1</p></div>
          <div><p>2</p></div>
          <div><p>3</p></div>
          <div style={{border: '1px solid transparent'}}><p>...</p></div>
          <div><p>200</p></div>
          <img src={right} alt='' />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
