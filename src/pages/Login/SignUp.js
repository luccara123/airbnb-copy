import React, {Component} from 'react';
import './Login.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import regAction from '../../actions/regAction'
import Login from './Login';
import axios from 'axios';
import swal from 'sweetalert';

class SignUp extends Component{

    constructor(){
        super();
        this.state = {
            lowerPartOfForm: <button type="button" onClick={this.showInputs} className="sign-up-button">Sign up with email</button>
        }
    }

    showInputs = () =>{
       this.setState({
        lowerPartOfForm: <SignUpInputFields changeEmail={this.changeEmail} changePassword={this.changePassword} />
       })
    }

    changeEmail = (e)=>this.setState({email:e.target.value})
    changePassword = (e)=>this.setState({password:e.target.value})

    submitLogin = async (e)=>{
        e.preventDefault();
       // console.log(this.state.email);
       // console.log(this.state.password);
       const url = `${window.apiHost}/users/signup`
       const data = {
        email: this.state.password,
        password: this.state.password
       }

       const resp = await axios.post(url, data);
       console.log(resp.data);
       const token = resp.data.token;

        // -- noEmail
     if(resp.data.msg === "userExists"){
        swal({
            title: "That email is already registered.",
            text: "The email provided is already registered. Please try another.",
            icon: "error",
          })
    } else if(resp.data.msg === "invalidData"){
        swal({
            title: "Invalid email/password",
            text: "Please provide a valid email and password.",
            icon: "error",
          })
    } else if(resp.data.msg === "userAdded"){
        swal({
            title: "Success",
            icon: "success",
        });
        this.props.regAction(resp.data);
        // We call our register action to update our auth reducer!!
    }

      // const url2 = `${window.apiHost}/users/token-check`;
      // const resp2 = await axios.post(url2, {token});
      // console.log(resp2);
    }

    

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div>Already have an account? <span className='pointer' onClick={()=>{this.props.openModal('open', <Login />)}}>Login</span></div>
                </form>
            </div>

        )
    }

}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}


function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
        regAction: regAction,
    }, dispatcher )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const SignUpInputFields = (props) =>{
    return(
        <div className="sign-up-wrapper">
        <div className="col m12">
            <div className="input-field" id="email">
                <div className="form-label">Email</div>
                <input type="text" placeholder="Email" onChange={props.changeEmail} />
            </div>
        </div>
        <div className="col m12">
            <div className="input-field" id="password">
                <div className="form-label">Password</div>
                <input type="password" placeholder="Password" onChange={props.changePassword} />
            </div>
        </div>
        <div className="col m12">
            <button type="submit" className="btn red accent-2">Sign Up!</button>
        </div>
    </div>
    )
}