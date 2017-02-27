import React from 'react'
import SkillProjectset from './SkillProjectset.jsx'

const Skill = (props) => {
  const projs = props.skill.projects.map(
    function(project, index){
      return(
        <SkillProjectset skillProject={project} key={index} />
      )
    }
  )

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const name = props.skill.name
  const skillName = capitalizeFirstLetter(name)


  return (
    <div>
    <h4>{skillName}</h4>
    <p>Projects requiring this skill:</p>
    <ul>
    {projs}
    </ul>

    </div>
  )


}

export default Skill
