import React from 'react'
import { ProjectDTO } from '../../types/dto'
import { Theme, useTheme } from '@mui/material/styles'
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import { categories, tags } from '../../utils/const'

interface ProjectFormProps {
  projectList: ProjectDTO[]
  setProjectList: React.Dispatch<React.SetStateAction<ProjectDTO[]>>
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}



function getStyles(name: string, categoryList: readonly string[], theme: Theme) {
  return {
    fontWeight:
      categoryList.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  }
}

const ProjectForm = ({ projectList, setProjectList }: ProjectFormProps) => {
  const theme = useTheme()

  const handleProjectChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedProjects = projectList.map((project, idx) => {
      if (idx === index) {
        return {
          ...project,
          [e.target.name]: e.target.value,
        }
      }
      return project
    })

    setProjectList(updatedProjects)
  }

  const handleCategoryChange = (index: number, event: SelectChangeEvent<string[]>) => {
    const { value } = event.target
    const updatedProjects = projectList.map((project, idx) => {
      if (idx === index) {
        return {
          ...project,
          category: typeof value === 'string' ? value.split(',') : value,
        }
      }
      return project
    })
    setProjectList(updatedProjects)
  }

  const handleTagChange = (index: number, event: SelectChangeEvent<string[]>) => {
    const { value } = event.target
    const updatedProjects = projectList.map((project, idx) => {
      if (idx === index) {
        return {
          ...project,
          tag: typeof value === 'string' ? value.split(',') : value,
        }
      }
      return project
    })
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

              {/* Multi select */}
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="category-multiple-chip-label">Category</InputLabel>
                <Select
                  labelId="category-multiple-chip-label"
                  id="category-multiple-chip"
                  multiple
                  value={project.category}
                  onChange={(event) => handleCategoryChange(index, event)}
                  input={<OutlinedInput id="category-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category} style={getStyles(category, categories, theme)}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="tags-multiple-chip-label">Tag</InputLabel>
                <Select
                  labelId="tags-multiple-chip-label"
                  id="tage-multiple-chip"
                  multiple
                  value={project.tag}
                  onChange={(event) => handleTagChange(index, event)}
                  input={<OutlinedInput id="tags-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {tags.map((tag) => (
                    <MenuItem key={tag} value={tag} style={getStyles(tag, categories, theme)}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* Multi select */}

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
