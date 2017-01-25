import React from 'react'
const SignIn = require('./SignIn.jsx')
const SignUp = require('./SignUp.jsx')
const SignOut = require('./SignOut.jsx')

const LoginBox = React.createClass({
     getInitialState: function(){
          return {currentUser: null}
     }, 

     setUser: function(user){
          this.setState({currentUser: user})
     },

     fetchUser: function(){
          var request = new XMLHttpRequest();
          request.open('GET', this.props.url + 'users.json')
          request.setRequestHeader('Content-Type', 'application/json')
          request.withCredentials = true

          request.onload = () => {
               if (request.status === 200){
                    const receivedUser = JSON.parse(request.responseText)
                    this.setUser(receivedUser)
               } else if (request.status === 401) {
                    this.setUser(false)
               }
          }
          request.send()
     },

     componentDidMount: function(){
          this.fetchUser()
     },

     render: function (){
          let mainDiv = <div className="login_box">

               <h4>Please Sign In</h4>

               <SignIn url={this.props.url + "users/sign_in.json"} onSignIn = {this.setUser} />
               <h4>Please Sign Up</h4>

               <SignUp url={this.props.url + "users.json"} onSignUp = {this.setUser} />
                         </div>

          if(this.state.currentUser){
               mainDiv = <div className="login_box">
                    <h4>Welcome {this.state.currentUser.email}</h4>
                    <SignOut url={this.props.url + "users/sign_out.json"}
                    onSignOut={this.setUser} />
               </div>
          }

          return (
               <div>
                    {mainDiv}
               </div>
               )
     }
})

module.exports = LoginBox
