import React, {Component}                   from 'react'
import ReactDOM                             from 'react-dom'
import {BrowserRouter, Route, Switch}       from 'react-router-dom'
import Main                                 from './jsx/main.jsx'

import './style/index.scss'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/"                             component={Main} />
        </div>
    </BrowserRouter>
    , document.getElementById("sd-app")
)
