import React from 'react'
import { WorkExperienceDTO } from '../../types/dto'

interface WorkExperienceFormProps {
  workExperienceList: WorkExperienceDTO[]
  setWorkExperienceList: React.Dispatch<React.SetStateAction<WorkExperienceDTO[]>>
}

const WorkExperienceForm = ({ workExperienceList, setWorkExperienceList }: WorkExperienceFormProps) => {
  const handleWorkExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedWorkExperience = [...workExperienceList]
    const key = e.target.name as keyof WorkExperienceDTO
    if (key === 'startDate' || key === 'endDate') {
      updatedWorkExperience[index][key] = new Date(e.target.value)
    } else {
      updatedWorkExperience[index][key] = e.target.value
    }
    setWorkExperienceList(updatedWorkExperience)
  }

  const handleAddWorkExperience = () => {
    const newWorkExperience = {
      position: '',
      employeeType: '',
      companyName: '',
      companyLocation: '',
      startDate: new Date(),
      endDate: new Date(),
    }
    setWorkExperienceList([...workExperienceList, newWorkExperience])
  }

  const handleDeleteWorkExperience = (index: number) => {
    const updatedWorkExperience = workExperienceList.filter((workExperience, idx) => idx !== index)
    setWorkExperienceList(updatedWorkExperience)
  }

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add new Work Experience</h2>
      <div className="space-y-6">
        {workExperienceList.map((workExperience, index) => (
          <div key={index} className="border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor={`position_${index}`} className="block mb-1 font-medium">
                  Position
                </label>
                <input
                  name="position"
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  type="text"
                  value={workExperience.position}
                  id={`position_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`employeeType_${index}`} className="block mb-1 font-medium">
                  Employee Type
                </label>
                <input
                  type="text"
                  name="employeeType"
                  value={workExperience.employeeType}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  id={`employeeType_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`companyName_${index}`} className="block mb-1 font-medium">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  value={workExperience.companyName}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  id={`companyName_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`companyLocation_${index}`} className="block mb-1 font-medium">
                  Company Location
                </label>
                <input
                  name="companyLocation"
                  type="text"
                  value={workExperience.companyLocation}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  id={`companyLocation_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`startDate_${index}`} className="block mb-1 font-medium">
                  Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  value={workExperience.startDate.toISOString().split('T')[0]}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  id={`startDate_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`endDate_${index}`} className="block mb-1 font-medium">
                  End Date
                </label>
                <input
                  name="endDate"
                  type="date"
                  value={workExperience.endDate.toISOString().split('T')[0]}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  id={`endDate_${index}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleDeleteWorkExperience(index)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Remove Work Experience
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddWorkExperience}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add new Work Experience
        </button>
      </div>
    </div>
  )
}

export default WorkExperienceForm
