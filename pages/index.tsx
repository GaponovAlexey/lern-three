import type { NextPage } from 'next'

import CanMain from '../components/Canvas/CanMain'
import One from './One'

const Home: NextPage = () => {
  return (
    <div>
      <div className='fixed top-[50%] left-[40%]'>hi</div>
      <One />
    </div>
  )
}

export default Home
