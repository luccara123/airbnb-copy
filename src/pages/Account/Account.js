import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import moment from "moment";
import { Route } from "react-router-dom";
import './Account.css';
import AccountSideBar from './AccountSideBar';
import Bookings from './Bookings';
import ChangePassword from './ChangePassword';

class Account extends Component{
    state ={
        pastBookings: [],
        upcomingBookings: []
    }

    async componentDidMount(){
        const accountUrl = `${window.apiHost}/users/getBookings`;
        const data = {
            token: this.props.auth.token,
        }
        const resp = await Axios.post(accountUrl, data);
    }
    render(){
        return(
            <div className="account cointainer-fluid">
                <AccountSideBar />
                <div className="row">
                    <div className="col s8 offset-s3">
                        <Route exact path="/account" render={()=> <h1> Choose an option on the left</h1>} />
                        <Route exact path="/account/reservations/confirmed" component={Bookings} />
                        <Route exact path="/account/reservations/past" component={Bookings} />
                        <Route exact path="/account/reservations/change-pass" component={ChangePassword} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Account);