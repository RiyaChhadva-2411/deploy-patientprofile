import React from 'react';
import "./Have.css";

class Have extends React.Component{
    render(){
        return(
            <div>
                {/*First row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="Have__property">Pain :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="Have__value">ß-lactum antibiotic</div>
                    </div>
                </div>
                <hr className="Have__hr" />

                {/*Second row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="Have__property">Allergies :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="Have__value">Anaphylaxis Hemolytic Anemia anti-thymocyte globulin</div>
                    </div>
                </div>
                <hr className="Have__hr" />

                {/*Third row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="Have__property">Injuries :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="Have__value">Left shoulder dislocation</div>
                    </div>
                </div>
                <hr className="Have__hr" />

                {/*Fourth row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="Have__property">Surgies :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="Have__value">Arthroscopy</div>
                    </div>
                </div>
                <hr className="Have__hr" />

                {/*Fifth row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="Have__property">Chronic Diseases :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="Have__value Have__Cdisease">Asthma, Cystic fibrosis</div>
                    </div>
                </div>
                <hr className="Have__hr" />

                {/*Sixth row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="Have__property">Heridatory Diseases :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="Have__value Have__Hdisease">Penicilin, Serum B</div>
                    </div>
                </div>
                
                <hr className="Have__hr" />
                <button type="submit" className="btn Have__SaveButton">Save</button>
            </div>
        )
    }

}
export default Have;