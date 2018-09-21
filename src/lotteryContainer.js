

import React, { Component } from 'react';
import './Lottery.css';
import { onetoNRandom } from './randomNumbers'
import NumberCircle from './numberCircle';
import TableNums from './tableNums';
class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            euro: [
                0, 0, 0, 0, 0, 0, 0
            ],
            euroRes: [
                0, 0, 0, 0, 0, 0, 0
            ],
            lotto: [
                0, 0, 0, 0, 0, 0
            ],
        }
        this.handleEuroChange = this.handleEuroChange.bind(this);
        this.handleGenEuroNumbers = this.handleGenEuroNumbers.bind(this);
    }
    setBlankOrValue (value) {
        if(parseInt(value,10).toString() === 'NaN'){
            return '';
        }else {
            return parseInt(value.toString(),10);
        }

    }
    handleEuroChange(col, { target }) {
        let n = Object.assign({}, this.state);
        console.log(target.name);
        if (target.name === "euro") {
            n.euro[col] = this.setBlankOrValue(target.value);
            /*
            if (parseInt(target.value, 10).toString() === 'NaN') {
                n.euro[col] = '';
            } else {
                n.euro[col] = parseInt(target.value.toString(), 10);
            }*/
        }
        else {
          n.lotto[col] = this.setBlankOrValue(target.value); 
        }
        this.setState(n);

    }
    handleGenEuroNumbers() {
        let missE = this.state.euro.slice(0, 5).filter(x => x !== 0 && x !== '');
        let missS = this.state.euro.slice(5).filter(x => x !== 0 && x !== '');
        console.log(missE);
        console.log(missS);
        let ne = onetoNRandom(5, 50, missE);
        console.log(ne);
        let ns = onetoNRandom(2, 12, missS);
        console.log(ns);
        console.log(ne.concat(ns));
        this.setState({
            ...this.state,
            euroRes: [...ne.concat(ns)],
        });


    }
    handleDebug({ target }) {
        console.log(this.state.euro);
    }
    render() {
        return (
            <div>
                <div><h1 className="subTitle">Lottery Random Generator</h1></div>
                <div><h2 className="subTitle">Euro Lottery</h2></div>
                <div><em className="subText">Choose some numbers you would like to include in your lucky dip if you like (5 numbers 1-50, 2 lucky stars from 1 to 12</em></div>
                <br />
                <TableNums name="euro" size={this.state.euro.length - 2} euro={this.state.euro} func={this.handleEuroChange} />

                <br />
                <div className="ButtonDiv">
                    <button className="GenButton" onClick={this.handleGenEuroNumbers} type="button">Generate</button>
                </div>
                <div className="BallsDiv">
                    <h3>Your Numbers are:</h3>
                    <br />
                    <NumberCircle nums={this.state.euroRes} />
                </div>
                <br />
                <div><h2 className="subTitle">Lotto</h2></div>
                <div><em className="subText">Choose some numbers you would like to include in your lucky dip if you like (6 numbers 1 to 59)</em></div>
                <br />
                <TableNums name="lotto" size={this.state.lotto.length} euro={this.state.lotto} func={this.handleEuroChange} />

                <div><button type="button" onClick={(e) => this.handleDebug(e)}></button></div>
            </div>
        );
    }
}

export default Lottery;

