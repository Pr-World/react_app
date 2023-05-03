import Navbar from './components/Navbar'
import GradientBox from './components/GradientBox'
const App = () => {
  return (
    <div>
      <Navbar>0</Navbar> { /* The `0` indicates home page ;) */ }
      <GradientBox from='fuchsia-500' to='cyan-500' height='48'>
        <h1 className='font-bold text-light-fg dark:text-dark-fg text-4xl px-3'>Meet me, </h1>
        <div id='totype' className='font-bold text-primary text-4xl px-4 inline-block'
        >
          <div className='inline-block overflow-hidden [letter-spacing: 2px] whitespace-nowrap [box-sizing:border-box] border-r-4 border-r-black px-4 animate-type'> Prakash Niroula</div>
        </div>
      </GradientBox>
    </div>
  )
}

export default App