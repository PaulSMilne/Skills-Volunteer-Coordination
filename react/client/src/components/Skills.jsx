import React from 'react'

class SkillsList extends React.Component {

  constructor(props){
       super(props)
       this.state = { skills: []}
  }

  loadSkills(url){
       const request = new XMLHttpRequest()
       request.open('GET', url)

       request.onload = () => {

            if (request.status===200){
                 const jsonString = request.responseText
                 const skillsList = JSON.parse(jsonString)


                 const skillsIDs = []

                 for (let skill of skillsList){
                   skillsIDs.push(skill.id)
                 }

                 this.setState({skills:skillsIDs})
                 console.log(this.state.skills)
            }
       }
       request.send()
  }

  componentDidMount(){
       this.loadSkills('http://localhost:5000/api/skills')
  }

  render(){
    return(

      <section className="skills">

        <h1>Skills Required</h1>


      </section>

    )
  }

}

export default SkillsList
