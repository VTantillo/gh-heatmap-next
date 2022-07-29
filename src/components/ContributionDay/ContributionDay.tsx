import { GhCalendarDay } from '@lib/types'
import { getColor } from '@lib/utils'
import tw, { styled } from 'twin.macro'

type StyledDayProps = {
  style: {
    '--day-color': string
  }
}
const StyledDay = styled.div<StyledDayProps>`
  ${tw`w-3 h-3 rounded-sm`}
  background-color: ${(props) => props.style['--day-color']};
`

type ContributionDayProps = {
  day: GhCalendarDay
}
const ContributionDay = ({ day }: ContributionDayProps) => {
  return (
    <StyledDay
      style={{
        '--day-color': getColor(day.contributionLevel),
      }}
    />
  )
}

export default ContributionDay
