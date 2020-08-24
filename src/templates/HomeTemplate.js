import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomeLayout(props){
  return (
    <div>
      <Navbar />
      {props.children}
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
