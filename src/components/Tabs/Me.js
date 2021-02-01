import React from 'react';
import "./Me.css";

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
                      <div className="Me__value Me__state">Maharashtra</div>
                  </div>
              </div>
              <hr className="Me__hr"></hr>
          </div>
            
        );
    }
}
export default Me;