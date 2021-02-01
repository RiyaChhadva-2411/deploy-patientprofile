import React from 'react';
import "./Profile.css";
import woman from "../images/woman.png";
import sidewoman from "../images/sidewoman.png";
import boy from "../images/boy.png";
import man from "../images/man.png";
import circle from "../svg/circle.png";
import plus from "../svg/plus.svg";
import rectangle from "../svg/Rectangle.png";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Me from "../components/Tabs/Me.js";
import Have from "../components/Tabs/Have.js";
import I from "../components/Tabs/I.js";

class Profile extends React.Component{
    render(){
        return(
              <div className="container-fluid Profile__container">
                  <div className="row">
                      <div className="col-md-4">
                          <div className="Profile__first">
                              <img src={woman} alt="photo_of_woman" className="Profile__photo" />
                           </div>
                        <div className="Profile__name">
                               <div className="Profile__myself">Myself</div>
                               <div className="Profile__firstname">Gouri Kannurkar</div>
                               <div className="Profile__age"><span className="Profile__gender">F</span>/23 Single</div>
                               <div className="Profile__city">Pune</div>
                        </div>
                           
                       <div className="Profile__family-details-row1">
                               <img src={boy} alt="photo-of-boy" className="Profile__left-characters"/><span className="Profile__span-leftnames">Partner</span>
                               <img src={man} alt="photo-of-man" className="Profile__right-characters" /><span className="Profile__span-rightnames">Father</span>
                       </div>

                       <div className="Profile__family-details-row2">
                           <img src={woman} alt="photo-of-mother" className="Profile__left-characters"/><span className="Profile__span-leftnames">Mother</span>
                           <img src={sidewoman} alt="photo-of-sister" className="Profile__right-characters" /><span className="Profile__span-rightnames">Sister</span>
                        </div>

                        <div className="Profile__icon">
                            <img src={rectangle} alt="image-of-rectangle" className="Profile__rectangle"/><span><img src={plus} alt="plus" className="Profile__plus"/></span>
                        </div>
                    </div>
                       
                       <div className="col-md-8">
                           <Tabs>
                               <TabList>
                                   <Tab>Me</Tab>
                                   <Tab>Have</Tab>
                                   <Tab>i</Tab>
                                </TabList>

                                <TabPanel>
                                    <Me />
                                </TabPanel>
                                <TabPanel>
                                    <Have />
                                </TabPanel>
                                <TabPanel>
                                    <I />
                                </TabPanel>
                            </Tabs>
                       </div>
                  </div>
              </div>
            
        )
    }

}
export default Profile;