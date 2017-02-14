import React from 'react'
import ProjectsList from './ProjectsList.jsx'

class Projects extends React.Component{

constructor(props){
     super(props)
     this.state = { projects: []}
}

makeRequest(url, callback){
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = function () {
    if (request.status===200) callback(request.responseText)
  }
  request.send()
}

projectRequestComplete(response){
       const jsonString = response
       const projectList = JSON.parse(jsonString)
       console.log(projectList)
  }

skillRequestComplete(){
    let projectSkills = []
    const newJsonString = this.request.responseText
    const projectWithSkills = JSON.parse(newJsonString)
    projectSkills.push(projectWithSkills)
    this.setState({projects:projectSkills})
}

componentDidMount(){
     this.makeRequest('http://localhost:5000/api/projects', this.projectRequestComplete)
}

render(){
  return(

    <section className="projects">

      <h1>Projects</h1>

      <ProjectsList allProjects={this.state.projects} />

    </section>

  )}
}



export default Projects
