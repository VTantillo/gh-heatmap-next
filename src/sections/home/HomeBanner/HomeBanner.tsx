import styled from 'styled-components'
import { COLORS } from '@lib/design-tokens'
import { HomeBannerContent } from './home-banner.content'

const Heading = styled.h1`
  color: ${COLORS.white};
  font-size: 128px;
`

type HomeBannerProps = {
  content: HomeBannerContent
}
const HomeBanner: React.FC<HomeBannerProps> = ({ content }) => {
  return <Heading>{content.heading}</Heading>
}

export default HomeBanner
