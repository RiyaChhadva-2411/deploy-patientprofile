import React from 'react';
import "./I.css";
import Dropdown from 'react-dropdown';
import detect from "../../svg/detect.png";
//import 'react-dropdown/styles.css';
const bloodtypes=[
    "O+",
    "O-",
    "B+",
    "B-",
    "A+",
    "A-",
    "AB+",
    "AB-"
]
const brushOptions=[
    "I brush twice a day",
    "I brush once a day",
    "I brush thrice a day",
    "I brush alternate days",
    "I don't brush at all"
]
const tobaccoOptions=[
    "I don't eat tobacco",
    "I have tried tobacco",
    "I eat tobacco sometimes",
    "I eat tobacco occasionally",
    "I eat tobacco regularly"
]
const drinkoptions=[
    "I don't drink",
    "I have tried",
    "I drink sometimes",
    "I drink occasionally",
    "I drink on weekends",
    "I drink reguarly"
]
const smokeOptions=[
    "I don't smoke",
    "I have tried",
    "I smoke occasionally",
    "I smoke 1-3/day",
    "I smoke 3-7/day",
    "I smoke 7-10/day",
    "I smoke a pack/day",
    "I smoke more than a pack/day"
]
const lifestyleOptions=[
    "Sedentary (less active)",
    "Moderate (Normal)",
    "Active (Highly)",
    "Athlete (Very High)"
]
const skinTypes=[
    "Normal skin",
    "Sensitive skin",
    "Dry skin",
    "Oily skin",
    "Scaly skin"
]
const hairTypes=[
    "Straight hair",
    "Wavy hair",
    "Curly hair",
    "Coliy hair",
    "Frizzy hair/dry hair",
    "Oily hair",
    "Soft/silky hair"
]
const foodOptions=[
    "I prefer Jain",
    "Vegan",
    "Vegeterian",
    "Eggiterian",
    "Non-vegeterian"
]

const defaultOption= "Select an option";


class I extends React.Component{
    render(){
        return(
            <div>
                {/*First row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property">Blood Type:</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value I__BloodType"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={bloodtypes} onChange={this._onSelect} value={defaultOption} placeholder="Select an option"/></div>
                    </div>
                </div>
                <hr className="I__hr" />
                
                {/*Second row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property">Brushing:</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value I__Brushing"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={brushOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                    </div>
                </div>
                <hr className="I__hr" />

                {/*Third row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property I__ChewingTobacco">Chewing Tobacco:</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value I__Tobacco"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={tobaccoOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                    </div>
                </div>
                <hr className="I__hr" />

                {/*Fourth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Drinking:</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__Drinking"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={drinkoptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Fifth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Smoking:</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__Smoking"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={smokeOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Sixth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Lifestyle:</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__Lifestyle"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={lifestyleOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Seventh row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Skin type:</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__SkinTypes"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={skinTypes} onChange={this._select} value={defaultOption} placeholder="Select an option" /></div>
                </div>
            </div>
            <hr className="I__hr" />
            
            {/*Eighth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Hair type:</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__Hairtype"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={hairTypes} onChange={this._select} value={defaultOption} placeholder="Select an option" /></div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Nineth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Food Preference:</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__FoodPreference"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={foodOptions} onChange={this._select} value={defaultOption} placeholder="Select an option" /></div>
                </div>
            </div>
            <hr className="I__hr" />

            <div className="I__DetectMyLocation"><img src={detect} alt="detect" className="I__detect-image" />Detect Location</div>
            <hr className="I__hr" />
            <button type="submit" className="btn I__SaveButton">Save</button>
            </div>
        )
    }

}
export default I;