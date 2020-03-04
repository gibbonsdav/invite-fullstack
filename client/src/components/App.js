import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useUser } from "../hooks"
import Going from "./Going"
import Notgoing from "./Notgoing"
import Invite from "./Invite"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Invite} />
        <Route path="/going" component={Going} />
        <Route path="/notgoing" component={Notgoing} />
      </div>
    </Router>
  )
}
