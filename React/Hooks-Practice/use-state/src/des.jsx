import React from 'react'

const des = () => {
    const users = [
        {id:1, name:'John'},
        {id:2, name:'Jane'},
        {id:3, name:'Doe'},
    ]
  return (
    <div>
        {users.map(({id, name})=>(
            <div key={id}>
                <h2>{name}</h2>
            </div>
        ))}
      
    </div>
  )
}

export default des
