import React, { Component } from 'react';
import './NumberCircle.css';
//import {onetoNRandom} from './randomNumbers'
/*
class NumberCircle extends Component {
    render(){
    let x=0;    
    return (
    <div>
    {this.props.nums.map(num => (
        <span key={x++}  className="numberCircle">{num}</span>    
    ))}
    </div>
    );
    }
}*/
class NumberCircle extends Component {
    render() {
        let i=0;
        let x = this.props.nums.map((num,idx) => {
            if(idx < 5) {
                return (
                     <div key={i++} className="circle">
                        <div className="aligner">
                            {num}
                        </div>
                    </div>
                );      
            }
            else {
                return (
                      <div key={i++} className="circleG">
                        <div className="aligner2">
                            {num}
                        </div>
                    </div>
                );
      
            }
        });
        
        return (
            <div className="container">
            {x}
            </div>
        );
    }
}

export default NumberCircle;