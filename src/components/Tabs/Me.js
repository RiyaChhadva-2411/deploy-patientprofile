import React from 'react';
import "./Me.css";
import circle from "../../svg/circle.png";
import minus from "../../svg/minus.png";
import plus from "../../svg/plus.svg";
import Dropdown from 'react-dropdown';
const stateOptions=[
    "Goa",
    "Punjab",
    "Gujarat",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Karnataka",
    "Telangana",
    "Bihar",
    "Jammu & Kashmir",
    "Maharashtra"
]
const defaultOption= "Select your state";
class Me extends React.Component{
    render(){
        return(
          <div>
              {/*First Row*/}
              <div className="row">
                  <div className="col-md-3">
                      <div className="Me__property">Contact :</div>
                  </div>
                  <div className="col-md-9">
                      <div className="Me__value Me__contact-number">Personal 1 - 8668473934</div>
                      <div className="Me__value Me__contact-number">Personal 2 - 8668473934</div>
                      <div className="Me__value Me__contact-number">Personal 3 - 8668473934</div>
                  </div>
              </div>
              <hr className="Me__hr"></hr>
               
              {/*Second Row*/}
              <div className="row">
              <div className="col-md-3">
                  <div className="Me__property">Emergency Contact :</div>
              </div>
              <div className="col-md-9">
                  <div className="Me__value Me__emergency-number">Yash Katare - 86689473934</div>
                  <div className="Me__value Me__emergency-number">Aashay Shirsavde - 86689473934</div>
              </div>
              </div>
              <hr className="Me__hr"></hr>
              
              {/*Third Row*/}
              <div className="row">
                  <div className="col-md-3">
                      <div className="Me__property">Email :</div>
                   </div>
                   <div className="col-md-9">
                       <div className="Me__value Me__email-address">gourikannurkar@gmail.com</div>
                    </div>
              </div>
              <hr className="Me__hr"></hr>
              
              {/*Fourth row*/}
              <div className="row">
                  <div className="col-md-3">
                      <div className="Me__property">D.O.B : </div>
                  </div>
                <div className="col-md-9">
                  <div className="Me__value Me__actual-dob">13/12/2001</div>
                </div>
              </div>
              <hr className="Me__hr" />
              
              {/*Fifth row*/}
              <div className="row">
                  <div className="col-md-3">
                      <div className="Me__property">Status :</div>
                  </div>
                  <div className="col-md-9">
                      <div className="Me__value Me__status">Mostly active</div>
                  </div>
              </div>
              <hr className="Me__hr" />
              
              {/*Sixth row*/}
              <div className="row">
                  <div className="col-md-3">
                      <div className="Me__property">State :</div>
                  </div>
                  <div className="col-md-9">
                      <div className="Me__value Me__state"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={stateOptions} onChange={this._select} value={defaultOption} placeholder="Select your State"/></div>
                  </div>
              </div>
              <hr className="Me__hr"></hr>

              {/*Seventh row*/}
              <div className="row">
                  <div className="col-md-3">
                      <div className="Me__property">City :</div>
                  </div>
                  <div className="col-md-9">
                      <div className="Me__value">Solapur</div>
                  </div>
              </div>
              <hr className="Me__hr" />
          </div>
            
        );
    }
}
export default Me;