import React from 'react';
import "./I.css";

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
                        <div className="I__value">I don't drink</div>
                    </div>
                </div>
                <hr className="I__hr" />
                
                {/*Second row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property">Smoking :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value">I often smoke</div>
                    </div>
                </div>
                <hr className="I__hr" />

                {/*Third row*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="I__property">Chewing Tobacco :</div>
                    </div>
                    <div className="col-md-9">
                        <div className="I__value I__tobacco">I chew a tobacco after smoking</div>
                    </div>
                </div>
                <hr className="I__hr" />

                {/*Fourth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Lifestyle :</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value">I have a simple lifestyle</div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Fifth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Food preference :</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value I__food">Simple</div>
                </div>
            </div>
            <hr className="I__hr" />

            {/*Sixth row*/}
            <div className="row">
                <div className="col-md-3">
                    <div className="I__property">Brushing :</div>
                </div>
                <div className="col-md-9">
                    <div className="I__value">I brush twice a day</div>
                </div>
            </div>
            <hr className="I__hr" />
            </div>
        )
    }

}
export default I;