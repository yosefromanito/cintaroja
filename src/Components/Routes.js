import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Components/pages/Home/Home'
import Israelnews from '../Components/pages/Israelnews/Israelnews'
function Routes() {
    return(
        <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/Israelnews" component={Israelnews}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;