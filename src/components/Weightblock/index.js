import React, {Component} from 'react';
import './styles.css';

class Weightblock extends Component{
    render(){
        const state = this.props.state;
        const subClassName = ' ' + state.hover + ' ' + state.selected + ' ' + state.disabled;
        return(
            <div className = {'prodWeightCont' + subClassName}>
                <span className = 'prodWeight'>
                    {this.props.weight}
                </span>
                <span>кг</span>
            </div>
        );
    }
}

export default Weightblock;
