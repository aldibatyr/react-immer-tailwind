import React from 'react'
import UserCard from './UserCard'

const UsersList = (users) => {
  const renderUsers = users?.map(user => (
      <UserCard user={user}/>
    ))
  return (
    <div>
      {renderUsers}
    </div>
  )
}

export default UsersList
