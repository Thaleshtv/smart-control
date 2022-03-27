import PrincipalPage from '../page/PrincipalPage'
import Dashboard from '../page/Dashboard'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={PrincipalPage} />
      </Switch>
    </Router>
  )
}
