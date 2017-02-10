import React from 'react'

class Projects extends React.Component{

constructor(props){
     super(props)
     this.state = { projects: []}
}
// There are as many requests as needed to get the full set of objects
// for each item in the projects list a new request is sent
// using the id to target an individual project and its skills
// and put those into the this.state.projects array.
loadProjects(url){
     const request = new XMLHttpRequest()
     request.open('GET', url)

    //  request.setRequestHeader('Content-Type', "application/json")
    //  request.withCredentials = true

     request.onload = () => {

          if (request.status===200){
               let projectSkills = []
               const jsonString = request.responseText
               const projectsList = JSON.parse(jsonString)
               for (let project of projectsList){
                 let newUrl = url+"/"+project.id
                 const newRequest = new XMLHttpRequest()
                 newRequest.open('GET', newUrl)
                 newRequest.onload = () => {
                   if (newRequest.status===200){
                     const newJsonString = newRequest.responseText
                     const projectWithSkills = JSON.parse(newJsonString)
                     projectSkills.push(projectWithSkills)
                   }
                 }
                 newRequest.send()
//                 projectsIDs.push(project.id)
               }
               this.setState({projects:projectSkills})
               console.log(this.state.projects)
          }
     }
     request.send()
}


componentDidMount(){
     this.loadProjects('http://localhost:5000/api/projects')
}

render(){
  return(

    <section className="projects">

      <h1>Projects</h1>

      <ProjectsList allProjects={this.state.projects} />

    </section>

  )}
}

export default ProjectsList