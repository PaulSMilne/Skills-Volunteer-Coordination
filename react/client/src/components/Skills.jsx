import React from 'react'
import SkillsList from './SkillsList.jsx'

class Skills extends React.Component {

  constructor(props){
       super(props)
       this.state = { skills: []}
       //binding callbacks
       this.skillRequestComplete = this.skillRequestComplete.bind(this)
       this.projectRequestComplete = this.projectRequestComplete.bind(this)
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

  //builds state to include skills with projects
  addNewSkill(skillData) {
    const currentSkills = this.state.skills;
    currentSkills.push(skillData)
    this.setState({skills: currentSkills})
  }

//first callback gets list of skills, harvests ids and passes on to a new request for each skill with a new url including skill id
skillRequestComplete(response, url){
       const jsonString = response
       const skillList = JSON.parse(jsonString)
       for (let skill of skillList){
         let newUrl = url+"/"+skill.id
         this.makeRequest(newUrl, this.projectRequestComplete)
       }
  }

//second callback uses the new url with skill id to create full skill/projects objects
projectRequestComplete(response, url){
    let skillProjects = []
    const newJsonString = response
    const skillWithProjects = JSON.parse(newJsonString)
    this.addNewSkill(skillWithProjects)
}

componentDidMount(){
       this.makeRequest('http://localhost:5000/api/skills', this.skillRequestComplete)
  }

  render(){
    return(

      <section className="skills">
        <h1>Skills Required</h1>
        <SkillsList allSkills={this.state.skills} />
      </section>

    )}
}

export default Skills
