import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../content/styles/main.scss';
function HomeLayout(props){
  return (
    <div className="mainpage">
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
} 
export default function HomeTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  )
}
