import React, { Component } from 'react';
import './App.css';
import Bagcont from './components/Bagcont';
import Header from './components/Header';
import {inpData} from './data';

class App extends Component {
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <Header header = {inpData.header}/>
                {inpData.bags.map(
                    bagElem => <Bagcont 
                                    key = {bagElem.id} 
                                    options = {bagElem}
                                />
                )}
            </div>
        );
    }

    componentDidMount(){
        this.setBlockInCenter();
    }

    setBlockInCenter(){
        let mass = document.getElementsByClassName('App');
        if(mass.length > 0){
            let elHeight = mass[0].offsetHeight;
            let winHeight = document.documentElement.clientHeight;
            if(elHeight < winHeight){
                mass[0].style.marginTop = (winHeight - elHeight)/2+'px';
            }
        }
    }
}
export default App;
