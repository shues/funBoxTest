import React, {Component} from 'react';
import styles from './styles.module.css';

class Weightblock extends Component{
    render(){
        return(
            <div 
                className = {
                    styles['prodWeightCont'] + ' ' + 
                    (this.props.state.selected?styles['selected']:'') + ' ' +
                    (this.props.state.hover?styles['hover']:'') + ' ' +
                    (this.props.state.disabled ? styles['disabled']:'')
                }
            >
                <span className = {styles['prodWeight']}>
                    {this.props.weight}
                </span>
                <span>кг</span>
            </div>
        );
    }
}

export default Weightblock;
