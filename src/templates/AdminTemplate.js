import React from 'react'
import { Route } from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'


function AdminLayout(props){
  return(
    <div>
      <NavbarAdmin/>
      {props.children}
    </div>
  )
}
export default function AdminTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent)=>(
        <AdminLayout>
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  )
}
