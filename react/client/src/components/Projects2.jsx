import React from 'react'
import ProjectsList from './ProjectsList.jsx'

class Projects extends React.Component{

constructor(props){
     super(props)
     this.state = { projects: []}
}

makeRequest(url, callback){
  const request = new XMLHttpRequest()
  request.open(GET, url)
  request.onload = callback
  request.send()
}

projectRequestComplete(){
  if (this.request.status===200){
       const jsonString = this.request.responseText
       const projectList = JSON.parse(jsonString)
       for (let project of projectList){
         let newUrl = url+"/"+project.id
         makeRequest(newUrl, skillRequestComplete)
         }
       }
  }

skillRequestComplete(){
  if (this.request.status===200){
    let projectSkills = []
    const newJsonString = this.request.responseText
    const projectWithSkills = JSON.parse(newJsonString)
    projectSkills.push(projectWithSkills)
    this.setState({projects:projectSkills})
  }
}

addNewProject(projectData) {
  const currentProjects = this.state.projects;
  const newProjects = […this.state.projects, projectData]
  this.setState({
     projects: newProjects
  })
}

// loadProjects(url){
//      const request = new XMLHttpRequest()
//      request.open('GET', url)
//      request.onload = () => {
//
//           if (request.status===200){
//                let projectSkills = []
//                const jsonString = request.responseText
//                const projectList = JSON.parse(jsonString)
//                for (let project of projectList){
//                  let newUrl = url+"/"+project.id
//                  const newRequest = new XMLHttpRequest()
//                  newRequest.open('GET', newUrl)
//                  newRequest.onload = () => {
//                    if (newRequest.status===200){
//                      const newJsonString = newRequest.responseText
//                      const projectWithSkills = JSON.parse(newJsonString)
//                      projectSkills.push(projectWithSkills)
//                      this.setState({projects:projectSkills})
//                    }
//                  }
//                  newRequest.send()
//                }
//
//           }
//      }
//      request.send()
// }


componentDidMount(){
     this.makeRequest('http://localhost:5000/api/projects', projectRequestComplete)
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
