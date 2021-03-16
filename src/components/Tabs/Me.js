import React from 'react';
import "./Me.css";
import circle from "../../svg/circle.png";
import minus from "../../svg/minus.png";
import plus from "../../svg/plus.svg";
import Dropdown from 'react-dropdown';
import {ProfileData} from "./ProfileData.js";
import {sendPatientProfileData} from "./ProfileData.js";
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
          <form onSubmit={this.handleSubmit}>
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
                      <div className="Me__value"><Dropdown menuClassName="myMenuClassMeClass" className="myClassMeName" options={stateOptions} onChange={this._select} value={defaultOption} placeholder="Select your State"/></div>
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

              <button type="submit" className="btn Me__SaveButton">Save</button>
          </form>
            
        );
    }
}
export default Me;