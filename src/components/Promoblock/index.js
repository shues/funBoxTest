import React, {Component} from 'react';
import './styles.css';

class Promoblock extends Component{
    render(){
        let promo = 'Сказочное заморское яство';
        if ((this.props.state.selected === 'selected')&&(this.props.state.hover === 'hover')){
            promo = 'Котэ не одобряет?';
        }
        const state = this.props.state;
        const subClassName = ' ' + state.hover + ' ' + state.selected;
        return(
            <div className = 'promoblock'>
                <span className = {'promo' + subClassName}>
                   {promo} 
                </span>
                
                <div className = 'promoCont'>
                    <span className = 'prodName'>Нямушка</span>
                    <br/>
                    <span className = 'prodType'>{this.props.options.prodType}</span>
                    <br/>
                    <br/>
                    <span>{this.props.options.portions}</span>
                    <br/>
                    <span>{this.props.options.bonus}</span>
                    <br/>
                    <span>{this.props.options.comment}</span>
                    </div>
            </div>
        );
    }
}

export default Promoblock;
