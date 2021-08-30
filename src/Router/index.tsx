import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import routes from '../routes'

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home.value} component={HomePage} />
    </Switch>
  )
}

export default Router
