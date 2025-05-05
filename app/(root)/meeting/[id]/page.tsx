import React from 'react'

// Dynamic Route
// dari documentasi slug => id, diganti karena memakai [id]
const Meeting = ({params}: {params: {id: string} }) => {
  return (
    // http://localhost:3000/meeting/[id]
    <div>Meeting Room #{params.id}</div>
  )
}

export default Meeting