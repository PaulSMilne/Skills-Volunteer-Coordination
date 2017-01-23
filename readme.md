# Skillz - coordinating volunteers

A system to match up volunteers with particular skills to charity projects that require those skills.

## Project brief

The system will consist of two parts: 

- The charity will be able to created projects with jobs with skills, and then see on a map what volunteers with appropriate skills are in the vicinity.

- The user part will allow a volunteer to register with a set of skills and a location. The volunteer will then be able to see what projects are in their vicinity that require their particular skills. 

## Programming Approach

The database that holds details of users and projects and jobs will be built with Ruby on Rails. I'll use scaffolding to build a view onto the project database for chrarities with restful routes to create, review, update and delete records. 
The rest of the app will be built in React JS to provide a front end for volunteers to enter their details, and to see a google map with projects in their vicinity. 

The charities will also use the React front end to locate volunteers via the map and see their profiles with contact details. 
