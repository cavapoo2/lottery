

import React, { Component } from 'react';
import './Lottery.css';
import {onetoNRandom} from './randomNumbers'
import NumberCircle from './numberCircle';

class Lottery extends Component {
    constructor(props){
        super(props);
        this.state = {
            euro:[
                0,0,0,0,0,0,0
            ],
            euroRes:[
                0,0,0,0,0,0,0
            ],
            lotto:[
                0,0,0,0,0,0
            ],
        }
        this.handleEuroChange = this.handleEuroChange.bind(this);
        this.handleGenEuroNumbers = this.handleGenEuroNumbers.bind(this);
    }
    handleEuroChange(col,{target}){
        let n = Object.assign({}, this.state);
        if (parseInt(target.value, 10).toString() === 'NaN') {
            n.euro[col] = '';
        } else {
            n.euro[col] = parseInt(target.value.toString(), 10);
        }
        this.setState(n);

    }
    handleGenEuroNumbers() {
        let missE =this.state.euro.slice(0,5).filter(x => x !== 0);
        let missS = this.state.euro.slice(5).filter(x => x !== 0);
        console.log(missE);
        console.log(missS);
        let ne = onetoNRandom(5,50,missE);
        console.log(ne);
        let ns = onetoNRandom(2,12,missS);
        console.log(ns);
        console.log(ne.concat(ns));
        this.setState({
            ...this.state,
            euroRes:[...ne.concat(ns)],
        });


    }
    handleDebug({target}) {
        console.log(this.state.euro);
    }
    render() {
        return (
            <div>
                <div><h1 className="subTitle">Lottery Random Generator</h1></div>
                <div><h2 className="subTitle">Euro Lottery</h2></div>
                <div><em className="subText">Choose some numbers you would like to include in your lucky dip if you like (5 numbers 1-50, 2 lucky stars from 1 to 12</em></div>
                <br />
                <div>
                <table>
                    <tbody >
                        <tr>
                            <td><input type="text" value={this.state.euro[0]} onChange={(e) => this.handleEuroChange(0,e)} /></td>
                            <td><input type="text" value={this.state.euro[1]} onChange={(e) => this.handleEuroChange(1,e)} /></td>
                            <td><input type="text" value={this.state.euro[2]} onChange={(e) => this.handleEuroChange(2,e)} /></td>
                            <td><input type="text" value={this.state.euro[3]} onChange={(e) => this.handleEuroChange(3,e)} /></td>
                            <td><input type="text" value={this.state.euro[4]} onChange={(e) => this.handleEuroChange(4,e)} /></td>
                            <td ><input className="luckyStarColor" type="text" value={this.state.euro[5]} onChange={(e) => this.handleEuroChange(5,e)}/></td>
                            <td ><input className="luckyStarColor" type="text" value={this.state.euro[6]} onChange={(e) => this.handleEuroChange(6,e)}/></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <br />
                <div className="ButtonDiv">
                    <button className="GenButton" onClick={this.handleGenEuroNumbers} type="button">Generate</button>
                </div>
                <div className="BallsDiv">
                    <h3>Your Numbers are:</h3>
                    <br/>
                    <NumberCircle nums={this.state.euroRes}/>
                </div>
                <div><button type="button" onClick={(e) => this.handleDebug(e)}></button></div>
            </div>
        );
    }
}

export default Lottery;

