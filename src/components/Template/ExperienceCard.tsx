import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import { WorkExperienceDTO } from '../../types/dto'

type ExperienceCardProps = {
  experience: WorkExperienceDTO
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'linear-gradient(to right, rgb(243, 244, 246), rgb(209, 213, 219))',
        color: '#ffff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      date={`${experience.startDate} - ${experience.endDate}`}
      iconStyle={{
        background: 'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
        color: '#030303',
      }}
      icon={<div className="flex justify-center items-center w-full h-full "></div>}
    >
      <div>
        <h3 className="text-[#181818] text-[24px] font-bold">{experience.position}</h3>
        <div className="flex gap-5">
          <p className="text-purple-700 text-secondary text-[18px] font-semibold ">{experience.companyName}</p>
          <p className="text-slate-400">{experience.companyLocation}</p>
        </div>
      </div>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
