import React, {Component} from 'react';
import styles from './styles.module.css';
import Bag from '../Bag';
import Footblock from '../Footblock';

class Bagcont extends Component{
    state = {
        hover: false,
        selected: false,
        disabled: (this.props.options.state === 'disabled')
    }

    render(){
        return(
            <div className = {styles['bagcont']}>
            <Bag 
                options = {this.props.options} 
                state = {this.state} 
                onHoverBag = {this.hoverBag.bind(this)}
                onLeaveBag = {this.leaveBag.bind(this)}
                onSelectBag = {this.selectBag.bind(this)}
            />
            <Footblock 
                footblock = {this.props.options.footblock} 
                footaction = {this.props.options.footaction}
                state = {this.state}
                onHoverStr = {this.hoverBag.bind(this)}
                onLeaveStr = {this.leaveBag.bind(this)}
                onSelectStr = {this.selectBag.bind(this)}

            />
            </div>
        );
    }
  
    hoverBag = () => {
        this.setState({
            hover: true
        });
    }

    leaveBag = () => {
        this.setState({
            hover: false
        });
    }

    selectBag = () => {
        this.setState({
            selected: !this.state.selected
        });
    }
}

export default Bagcont;
