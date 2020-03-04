import React from "react"
import { useUser } from "../hooks"
import { FaCheck } from "react-icons/fa"

import "../styles/base.css"

export default props => {
  const { foo, get } = useUser()

  return (
    <div className="contactcontain">
      <div className="contact">
        <img className="photo" src="placehold.it/200" alt="place" />
        <h1>User Name </h1>
        <h1>Phone </h1>
        <h1>Email</h1>
        <button className="yes" onClick={e => get()}>
          <FaCheck />
        </button>
        <button className="no" onClick={e => get()}>
          X
        </button>
      </div>
    </div>
  )
}
