// TechStackForm.js
import React from 'react'
import { MultiSelect } from 'primereact/multiselect'

const TechStack = [
  { name: 'React' },
  { name: 'Vue.js' },
  { name: 'Angular' },
  { name: 'Express.js' },
  { name: 'Firebase' },
  { name: 'Tailwind CSS' },
]

interface TechStackFormProps {
  selectedTechStack: string[]
  setSelectedTechStack: React.Dispatch<React.SetStateAction<string[]>>
  // TechStack: string[]
}

const TechStackForm = ({ selectedTechStack, setSelectedTechStack }: TechStackFormProps) => {
  const handleValueChange = (e: { value: { name: string }[] }) => {
    const selectedOptions = e.value.map((option: { name: string }) => option.name)
    console.log(selectedOptions)
    setSelectedTechStack(selectedOptions)
  }
  return (
    <div className="bg-white rounded-md shadow-md p-6 flex justify-content-center gap-4">
      <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
      <div className="flex items-center">
        <MultiSelect
          value={TechStack.filter((tech) => selectedTechStack.includes(tech.name))}
          onChange={handleValueChange}
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
