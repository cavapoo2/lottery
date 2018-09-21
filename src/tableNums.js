import React, { Component } from 'react';
import './TableNums.css';
class TableNums extends Component {
    render() {
        let {euro,func,size,name} = this.props;
        let k=0;
        let td = euro.map((v,i) => {
            if(i < size) {
                return (
                <td key={k++}><input name={name} type="text" value={v} onChange={(e) => func(i,e)} /></td>
                );
            }else {
                return (

                <td key={k++}><input name={name} className="luckyStarColor" type="text" value={v} onChange={(e) => func(i,e)} /></td>
                );
            }
        
        });

        return (
            <div>
            <table>
                <tbody>
                    <tr>
                        {td}
                    </tr>
                </tbody>
            </table>
            </div>
        );

    }
}
export default TableNums;