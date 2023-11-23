// TechStackForm.js
import React from 'react'
import { MultiSelect } from 'primereact/multiselect'
import { SkillsDTO } from '../../types/dto'

interface TechStackFormProps {
  selectedTechStack: SkillsDTO[]
  setSelectedTechStack: React.Dispatch<React.SetStateAction<SkillsDTO[]>>
  TechStack: SkillsDTO[]
}

const TechStackForm = ({ selectedTechStack, setSelectedTechStack, TechStack }: TechStackFormProps) => {
  return (
    // <div className="flex justify-content-center gap-4">
    //   <label htmlFor="techStack" className="block mb-2 font-medium">
    //     Select Tech Stack:
    //   </label>
    //   <div className="w-full md:w-72 z-10">
    //     <MultiSelect
    //       value={selectedTechStack}
    //       onChange={(e) => setSelectedTechStack(e.value)}
    //       options={TechStack}
    //       optionLabel="name"
    //       placeholder="Select Tech Stack"
    //       maxSelectedLabels={3}
    //       className="w-full z-10"
    //     />
    //   </div>
    // </div>

    <div className="bg-white rounded-md shadow-md p-6 flex justify-content-center gap-4">
      <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
      <div className="flex items-center">
        <MultiSelect
          value={selectedTechStack}
          onChange={(e) => setSelectedTechStack(e.value)}
          options={TechStack}
          optionLabel="name"
          placeholder="Select Tech Stack"
          maxSelectedLabels={3}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default TechStackForm
