import ContributionWeek from '@components/ContributionWeek'
import { GhCalendar } from '@lib/types'
import 'twin.macro'

type HeatMapProps = {
  calendar: GhCalendar
}
const HeatMap = ({ calendar }: HeatMapProps) => {
  return (
    <div tw="flex w-full gap-2">
      {calendar.weeks.map((week, idx) => (
        <ContributionWeek key={idx} week={week} />
      ))}
    </div>
  )
}

export default HeatMap
