# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Charity.delete_all
Skill.delete_all
Project.delete_all
ProjectSkill.delete_all

Charity.create({name:"Wild Scotland", description:"Promoting wildlife and caretaking nature reserves."})
Charity.create({name:"Scots Oaks", description:"Nurturing ancient oak woodlands."})

s1 = Skill.create({name: "carpentry"})
s2 = Skill.create({name: "dry-stone wall building"})
s3 = Skill.create({name: "plumbing"})
s4 = Skill.create({name: "general labour"})

p1 = Project.create({name: "Wall repair", location: "Woodhall Dean"})
p2 = Project.create({name: "Visitor centre refurbishment", location: "Pease Bay"})

ProjectSkill.create( { skill_id: s1.id, project_id: p2.id } )
ProjectSkill.create( { skill_id: s3.id, project_id: p2.id } )
ProjectSkill.create( { skill_id: s4.id, project_id: p2.id } )

ProjectSkill.create( { skill_id: s2.id, project_id: p1.id } )
ProjectSkill.create( { skill_id: s4.id, project_id: p1.id } )

