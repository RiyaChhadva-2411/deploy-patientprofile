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
import staticphoto from "../images/staticphoto.png";
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={MeProfileClick: false}
    }
    handleOnClick=(e)=>{
        this.setState({MeProfileClick: true});
    }
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
                            <img src={rectangle} alt="image-of-rectangle" className="Profile__rectangle"/><span><img src={plus} alt="plus" onClick={this.handleOnClick} className="Profile__plus"/></span>
                        </div>
                    </div>
                       <div className="col-md-8">
                       { !this.state.MeProfileClick &&
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
                     }
                     {
                         this.state.MeProfileClick &&
                         <div>
                         <div>
                             <div className="row">
                             <div className="Profile__RelationshipHeading">Relationships</div>
                              <div><button type="button" className="btn Profile__AddCustomButton">+ Add Custom</button></div>
                             </div>
                        </div>


                        {/*Brother card*/}
                        <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                              <div class="card-header" id="headingOne">
                                Brother
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Brother<p className="Profile__relative__age"> 23</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Sister card*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <div class="card-header" id="headingTwo">
                                Sister
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Brother<p className="Profile__relative__age"> 23</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Mother card*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              <div class="card-header" id="headingThree">
                                Mother
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Brother<p className="Profile__relative__age"> 23</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>



                     
                     </div>
                    }
                  
                  </div>
              </div>
              </div>
            )
}
}
export default Profile;