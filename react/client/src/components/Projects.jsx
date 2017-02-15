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
    if (request.status===200) callback(request.responseText, url)
  }
  request.send()
}

addNewProject(projectData) {
  const currentProjects = this.state.projects;
  const newProjects = [this.state.projects.concat([projectData])]
  this.setState({
     projects: newProjects
  })
}

projectRequestComplete(response, url){
       const jsonString = response
       const projectList = JSON.parse(jsonString)
       for (let project of projectList){
         let url = url+"/"+project.id
         this.makeRequest(url, this.skillRequestComplete)
       }
  }

skillRequestComplete(response, url){
    let projectSkills = []
    const newJsonString = this.request.responseText
    const projectWithSkills = JSON.parse(newJsonString)
    this.addNewProject(projectWithSkills)
    // projectSkills.push(projectWithSkills)
    // this.setState({projects:projectSkills})
    console.log(this.state.projects)
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
