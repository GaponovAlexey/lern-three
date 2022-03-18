import Head from 'next/head'
import './LearnCanvas'

const CanMain = () => {
  return (
    <>
      <Head>
        <script type='text/javascript' src='./LearnCanvas.js'></script>
      </Head>
      <div className='container'>
        <div className='card'>
          <canvas id='chart'></canvas>
        </div>
      </div>
    </>
  )
}

export default CanMain
