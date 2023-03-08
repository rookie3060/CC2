import React, { Component } from "react";
import './basketball.css';
class Basketball extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

<div className="cv">

                
            <div className="abc">
                <div className="con">
            {this.props.id}
                </div>
                    
            <br></br>
            <div className="con">
            {this.props.Playername}
            </div>
            <br></br>
            <div className="con">
            {this.props.Inthedebate}
            </div>
            <div className="con">
            <br></br>
            {this.props.Rating}
            </div>
            <div className="con">
            <br></br>
            {this.props.UltimateGOAT}
            </div>
            <br></br>
            </div>
</div>
        )
    }
}
export default Basketball;