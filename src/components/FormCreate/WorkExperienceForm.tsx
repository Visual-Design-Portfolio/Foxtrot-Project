import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { WorkExperienceDTO } from '../../types/dto'


interface WorkExperienceFormProps {
  workExperienceList: WorkExperienceDTO[]
  setWorkExperienceList: React.Dispatch<React.SetStateAction<WorkExperienceDTO[]>>
}

const WorkExperienceForm = ({ workExperienceList, setWorkExperienceList }: WorkExperienceFormProps) => {
  const handleWorkExperienceChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const index = workExperienceList.findIndex((workExperience) => workExperience.id === id)
    const updatedWorkExperience = [...workExperienceList] as any
    if (e.target.name === 'startDate' || e.target.name === 'endDate') {
      updatedWorkExperience[index][e.target.name] = new Date(e.target.value)
    } else {
      updatedWorkExperience[index][e.target.name] = e.target.value
    }

    setWorkExperienceList(updatedWorkExperience)
  }

  const handleAddWorkExperience = () => {
    const newWorkExperience = {
      id: uuidv4(),
      position: '',
      employeeType: '',
      companyName: '',
      companyLocation: '',
      startDate: new Date(),
      endDate: new Date(),
    }

    setWorkExperienceList([...workExperienceList, newWorkExperience])
  }

  const handleDeleteWorkExperience = (id: string) => {
    const updatedWorkExperience = workExperienceList.filter((workExperience) => workExperience.id !== id)
    setWorkExperienceList(updatedWorkExperience)
  }

  return (
    // <div className="dynamic-form">
    //   <h2>Add new Work Experience</h2>
    //   <div className="row-section">
    //     {workExperienceList.map((workExperience, i) => (
    //       <div className="row-section__inner" key={workExperience.id}>
    //         <div className="input-group">
    //           <label htmlFor={`position_${workExperience.id}`}>Position</label>
    //           <input
    //             name="position"
    //             onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
    //             type="text"
    //             value={workExperience.position}
    //             id={`position_${workExperience.id}`}
    //           />
    //         </div>
    //         <div className="input-group">
    //           <label htmlFor={`employeeType_${workExperience.id}`}>Employee Type</label>
    //           <input
    //             type="text"
    //             name="employeeType"
    //             value={workExperience.employeeType}
    //             onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
    //             id={`employeeType_${workExperience.id}`}
    //           />
    //         </div>
    //         <div className="input-group">
    //           <label htmlFor={`companyName_${workExperience.id}`}>Company Name</label>
    //           <input
    //             name="companyName"
    //             type="text"
    //             value={workExperience.companyName}
    //             onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
    //             id={`companyName_${workExperience.id}`}
    //           />
    //         </div>
    //         <div className="input-group">
    //           <label htmlFor={`companyLocation_${workExperience.id}`}>Company Location</label>
    //           <input
    //             name="companyLocation"
    //             type="text"
    //             value={workExperience.companyLocation}
    //             onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
    //             id={`companyLocation_${workExperience.id}`}
    //           />
    //         </div>
    //         <div className="input-group">
    //           <label htmlFor={`startDate_${workExperience.id}`}>Start Date</label>
    //           <input
    //             name="startDate"
    //             type="date"
    //             value={workExperience.startDate.toISOString().split('T')[0]}
    //             onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
    //             id={`startDate_${workExperience.id}`}
    //           />
    //         </div>
    //         <div className="input-group">
    //           <label htmlFor={`endDate_${workExperience.id}`}>End Date</label>
    //           <input
    //             name="endDate"
    //             type="date"
    //             value={workExperience.endDate.toISOString().split('T')[0]}
    //             onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
    //             id={`endDate_${workExperience.id}`}
    //           />
    //         </div>
    //         {i !== 0 && (
    //           <button type="button" onClick={() => handleDeleteWorkExperience(workExperience.id)}>
    //             Remove Work Experience
    //           </button>
    //         )}
    //       </div>
    //     ))}
    //     <button type="button" onClick={handleAddWorkExperience}>
    //       Add new Work Experience
    //     </button>
    //   </div>
    // </div>

    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add new Work Experience</h2>
      <div className="space-y-6">
        {workExperienceList.map((workExperience, i) => (
          <div key={workExperience.id} className="border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor={`position_${workExperience.id}`} className="block mb-1 font-medium">
                  Position
                </label>
                <input
                  name="position"
                  onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
                  type="text"
                  value={workExperience.position}
                  id={`position_${workExperience.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`employeeType_${workExperience.id}`} className="block mb-1 font-medium">
                  Employee Type
                </label>
                <input
                  type="text"
                  name="employeeType"
                  value={workExperience.employeeType}
                  onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
                  id={`employeeType_${workExperience.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`companyName_${workExperience.id}`} className="block mb-1 font-medium">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  value={workExperience.companyName}
                  onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
                  id={`companyName_${workExperience.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`companyLocation_${workExperience.id}`} className="block mb-1 font-medium">
                  Company Location
                </label>
                <input
                  name="companyLocation"
                  type="text"
                  value={workExperience.companyLocation}
                  onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
                  id={`companyLocation_${workExperience.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`startDate_${workExperience.id}`} className="block mb-1 font-medium">
                  Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  value={workExperience.startDate.toISOString().split('T')[0]}
                  onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
                  id={`startDate_${workExperience.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`endDate_${workExperience.id}`} className="block mb-1 font-medium">
                  End Date
                </label>
                <input
                  name="endDate"
                  type="date"
                  value={workExperience.endDate.toISOString().split('T')[0]}
                  onChange={(e) => handleWorkExperienceChange(workExperience.id, e)}
                  id={`endDate_${workExperience.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              {i !== 0 && (
                <button
                  type="button"
                  onClick={() => handleDeleteWorkExperience(workExperience.id)}
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
