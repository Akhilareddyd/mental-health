 import React, { Component } from 'react';
 class Counter extends Component {
     state = {  }
     render() { 
         return <div>
             <h1>Zenith</h1>
             <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
             <a class="button button--primary button--chromeless u-accentColor--buttonNormal is-inSiteNavBar u-xs-hide js-signInButton" 
             href="https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2F&amp;source=--------------------------nav_reg&amp;operation=login" 
             data-action="sign-in-prompt" 
             data-redirect="https://medium.com/" 
             data-action-source="--------------------------nav_reg">Sign in</a>
             <a class="button button--primary button--withChrome u-accentColor--buttonNormal is-inSiteNavBar js-signUpButton is-touched"
              href="https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2F&amp;source=--------------------------nav_reg&amp;operation=register" 
              data-action="sign-up-prompt" data-redirect="https://medium.com/"
               data-action-source="--------------------------nav_reg">Get started</a>
         </div>;
     }
 }
  
 export default Counter;