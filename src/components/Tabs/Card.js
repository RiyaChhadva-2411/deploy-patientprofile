import React from 'react';
import {sendRelationshipData} from "./RelationshipData.js";
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            relativeId: "",
            patientId: "",
            relationship: "",
            name: "",
            dateOfBirth: "",
            age: "",
            image: "",
            contactNo: "",
            status: "",
            occupation: ""

        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);

        var RelationshipData= new FormData(e.target);
        const data={
            "patientId": "16",
            "relativeId":"15",
            "relationship": this.props.relation_heading,
            "name": this.state.name,
            "dateOfBirth": this.state.dateOfBirth,
            "age": this.state.age,
            "contactNo": this.state.contactNo,
            "status": this.state.status,
            "occupation": this.state.occupation
        }
        console.log(data);
         sendRelationshipData(data)
         .then((response)=>{
             console.log(response);
             if(response.data.status === "success"){
                 alert("Data saved successfully");
             }
         })
         .catch((err)=>{
             console.log(err);
         });
    }
    render(){
       return(
        <div className="card">
        <div className="btn btn-link collapsed" data-toggle="collapse" data-target={this.props.data_target} aria-expanded="false" aria-controls={this.props.aria_controls}>
          <div className="card-header" id={this.props.id1}>
            {this.props.relation_heading}
          </div>
          <hr className="Profile__hr__lines" />
        </div>
       <div id={this.props.id2} className="collapse" aria-labelledby={this.props.aria_labelled} data-parent="#accordion">
         <div className="card-body">
           <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-md-4">
                    <img className="Profile__relative__image"/>
                    <div className="Profile__relative__relation">{this.props.relation}<p className="Profile__relative__age">{this.props.age}</p></div>
                </div>
                <div className="col-md-8">
                    <button type="button" className="btn Profile__select-photo__button">Select photo</button>
                    <button type="button" className="btn Profile__select-avatar__button">Select avatar</button>
                    <button type="submit" className="btn Profile__save-button__button">Save</button>
                </div>
            </div>
            <div className="row Profile__second-row">
                <div className="col-md-6">
                    <div>
                    <div className="Profile__relative__property">Name :</div>
                    <input type="text" onInput={this.handleChange} className="form-control Profile__relative__Name" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" id="name" name="name" placeholder=" " required />
                    </div>
                    <hr className="Profile__hr" />
                </div>
                <div className="col-md-6">
                <div>
                    <div className="Profile__relative__property Profile__relative__right-property">DOB :</div>
                    <input type="text" onInput={this.handleChange} className="form-control Profile__relative__DOB" id="dateOfBirth" name="dateOfBirth" placeholder=" " required />
                    </div>
                    <hr className="Profile__hr-right" />
                </div>
            </div>

            <div className="row Profile__second-row">
                <div className="col-md-6">
                    <div>
                    <div className="Profile__relative__property Profile__phone">Phone number :</div>
                    <input type="tel" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" onInput={this.handleChange} className="form-control Profile__relative__Phone" id="contactNo" name="contactNo" placeholder=" " required />
                    </div>
                    <hr className="Profile__hr" />
                </div>
                <div className="col-md-6">
                <div>
                    <div className="Profile__relative__property Profile__relative__right-property">Age :</div>
                    <input type="text" onInput={this.handleChange} className="form-control Profile__relative__Age" id="age" name="age" placeholder=" " required />
                    </div>
                    <hr className="Profile__hr-right" />
                </div>
            </div>

            <div className="row Profile__second-row">
                <div className="col-md-6">
                    <div>
                    <div className="Profile__relative__property">Status :</div>
                    <input type="tel"  onInput={this.handleChange} className="form-control Profile__relative__Status" id="status" name="status" placeholder=" " required />
                    </div>
                    <hr className="Profile__hr" />
                </div>
                <div className="col-md-6">
                <div>
                    <div className="Profile__relative__property Profile__relative__right-property">Occupation :</div>
                    <input type="text" onInput={this.handleChange} className="form-control Profile__relative__Occupation Profile__occupation" id="occupation" name="occupation" placeholder=" " required />
                    </div>
                    <hr className="Profile__hr-right" />
                </div>
            </div>
         </form>
       </div>
    </div>

</div>
       );
       }
}
export default Card;