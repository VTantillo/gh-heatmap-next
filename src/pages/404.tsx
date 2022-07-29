import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type NotFoundPageProps = {}
const NotFoundPage: NextPage<NotFoundPageProps> = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
        <meta name="description" content="Page not found" />
      </Head>

      <main>
        <h1>Not Found Page</h1>
      </main>
    </>
  )
}

export default NotFoundPage

export const getStaticProps: GetStaticProps<NotFoundPageProps> = async () => {
  return {
    props: {},
  }
}
