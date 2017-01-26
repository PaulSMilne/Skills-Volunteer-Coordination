import React from 'react'

class ProjectsList extends React.Component{

constructor(props){
     super(props)
     this.state = { projects: []}
}

loadProjects(url){
     const request = new XMLHttpRequest()
     request.open('GET', url)

     request.setRequestHeader('Content-Type', "application/json")
     request.withCredentials = true

     request.onload = () => {

          if (request.status===200){
               const jsonString = request.responseText
               const projectsList = JSON.parse(jsonString)
               console.log(projectsList)
               this.setState({haikus:projectsList.projects})
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

    </section>

  )}
}

export default ProjectsList
