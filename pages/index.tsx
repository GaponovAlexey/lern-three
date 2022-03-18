import type { NextPage } from 'next'
import Head from 'next/head'
import CanMain from './CanMain'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <script src='./LearnCanvas.js' ></script>
      </Head>
      {/* <div className='fixed top-[50%] left-[40%]'>hi</div> */}
      {/* <One /> */}
      <CanMain />
    </div>
  )
}

export default Home
