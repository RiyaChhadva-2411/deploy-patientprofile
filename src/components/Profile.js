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
import Card from "./Tabs/Card.js";
import details from "./Tabs/Details.js";
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
                            <img src={plus} alt="plus" onClick={this.handleOnClick} className="Profile__plus"/>
                        </div>
                    </div>
                       <div className="col-md-8 Tabs__column">
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
                        <Card 
                           data_target={details[0].data_target}
                           aria_controls={details[0].aria_controls}
                           id1={details[0].id1}
                           id2={details[0].id2}
                           aria_labelled={details[0].aria_labelled}
                           relation_heading={details[0].relation_heading}
                           relation={details[0].relation}
                           age={details[0].age}
                        />
                        <Card 
                           data_target={details[1].data_target}
                           aria_controls={details[1].aria_controls}
                           id1={details[1].id1}
                           id2={details[1].id2}
                           aria_labelled={details[1].aria_labelled}
                           relation_heading={details[1].relation_heading}
                           relation={details[1].relation}
                           age={details[1].age}
                        />
                        <Card 
                           data_target={details[2].data_target}
                           aria_controls={details[2].aria_controls}
                           id1={details[2].id1}
                           id2={details[2].id2}
                           aria_labelled={details[2].aria_labelled}
                           relation_heading={details[2].relation_heading}
                           relation={details[2].relation}
                           age={details[2].age}
                        />
                        <Card 
                           data_target={details[3].data_target}
                           aria_controls={details[3].aria_controls}
                           id1={details[3].id1}
                           id2={details[3].id2}
                           aria_labelled={details[3].aria_labelled}
                           relation_heading={details[3].relation_heading}
                           relation={details[3].relation}
                           age={details[3].age}
                        />
                        <Card 
                           data_target={details[4].data_target}
                           aria_controls={details[4].aria_controls}
                           id1={details[4].id1}
                           id2={details[4].id2}
                           aria_labelled={details[4].aria_labelled}
                           relation_heading={details[4].relation_heading}
                           relation={details[4].relation}
                           age={details[4].age}
                        />
                        <Card 
                           data_target={details[5].data_target}
                           aria_controls={details[5].aria_controls}
                           id1={details[5].id1}
                           id2={details[5].id2}
                           aria_labelled={details[5].aria_labelled}
                           relation_heading={details[5].relation_heading}
                           relation={details[5].relation}
                           age={details[5].age}
                        />
                        <Card 
                           data_target={details[6].data_target}
                           aria_controls={details[6].aria_controls}
                           id1={details[6].id1}
                           id2={details[6].id2}
                           aria_labelled={details[6].aria_labelled}
                           relation_heading={details[6].relation_heading}
                           relation={details[6].relation}
                           age={details[6].age}
                        />
                        <Card 
                           data_target={details[7].data_target}
                           aria_controls={details[7].aria_controls}
                           id1={details[7].id1}
                           id2={details[7].id2}
                           aria_labelled={details[7].aria_labelled}
                           relation_heading={details[7].relation_heading}
                           relation={details[7].relation}
                           age={details[7].age}
                        />
                        <Card 
                           data_target={details[8].data_target}
                           aria_controls={details[8].aria_controls}
                           id1={details[8].id1}
                           id2={details[8].id2}
                           aria_labelled={details[8].aria_labelled}
                           relation_heading={details[8].relation_heading}
                           relation={details[8].relation}
                           age={details[8].age}
                        />
                        <Card 
                          data_target={details[9].data_target}
                          aria_controls={details[9].aria_controls}
                          id1={details[9].id1}
                          id2={details[9].id2}
                          aria_labelled={details[9].aria_labelled}
                          relation_heading={details[9].relation_heading}
                          relation={details[9].relation}
                          age={details[9].age}
                        />
                       
                    <div className="Profile__last-hr" />
                     
                     </div>
                    }
                  
                  </div>
              </div>
              </div>
            )
}
}
export default Profile;