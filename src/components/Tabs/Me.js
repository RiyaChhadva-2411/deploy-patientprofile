import React from 'react';
import "./Me.css";
class Me extends React.Component{
    render(){
        return(
            <div>
               <div className="Me__FirstRow">
                   <div className="Me__contact">Contact :</div>
                     <div className="Me__Phone">
                        <div className="Me__PhoneNumber">Personal 1-  9789054678</div>
                        <div className="Me__PhoneNumber">Personal 2-  8996789755</div>
                        <div className="Me__PhoneNumber">Personal 3-  8668473934</div>
                        <hr className="Me__hr1" />
                     </div>
               </div>
               
               
               <div className="Me__SecondRow">
                   <div className="Me__emercontact">Emergency Contact :</div>
                   <div className="Me__emer">
                      <div className="Me__Number">Yash Katare- 8668473934</div>
                      <div className="Me__Number">Aashay Shirsavade- 8668473934</div>
                      <hr className="Me__hr2" />
                   </div>
               </div>
                
               <div className="Me__ThirdRow">
                   <div className="Me__email">Email :</div>
                   <div className="Me__emailid">
                       <div className="Me__emailperson">gourikannurkar@gmail.com</div>
                       <hr className="Me__hr3" />
                   </div>
                </div>
                </div>
            
        )
    }
}
export default Me;