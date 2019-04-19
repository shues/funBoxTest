import React, {Component} from "react";
import styles from './styles.module.css';
import Promoblock from '../Promoblock';
import Weightblock from '../Weightblock';

class Bag extends Component{

    render(){
        const PromoSection = this.props.options;
        const Weight = this.props.options.weight;
        return(
            <div 
                className = {styles['bigBag'] + ' ' +
                    (this.props.state.selected ? styles['selected']:'') + ' ' +
                    (this.props.state.hover ? styles['hover'] : '') + ' ' +
                    (this.props.state.disabled ? styles['disabled'] : '')
                }
                onMouseEnter = {this.props.state.disabled ? null : this.props.onHoverBag}
                onMouseLeave = {this.props.state.disabled ? null : this.props.onLeaveBag}
                onClick      = {this.props.state.disabled ? null : this.props.onSelectBag}
            >
                <Promoblock options = {PromoSection} state = {this.props.state}/>
                <Weightblock weight = {Weight} state = {this.props.state}/>
            </div>
        );
    }
}

export default Bag;
