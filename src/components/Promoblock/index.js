import React, {Component} from 'react';
import styles from './styles.module.css';

class Promoblock extends Component{
    render(){
        const property = (this.props.state.selected?'selected':'default')+
                        (this.props.state.hover?'H':'');
        return(
            <div className = {styles['promoblock']}>
                <span className = {styles['promo'] + ' ' +
                        (this.props.state.selected?styles['selected']:'') + ' ' +
                        (this.props.state.hover ? styles['hover']:'')
                }>
                    {this.props.options.promo[property]}
                </span>
                
                <div className = {styles['promoCont']}>
                    <span className = {styles['prodName']}>{this.props.options.prodName}</span>
                    <br/>
                    <span className = {styles['prodType']}>{this.props.options.prodType}</span>
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
