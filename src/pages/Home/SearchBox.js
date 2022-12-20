import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {

    state={
        where: "", checkIn: "", checkOut: "", guests: 0
    }

    changeWhere = (e) => {
        this.setState({where: e.target.value});
    }

    changeCheckIn = (e) => {
        this.setState({checkIn: e.target.value});
    }

    changeCheckOut = (e) => {
        this.setState({checkOut: e.target.value});
    }

    changeGuests = (e) => {
        this.setState({guests: e.target.value});
    }

    render(){
        return (
           <div className='home-search-box col m4'>
                <h1> Book unique places to stay and things to do.</h1>

                <form className='search-box-form'>
                    <div className='col m12'>
                        <div className='form-label'>Where</div>
                        <div className='input-field' id='where'>
                            <input type="text" className='browser-default' onChange={this.changeWhere} placeholder='Anywhere' value={this.state.where} />
                        </div>
                    </div>

                    <div className='col 6'>
                        <div className='form-label'>CHECK-IN</div>
                        <div className='input-field' id='check-in'>
                            <input type="date" className='browser-default' onChange={this.changeCheckIn} placeholder='' value={this.state.checkIn} />
                        </div>
                    </div>

                    <div className='col 6'>
                        <div className='form-label'>Check-out</div>
                        <div className='input-field' id='check-in'>
                            <input type="date" className='browser-default' onChange={this.changeCheckOut} placeholder='Anywhere' value={this.state.checkOut} />
                        </div>
                    </div>

                    <div className='col 6'>
                        <div className='form-label'>Guests</div>
                        <div className='input-field' id='where'>
                            <input type="number" className='browser-default' onChange={this.changeGuests} placeholder='Anywhere' value={this.state.guests} />
                        </div>
                    </div>

                    <div className="col m12 submit-btn">
                        <div className="input-field" id="submit-btn">
                            <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
                        </div>
                    </div>




                </form>
           </div>
        )
    }
}

export default SearchBox;