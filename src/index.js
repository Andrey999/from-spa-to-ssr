import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Routes from './Routes'
import { Provider } from 'react-redux'
import  { store }  from  './store'
import '@babel/polyfill'


ReactDOM.render(
     <Provider store={ store }>
        <BrowserRouter>
           <div> { renderRoutes(Routes) }</div>
        </BrowserRouter>
     </Provider>,
     document.querySelector('#root'));