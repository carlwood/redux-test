import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Counter from '../components/Counter'
import Posts from '../components/Posts'
import PostSingle from '../components/PostSingle'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:slug" component={PostSingle} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
