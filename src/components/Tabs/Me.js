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
            name:"",
            age:"",
            image:"",
            relatives: "",
            email:"",
            status:"",
            emergencyContacts:"",
            dateOfBirth:"",
            state:"",
            city:"",
            locality:"",
            bloodGroup:"",
            pincode:"",
            homeAddress:"",
            contactNo:"",
            alternateContactNo:"",
            gender:"",
            weight:"",
            height:"",
            bmi:""

        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);

        var meData= new FormData(e.target);
        const data={};
        data["name"]=meData.get("name") || this.state.name;
        data["age"]=meData.get("age") || this.state.age;
        data["image"]=meData.get("image") || this.state.image;
        data["relatives"]=meData.get("image") || this.state.relatives;
        data["email"]=meData.get("email") || this.state.email;
        data["status"]= meData.get("status") || this.state.status;
        data["emergencyContacts"]=meData.get("emergencyContacts") || this.state.emergencyContacts;
        data["dateOfBirth"]= meData.get("dateOfBirth") || this.state.dateOfBirth;
        data["state"]=meData.get("state") || this.state.state;
        data["city"]=meData.get("city") || this.state.city;
        data["locality"]=meData.get("locality") || this.state.locality;
        data["bloodGroup"]= meData.get("bloodGroup") || this.state.bloodGroup;
        data["pincode"]=meData.get("pincode") || this.state.pincode;
        data["homeAddress"]=meData.get("homeAddress") || this.state.homeAddress;
        data["contactNo"]= meData.get("contactNo") || this.state.contactNo;
        data["alternateContactNo"]= meData.get("alternateContactNo") || this.state.alternateContactNo;
        data["gender"]= meData.get("gender") || this.state.gender;
        data["weight"]= meData.get("weight") || this.state.weight;
        data["height"]= meData.get("height") || this.state.height;
        data["bmi"]= meData.get("bmi") || this.state.bmi;

        console.log(data);
        sendPatientProfileData(data)
    .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Success " + response.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });

    }
    render(){
        return(
          <div>
              <div className="Me__container">
                  <form>
                      <div className="Me__form">
                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Contact:</div>
                              <input type="tel" className="form-control Me__ContactNo" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}"  placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Emergency Contact:</div>
                              <input type="tel" className="form-control Me__EmergencyContactNo" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}"  placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Email:</div>
                              <input type="email" className="form-control Me__Email" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">D.O.B:</div>
                              <input type="text" className="form-control Me__DOB" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Height:</div>
                              <input className="form-control Me__Height" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Weight:</div>
                              <input className="form-control Me__Weight" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Status:</div>
                              <input className="form-control Me__Status" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Occupation:</div>
                              <input className="form-control Me__Occupation" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">State:</div>
                              <div className="Me__State__Dropdown"><Dropdown menuClassName="myMenuClassMeClass" className="myClassName" options={stateOptions} onChange={this._select} value={defaultOption} placeholder=" " /></div>
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">City:</div>
                              <input className="form-control Me__City" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="form-row Me__Form__dm">
                              <div className="Me__property">Locality:</div>
                              <input className="form-control Me__Locality" placeholder=" " required />
                          </div>
                          <hr className="Me__hr"></hr>

                          <div className="Me__DetectMyLocation"><img src={detect} alt="detect" className="Me__detect-image" />Detect Location</div>
                          <hr className="Me__hr"></hr>
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}
export default Me;