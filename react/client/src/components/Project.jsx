import React from 'react'

const Project = (props) => {

  return (
    <div>
    <h3>{props.project.name}</h3>
    <p>{props.project.location}</p>
    </div>
  )

console.log(props.project.name)

}

export default Project
