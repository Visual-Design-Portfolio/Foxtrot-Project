// ProjectForm.js
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EducationDTO } from '../../types/dto'


// interface EducationDTO {
//     school: string
//     degree: string
//     major: string
//     startDate: Date
//     endDate: Date
//   }

interface EducationFormProps {
  educationList: EducationDTO[]
  setEducationList: React.Dispatch<React.SetStateAction<EducationDTO[]>>
}

const EducationForm = ({ educationList, setEducationList }: EducationFormProps) => {

  
  const handleEducationChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const index = educationList.findIndex((education) => education.id === id)
    const updatedEducation = [...educationList] as any
    if (e.target.name === 'startDate' || e.target.name === 'endDate') {
      updatedEducation[index][e.target.name] = new Date(e.target.value)
    } else {
      updatedEducation[index][e.target.name] = e.target.value
    }

    setEducationList(updatedEducation)
  }

  const handleAddEducation = () => {
    const newEducation = {
      id: uuidv4(),
      school: '',
      degree: '',
      major: '',
      startDate: new Date(),
      endDate: new Date(),
    }

    setEducationList([...educationList, newEducation])
  }

  const handleDeleteEducation = (id: string) => {
    const updatedEducation = educationList.filter((education) => education.id !== id)
    setEducationList(updatedEducation)
  }

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add new Education</h2>
      <div className="space-y-6">
        {educationList.map((education) => (
          <div key={education.id} className="border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor={`school_${education.id}`} className="block mb-1 font-medium">
                  School
                </label>
                <input
                  name="school"
                  onChange={(e) => handleEducationChange(education.id, e)}
                  type="text"
                  value={education.school}
                  id={`school_${education.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`degree_${education.id}`} className="block mb-1 font-medium">
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleEducationChange(education.id, e)}
                  id={`degree_${education.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`major_${education.id}`} className="block mb-1 font-medium">
                  Major
                </label>
                <input
                  name="major"
                  type="text"
                  value={education.major}
                  onChange={(e) => handleEducationChange(education.id, e)}
                  id={`major_${education.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`startDate_${education.id}`} className="block mb-1 font-medium">
                  Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  value={education.startDate.toISOString().split('T')[0]}
                  onChange={(e) => handleEducationChange(education.id, e)}
                  id={`startDate_${education.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`endDate_${education.id}`} className="block mb-1 font-medium">
                  End Date
                </label>
                <input
                  name="endDate"
                  type="date"
                  value={education.endDate.toISOString().split('T')[0]}
                  onChange={(e) => handleEducationChange(education.id, e)}
                  id={`endDate_${education.id}`}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteEducation(education.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Remove Education
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEducation}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add New Education
        </button>
      </div>
    </div>
  )
}

export default EducationForm
