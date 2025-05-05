import React, {ReactNode } from 'react'

// Route Groups
const RootLayout = ({children} : {children: ReactNode}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default RootLayout