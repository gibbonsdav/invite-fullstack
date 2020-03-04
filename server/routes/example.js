const express = require("express")
const router = express.Router()

const users = []
let userId = 0
let going = []
let notgoing = []

router.get("/users", (req, res, next) => {
  axios.get("https://randomuser.me/api/").then(resp => {
    const obj = resp.data.results[0]

    const user = {
      name: results.name.first results.name.last
      phone: results.phone
      email: results.email
    }

    userId++
    users.push({ ...user, id: userId })
    res.json({
      ...user, id: userId
    })
    console.log(users)
  })

})

module.exports = router
