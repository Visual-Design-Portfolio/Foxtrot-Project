import React from 'react'
import { ProjectDTO } from '../../types/dto'

interface ProjectFormProps {
  projectList: ProjectDTO[]
  setProjectList: React.Dispatch<React.SetStateAction<ProjectDTO[]>>
}

const ProjectForm = ({ projectList, setProjectList }: ProjectFormProps) => {
  const handleProjectChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedProjects = [...projectList]
    const key = e.target.name as keyof ProjectDTO

    updatedProjects[index][key] = e.target.value
    setProjectList(updatedProjects)
  }

  const handleAddProject = () => {
    const newProject: ProjectDTO = {
      title: '',
      detail: '',
      linkProject: '',
      linkGitRepo: '',
      category: [],
      tag: [],
    }

    setProjectList([...projectList, newProject])
  }

  const handleDeleteProject = (index: number) => {
    const updatedProject = projectList.filter((project, idx) => idx !== index)
    setProjectList(updatedProject)
  }

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add new project</h2>
      <div className="space-y-6">
        {projectList.map((project, index) => (
          <div key={index} className="border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor={`projectTitle_${index}`} className="block mb-1 font-medium">
                  Project Title
                </label>
                <input
                  name="title"
                  onChange={(e) => handleProjectChange(index, e)}
                  type="text"
                  value={project.title}
                  id={`projectTitle_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`description_${index}`} className="block mb-1 font-medium">
                  Description
                </label>
                <textarea
                  name="detail"
                  value={project.detail}
                  onChange={(e) => handleProjectChange(index, e)}
                  id={`description_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`linkProject_${index}`} className="block mb-1 font-medium">
                  Link Project
                </label>
                <input
                  name="linkProject"
                  type="url"
                  value={project.linkProject}
                  onChange={(e) => handleProjectChange(index, e)}
                  id={`linkProject_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`linkGitRepo_${index}`} className="block mb-1 font-medium">
                  Link Git Repository
                </label>
                <input
                  name="linkGitRepo"
                  type="url"
                  value={project.linkGitRepo}
                  onChange={(e) => handleProjectChange(index, e)}
                  id={`linkGitRepo_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteProject(index)}
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
