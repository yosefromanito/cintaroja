import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Components/pages/Home/Home'
import Israelnews from '../Components/pages/Israelnews/Israelnews'
import Mexiconews from '../Components/pages/Mexiconews/Mexiconews'
import Usanews from '../Components/pages/Usanews/Usanews'
import Avisodepriv from '../Components/pages/Avisodepriv/Avisodepriv'
function Routes() {
    return(
        <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/Israelnews" component={Israelnews}/>
           <Route exact path="/Mexiconews" component={Mexiconews}/>
           <Route exact path="/Usanews" component={Usanews}/>
           <Route exact path="/Avisodepriv" component={Avisodepriv}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;