import React from 'react';
import 'App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeTemplate from 'templates/HomeTemplate';
import AdminTemplate from 'templates/AdminTemplate';
import PageNotFound from 'containers/PageNotFound';
import { routesHome, routesAdmin } from 'routes';

function App() {
  const showHomeLayout = (routes) => {
    if(routes && routes.length > 0){
      return routes.map((route, index)=>{
        return <HomeTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
      })
    }
  }
  const showAdminLayout = (routes) => {
    if(routes && routes.length > 0){
      return routes.map((route, index)=>{
        return <AdminTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
      })
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        {showHomeLayout(routesHome)}
        {showAdminLayout(routesAdmin)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
