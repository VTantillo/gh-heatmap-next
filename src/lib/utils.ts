import { ContributionLevel } from 'src/gql/graphql'
import { COLORS } from './constants'

export const getColor = (level: ContributionLevel) => {
  switch (level) {
    case ContributionLevel.None:
      return COLORS[0]
    case ContributionLevel.FirstQuartile:
      return COLORS[1]
    case ContributionLevel.SecondQuartile:
      return COLORS[2]
    case ContributionLevel.ThirdQuartile:
      return COLORS[3]
    case ContributionLevel.FourthQuartile:
      return COLORS[4]
  }
}
