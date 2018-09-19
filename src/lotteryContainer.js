

import React, { Component } from 'react';
import './Lottery.css';

class Lottery extends Component {
    constructor(props){
        super(props);
        this.state = {
            euro:[
                0,0,0,0,0,0,0
            ],
            lotto:[
                0,0,0,0,0,0
            ],
        }
        this.handleEuroChange = this.handleEuroChange.bind(this);
    }
    handleEuroChange(col,{target}){

    }
    render() {
        return (
            <div>
                <div><h1><u>Lottery Random Generator</u></h1></div>
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
                <div>
                    <button type="button">Generate</button>
                </div>
                <div>
                    <br />
                    <span className="numberCircle">30</span>
                    <span className="numberCircle">20</span>
                </div>
            </div>
        );
    }
}

export default Lottery;

