import React from 'react'

const Course = ({image,title,description}) => {
  return (
    <div>
      <img src={image}/>  
      <div>{title}</div>
      <div>{description}</div>
      
    </div>
  )
}

export default Course
