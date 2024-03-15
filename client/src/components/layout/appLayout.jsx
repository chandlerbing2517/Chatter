import React from 'react'
import Header from './Header'
import Title from '../shared/Title'

const appLayout = () => (WrappedComponent)=> {
    return(props)=>{
      return (
    <>
      <Title />
      <Header />
      <WrappedComponent {...props} />
      <div>Footer</div>
    </>
  )
}
}

export default appLayout
