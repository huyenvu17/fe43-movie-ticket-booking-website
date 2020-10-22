import Footer from 'components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../content/styles/user/main.scss';
import BackToTop from 'react-easy-back-to-top';

function HomeLayout(props){
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mainpage">
      <Navbar />
      {props.children}
      <Footer />
      <BackToTop
        backgroundColor="#602080"
        position={{ right: "5%", bottom: "10%" }}
        hover={{ backgroundColor: "#b030b0", color: "#fff" }}
        transition="all 0.5s"
        borderRadius={20}
        opacity="1"
        color="white"
        fontSize="24px"
        showOnDistance="900"
        icon="fas fa-arrow-up"
      />
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
