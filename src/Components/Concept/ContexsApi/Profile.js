import React, { useContext } from 'react'
import Usercontext from './Usercontext'

const Profile = () => {
  const {username, email} = useContext(Usercontext);

    return (
    <div>
        <h2>Profile</h2>
        <p><strong>Username</strong>{username || 'not set'}</p>
        <p><strong>email</strong>{email || 'not set'}</p>
    </div>
  )
}

export default Profile