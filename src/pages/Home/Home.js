import React, { Component } from 'react';
import './home.css'
import SearchBox from './SearchBox';

class Home extends Component{

    render(){
        return(
        <div className='cointainer-fluid'>
            <div className='row'>
                <div className='home col s12'>
                    <div className='upper-fold'>
                       <SearchBox />
                    </div>
                </div>
            </div>

        </div>
      
        )
    }
}


export default Home;