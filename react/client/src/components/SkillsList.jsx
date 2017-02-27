import React from 'react'
import Skill from './Skill.jsx'

const SkillsList = (props) => {

  const list = props.allSkills.map(
    function(skil, index){
      return(
        <Skill skill={skil} key={index} />
      )
    }
  )

  return (
    <section className="skillList">
      {list}
    </section>
  )


}

export default SkillsList
