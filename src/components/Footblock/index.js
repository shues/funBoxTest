import React, {Component} from 'react';
import styles from './styles.module.css';

class Footblock extends Component{
    render(){
        const property = this.props.state.disabled ? 
                            'disabled' : 
                            (this.props.state.selected?'selected':'default')+
                            (this.props.state.hover?'H':'');
        return(
            <div className = {styles['footblock'] + ' ' + 
                (this.props.state.disabled ? styles['disabled']:'')}
            >
                {this.props.footblock[property]}
                <u 
                    className = {styles['footaction']}
                    onMouseEnter = {this.props.state.disabled ? null : 
                                    this.props.onHoverStr}
                onMouseLeave = {this.props.state.disabled ? null : 
                                    this.props.onLeaveStr}
                onClick      = {this.props.state.disabled ? null : 
                                    this.props.onSelectStr}
                >
                    {this.props.footaction[property]}
                </u>
            </div>
        );
    }
}

export default Footblock;
