// ProjectForm.js
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ProjectDTO } from '../../types/dto'

// interface ProjectDTO {
//   id: string
//   title: string
//   detail: string
//   category: { name: string }[]
//   tag: { name: string }[]
//   linkProject: string
//   linkGitRepo: string
// }

interface ProjectFormProps {
  projectList: ProjectDTO[]
  setProjectList: React.Dispatch<React.SetStateAction<ProjectDTO[]>>
}

const ProjectForm = ({ projectList, setProjectList }: ProjectFormProps) => {
  const handleProjectChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const index = projectList.findIndex((project) => project.id === id)
    const updatedProjects = [...projectList] as any
    updatedProjects[index][e.target.name] = e.target.value
    setProjectList(updatedProjects)
  }

  const handleAddProject = () => {
    const newProject = {
      title: '',
      id: uuidv4(),
      detail: '',
      linkProject: '',
      linkGitRepo: '',
      category: [{ name: '' }],
      tag: [{ name: '' }],
    }

    setProjectList([...projectList, newProject])
  }

  const handleDeleteProject = (id: string) => {
    const updatedProject = projectList.filter((project) => project.id !== id)
    setProjectList(updatedProject)
  }

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add new project</h2>
      <div className="space-y-6">
        {projectList.map((project) => (
          <div key={project.id} className="border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor={`projectTitle_${project.id}`} className="block mb-1 font-medium">
                  Project Title
                </label>
                <input
                  name="title"
                  onChange={(e) => handleProjectChange(project.id, e)}
                  type="text"
                  value={project.title}
                  id={`projectTitle_${project.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`description_${project.id}`} className="block mb-1 font-medium">
                  Description
                </label>
                <textarea
                  name="detail"
                  value={project.detail}
                  onChange={(e) => handleProjectChange(project.id, e)}
                  id={`description_${project.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`linkProject_${project.id}`} className="block mb-1 font-medium">
                  Link Project
                </label>
                <input
                  name="linkProject"
                  type="url"
                  value={project.linkProject}
                  onChange={(e) => handleProjectChange(project.id, e)}
                  id={`linkProject_${project.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`linkGitRepo_${project.id}`} className="block mb-1 font-medium">
                  Link Git Repository
                </label>
                <input
                  name="linkGitRepo"
                  type="url"
                  value={project.linkGitRepo}
                  onChange={(e) => handleProjectChange(project.id, e)}
                  id={`linkGitRepo_${project.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteProject(project.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Remove Project
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddProject}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add New Project
        </button>
      </div>
    </div>
  )
}

export default ProjectForm
