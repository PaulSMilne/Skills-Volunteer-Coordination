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
  request.onload = callback
  request.send()
}

projectRequestComplete(){
  if (request!==200) return;
       const jsonString = request.responseText
       const projectList = JSON.parse(jsonString)
       console.log("something")

      //  for (let project of projectList){
      //    let newUrl = url+"/"+project.id
      //    makeRequest(newUrl, this.skillRequestComplete())
      //    }
  }

skillRequestComplete(){
  if (this.status!==200) return
    let projectSkills = []
    const newJsonString = newRequest.responseText
    const projectWithSkills = JSON.parse(newJsonString)
    projectSkills.push(projectWithSkills)
    this.setState({projects:projectSkills})
     console.log(this.state.projects)
}

componentDidMount(){
     this.makeRequest('http://localhost:5000/api/projects',this.projectRequestComplete())
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
