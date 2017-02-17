import React from 'react'
import ProjectsList from './ProjectsList.jsx'

class Projects extends React.Component{

constructor(props){
     super(props)
     this.state = { projects: []}
     //binding callbacks
     this.projectRequestComplete = this.projectRequestComplete.bind(this)
     this.skillRequestComplete = this.skillRequestComplete.bind(this)
}

//request checks if status is okay at this level and then passes the response text to the callback to process
makeRequest(url, callback){
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = function () {
    if (request.status===200) callback(request.responseText, url)
  }
  request.send()
}

//builds state to include projects with skills
addNewProject(projectData) {
  const currentProjects = this.state.projects;
  currentProjects.push(projectData)
  this.setState({projects: currentProjects})
}

//first callback gets list of project, harvests ids and passes on to a new request for each project with a new url including project id
projectRequestComplete(response, url){
       const jsonString = response
       const projectList = JSON.parse(jsonString)
       for (let project of projectList){
         let newUrl = url+"/"+project.id
         this.makeRequest(newUrl, this.skillRequestComplete)
       }
  }

//second callback uses the new url with project id to create full project/skills objects
skillRequestComplete(response, url){
    let projectSkills = []
    const newJsonString = response
    const projectWithSkills = JSON.parse(newJsonString)
    this.addNewProject(projectWithSkills)
}

componentDidMount(){
     this.makeRequest('http://localhost:5000/api/projects', this.projectRequestComplete)
}
//

render(){
  return(

    <section className="projects">

      <h1>Projects</h1>
      <ProjectsList allProjects={this.state.projects} />

    </section>

  )}
}



export default Projects
