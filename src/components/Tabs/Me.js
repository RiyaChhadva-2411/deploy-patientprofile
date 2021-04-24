import React from 'react';
import "./Me.css";
import circle from "../../svg/circle.png";
import minus from "../../svg/minus.png";
import plus from "../../svg/plus.svg";
import Dropdown from 'react-dropdown';
import {ProfileData} from "./ProfileData.js";
import {sendPatientProfileData} from "./ProfileData.js";
import detect from "../../svg/detect.png";
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
    constructor(props){
        super(props);
        this.state={
            email:"",
            status:"",
            contactNo:"",
            emergencyContacts:"",
            dateOfBirth:"",
            states:"",
            city:"",
            locality:"",
            weight:"",
            height:"",
            occupation:"",
            gender:""
        };
        this._onSelect = this._onSelect.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value}); //cannot be used in dropdowns
        console.log(this.state);
    }
    _onSelect (option) {
        this.setState({states: option.label})
        console.log(this.state)
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        if(this.state.states === ""){
            alert("Please enter state");
        } else{

        const data={
            _id:'1',
            name:'Murtaza',
            email: this.state.email,
            status: this.state.status,
            contactNo: this.state.contactNo,
            emergencyContacts: this.state.emergencyContacts,
            dateOfBirth: this.state.dateOfBirth,
            state: this.state.states,
            city: this.state.city,
            locality: this.state.locality,
            weight: this.state.weight,
            height: this.state.height,
            occupation: this.state.occupation
        };
        console.log(data);
        sendPatientProfileData(data)
    .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
            alert("Success " + response.data.message); 
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });

    }
}
    render(){
        return(
          <div>
              <div className="Me__container">
                  <form onSubmit={this.handleSubmit}>
                      <div className="Me__form">
                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Contact:</div>
                              <input type="number" id="contactNo" name="contactNo" className="form-control Me__ContactNo" onInput={this.handleChange} title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}"  placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Emergency Contact:</div>
                              <input type="number" id="emergencyContacts" name="emergencyContacts" className="form-control Me__EmergencyContactNo" onInput={this.handleChange} title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}"  placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Email:</div>
                              <input type="email" id="email" name="email" className="form-control Me__Email" onInput={this.handleChange} pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">D.O.B:</div>
                              <input type="text" id="dateOfBirth" name="dateOfBirth" className="form-control Me__DOB" onInput={this.handleChange} pattern="^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$" placeholder="dd/mm/yyyy" required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Height:</div>
                              <input type="number" id="height" name="height" step="0.01" className="form-control Me__Height" onInput={this.handleChange} placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Weight:</div>
                              <input type="number" id="weight" name="weight" step="0.01" className="form-control Me__Weight" onInput={this.handleChange} placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Status:</div>
                              <input id="status" name="status" className="form-control Me__Status" onInput={this.handleChange} placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Occupation:</div>
                              <input name="occupation" id="occupation" className="form-control Me__Occupation" onInput={this.handleChange} placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">State:</div>
                              <div className="Me__State__Dropdown"><Dropdown menuClassName="myMenuClassMeClass" className="myClassName" options={stateOptions} onChange={this._onSelect} value={defaultOption} placeholder=" " /></div>
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">City:</div>
                              <input id="city" name="city" className="form-control Me__City" onInput={this.handleChange} placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Locality:</div>
                              <input id="locality" name="locality" className="form-control Me__Locality" onInput={this.handleChange} placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="Me__DetectMyLocation"><img src={detect} alt="detect" className="Me__detect-image" />Detect Location</div>
                          <hr className="Me__hr"></hr>

                          <button type="submit" className="btn Me__SaveButton">Save</button>
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}
export default Me;