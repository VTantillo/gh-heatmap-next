import HeatMap from '@components/HeatMap'
import { GhCalendar, GhCalendarDay, GhCalendarMonth, GhCalendarWeek } from '@lib/types'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { client } from 'src/gql/client'
import {
  MyContributionCalendarDocument,
  MyContributionCalendarQuery,
  MyContributionCalendarQueryVariables,
} from 'src/gql/graphql'
import tw from 'twin.macro'

const PageWrapper = tw.div`min-h-full bg-ocean grid place-content-center`

type HomePageProps = {
  contributionCalendar: GhCalendar
}
const HomePage: NextPage<HomePageProps> = ({ contributionCalendar }) => {
  return (
    <>
      <Head>
        <title>Template Next App - Home Page</title>
        <meta name="description" content="Template" />
      </Head>

      <PageWrapper>
        <HeatMap calendar={contributionCalendar} />
      </PageWrapper>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const calendarData = await client.request<
    MyContributionCalendarQuery,
    MyContributionCalendarQueryVariables
  >(MyContributionCalendarDocument)

  const ghCalendar = calendarData.viewer.contributionsCollection.contributionCalendar

  const calendar = {
    totalContributions: ghCalendar.totalContributions,
    months: ghCalendar.months.map(
      (month) =>
        ({
          firstDay: month.firstDay,
          name: month.name,
          totalWeeks: month.totalWeeks,
          year: month.year,
        } as GhCalendarMonth),
    ),
    weeks: ghCalendar.weeks.map((week) => {
      const weekDays = week.contributionDays.map((day) => {
        return {
          contributionCount: day.contributionCount,
          contributionLevel: day.contributionLevel,
          date: day.date,
          weekday: day.weekday,
        } as GhCalendarDay
      })

      return {
        days: weekDays,
        firstDay: week.firstDay,
      } as GhCalendarWeek
    }),
  } as GhCalendar

  return {
    props: {
      contributionCalendar: calendar,
    },
  }
}
