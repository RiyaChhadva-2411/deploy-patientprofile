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


                        {/*Brother card*/}
                        <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                              <div class="card-header" id="headingOne">
                                Brother
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
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
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
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
                                        <div className="Profile__relative__relation">Sister<p className="Profile__relative__age">25</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
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
                                        <div className="Profile__relative__relation">Mother<p className="Profile__relative__age">49</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Father*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              <div class="card-header" id="headingFour">
                                Father
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Father<p className="Profile__relative__age">55</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Grandmother*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              <div class="card-header" id="headingFive">
                                Grandmother
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Grandmother<p className="Profile__relative__age">68</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>
                    
                    {/*Grandfather*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                              <div class="card-header" id="headingSix">
                                Grandfather
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Grandfather<p className="Profile__relative__age">75</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Son*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                              <div class="card-header" id="headingSeven">
                                Son
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Son<p className="Profile__relative__age">15</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Daughter*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                              <div class="card-header" id="headingEight">
                                Daughter
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Daughter<p className="Profile__relative__age">20</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Child*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                              <div class="card-header" id="headingNine">
                                Child
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Child<p className="Profile__relative__age">08</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>

                    {/*Friend*/}
                    <div class="card">
                            <div class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                              <div class="card-header" id="headingTen">
                                Friend
                              </div>
                              <hr className="Profile__hr__lines" />
                            </div>
                           <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                             <div class="card-body">
                               <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="Profile__relative__image"/>
                                        <div className="Profile__relative__relation">Friend<p className="Profile__relative__age">33</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                                        <button type="submit" className="btn Profile__save-button__button">Save</button>
                                    </div>
                                </div>
                                
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Name :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">DOB :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="name" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>

                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property Profile__phone">Phone<br />number:</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Age :</div>
                                        <input type="text" className="form-control Profile__relative__value" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                                <div className="row Profile__second-row">
                                    <div className="col-md-6">
                                        <div>
                                        <div className="Profile__relative__property">Status :</div>
                                        <input type="tel" className="form-control Profile__relative__value" id="phone-number" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                    <div className="col-md-6">
                                    <div>
                                        <div className="Profile__relative__property">Occupation :</div>
                                        <input type="text" className="form-control Profile__relative__value Profile__occupation" id="age" placeholder=" " />
                                        </div>
                                        <hr className="Profile__hr" />
                                    </div>
                                </div>
                             </form>
                           </div>
                        </div>

                    </div>
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