import React from 'react'

const User = ({ user }) => {
  console.log(user)
  return (
    <div>
      <h2>{user.title}</h2>
      <p>{user.body}</p>
    </div>
  )
}

export default User