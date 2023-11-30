import * as React from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'

interface TechStackFormProps {
  selectedTechStack: string[]
  setSelectedTechStack: React.Dispatch<React.SetStateAction<string[]>>
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

const techStacks = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'NodeJS',
  'ExpressJS',
  'Tailwind',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Docker',
  'Prisma',
]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  }
}

const TechStackForm = ({ selectedTechStack, setSelectedTechStack }: TechStackFormProps) => {
  const theme = useTheme()

  const handleChange = (event: SelectChangeEvent<typeof selectedTechStack>) => {
    const {
      target: { value },
    } = event
    setSelectedTechStack(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 1 }}>
        <InputLabel id="techStack-multiple-chip-label">Tech Stack</InputLabel>
        <Select
          labelId="techStack-multiple-chip-label"
          id="techStack-multiple-chip"
          multiple
          value={selectedTechStack}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {techStacks.map((techStack) => (
            <MenuItem key={techStack} value={techStack} style={getStyles(techStack, selectedTechStack, theme)}>
              {techStack}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default TechStackForm
