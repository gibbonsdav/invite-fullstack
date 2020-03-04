import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_USER = "ex/GET_USER"

const initialState = {
  foo: "bar"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

function getUser() {
  return dispatch => {
    axios.get("/api").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_USER,
        payload: data.message
      })
    })
  }
}

export function useUser() {
  const dispatch = useDispatch()
  const foo = useSelector(appState => appState.userState.foo)
  const get = () => dispatch(getUser())

  return { foo, get }
}
