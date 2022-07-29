import { ContributionLevel } from 'src/gql/graphql'

export type GhCalendarDay = {
  contributionCount: number
  contributionLevel: ContributionLevel
  date: Date
  weekday: number
}

export type GhCalendarWeek = {
  days: Array<GhCalendarDay>
  firstDay: Date
}

export type GhCalendarMonth = {
  firstDay: Date
  name: string
  totalWeeks: number
  year: number
}

export type GhCalendar = {
  months: Array<GhCalendarMonth>
  totalContributions: number
  weeks: Array<GhCalendarWeek>
}
