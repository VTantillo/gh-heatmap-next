import ContributionDay from '@components/ContributionDay'
import { GhCalendarWeek } from '@lib/types'
import 'twin.macro'

type ContributionWeekProps = {
  week: GhCalendarWeek
}
const ContributionWeek = ({ week }: ContributionWeekProps) => {
  return (
    <div tw="flex flex-col gap-2">
      {week.days.map((day) => (
        <ContributionDay key={day.date.toString()} day={day} />
      ))}
    </div>
  )
}

export default ContributionWeek
