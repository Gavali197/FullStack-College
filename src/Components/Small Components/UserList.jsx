import React, { useState } from 'react'


function UserList() {
    const [user, setuser] = useState([ /* here you enter user names */])
    return (
    <div>
        
        <ul>
            {user.map((index, Nav)=>(
                <li key={Nav}>{index}</li>
            ))}
        </ul>
        {user.length === 0 && <p>Not User Found</p>}
    </div>
  )
}

export default UserList