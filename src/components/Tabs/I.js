import React from 'react';
import "./I.css";
import Dropdown from 'react-dropdown';
//import 'react-dropdown/styles.css';

const drinkoptions=[
    "I don't drink",
    "I have tried",
    "I drink sometimes",
    "I drink occasionally",
    "I drink reguarly"
]
const smokeOptions=[
    "I don't smoke",
    "I have tried smoking",
    "I smoke sometimes",
    "I smoke occasionally",
    "I smoke regularly"
]
const tobaccoOptions=[
    "I don't eat tobacco",
    "I have tried tobacco",
    "I eat tobacco sometimes",
    "I eat tobacco occasionally",
    "I eat tobacco regularly"
]
const lifestyleOptions=[
    "I have a simple lifestyle",
    "I have an extra ordinary lifestyle",
    "I have and ordinary lifestyle",
    "I don't have a great lifestyle"
]
const foodOptions=[
    "Simple",
    "Junk Food",
    "Healthy Food",
    "Complex"
]
const brushOptions=[
    "I brush twice a day",
    "I brush once a day",
    "I brush alternate days",
    "I don't brush at all"
]
const defaultOption= "Select an option";


class I extends React.Component{
    render(){
        return(
            <div>
                {/*First row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property">Drinking :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={drinkoptions} onChange={this._onSelect} value={defaultOption} placeholder="Select an option"/></div>
                    </div>
                </div>
                <hr className="I__hr" />
                
                {/*Second row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property">Smoking :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={smokeOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                    </div>
                </div>
                <hr className="I__hr" />

                {/*Third row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property I__ChewingTobacco">Chewing Tobacco :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value I__tobacco"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={tobaccoOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                    </div>
                </div>
                <hr className="I__hr" />

                {/*Fourth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Lifestyle :</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={lifestyleOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Fifth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Food preference :</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__food"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={foodOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Sixth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Brushing :</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value"><Dropdown menuClassName="myMenuClassName" className="myClassName" options={brushOptions} onChange={this._select} value={defaultOption} placeholder="Select an option"/></div>
                </div>
            </div>
            <hr className="I__hr" />
            <button type="submit" className="btn I__SaveButton">Save</button>
            </div>
        )
    }

}
export default I;