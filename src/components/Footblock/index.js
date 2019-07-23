import React, {Component} from 'react';
import './styles.css';

class Footblock extends Component{
    render(){
        let footmsg = "Чего сидишь, порадуй котэ, ";
        let footAction = "купи";
        if (this.props.state.selected) {
            footmsg = this.props.footmsg;
            footAction = '';
        } else if (this.props.state.disabled) {
            footmsg = "Печалька, " + this.props.name + " закончился";
            footAction = '';
        }
        
        const subClassName = ' ' + this.props.state.disabled;

        return(
            <div className = {'footblock' + subClassName}>
                <span>{footmsg}</span> 
                <u className = 'footaction'>{footAction}</u>
            </div>
        );
    }
}

export default Footblock;
