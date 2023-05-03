import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = (parm) => {
  const nid = parm.children/1
  console.log(!nid, nid)
  // the default style of mobile nav
  const mobileNavClass = 'md:hidden fixed top-0 left-0 h-full bg-light-bd dark:bg-dark-bd w-[60%] py-8'

  // for mobile nav only
  const [nav, setNav] = useState(false)
  const switchNav = () => setNav(!nav)
  
  // slide Out the movile nav
  const slideOut = () => {
    switchNav()
    const nav = document.getElementById('mobileNav')
    
    const navOpen = document.getElementById('navOpen')
    const navClose = document.getElementById('navClose')
    navClose.className = 'animate-out spin-out-45'
    
    navClose.onanimationend = ()=> {
      navClose.className='hidden'
      navOpen.className = 'animate-in spin-in-45'
      navOpen.onanimationend = ()=>{}
    }

    nav.className = mobileNavClass + ' animate-out slide-out-to-left'
    nav.onanimationend = ()=>nav.className='hidden' // after animation, hide it
  }

  const slideIn = () => {
    switchNav()
    const nav = document.getElementById('mobileNav')

    const navOpen = document.getElementById('navOpen')
    const navClose = document.getElementById('navClose')
    navOpen.className = 'animate-out spin-out-45'
    
    navOpen.onanimationend = ()=> {
      navOpen.className='hidden'
      navClose.className = 'animate-in spin-in-45 text-primary'
      navClose.onanimationend = ()=>{}
    }

    nav.className = mobileNavClass + ' animate-in slide-in-from-left'
    nav.onanimationend = ()=>{} // after animation, don't hide
  }

  return (
    <div className='flex justify-between items-center h-24 px-4 m-auto max-w-5xl text-light-fg dark:text-dark-fg'>
      <div className='group cursor-pointer'>
        <h1 className='text-primary font-bold text-3xl group-hover:hidden'>{'< ReactApp >'}</h1>
        <h1 className='hidden group-hover:block text-primary font-bold text-3xl'>{'< ReactApp />'}</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='p-5 group hover:text-primary hover:underline underline-offset-8 cursor-pointer'>
          {
          !nid?<a href='#' className='text-primary underline underline-offset-8'>{'< Home />'}</a>:
          <><a href='#' className='group-hover:hidden'>{'< Home >'}</a>
          <a href='#' className='hidden group-hover:block'>{'< Home />'}</a></>
          }
        </li>
        <li className='p-5 group hover:text-primary hover:underline underline-offset-8 cursor-pointer'>
          {
          nid==1?<a href='#' className='text-primary underline underline-offset-8'>{'< Projects />'}</a>:
          <><a href='#' className='group-hover:hidden'>{'< Projects >'}</a>
          <a href='#' className='hidden group-hover:block'>{'< Projects />'}</a></>
          }
        </li>
        <li className='p-5 group hover:text-primary hover:underline underline-offset-8 cursor-pointer'>
          {
          nid==2?<a href='#' className='text-primary underline underline-offset-8'>{'< Hobbies />'}</a>:
          <><a href='#' className='group-hover:hidden'>{'< Hobbies >'}</a>
          <a href='#' className='hidden group-hover:block'>{'< Hobbies />'}</a></>
          }
        </li>
        <li className='p-5 group hover:text-primary hover:underline underline-offset-8 cursor-pointer'>
          {
          nid==3?<a href='#' className='text-primary underline underline-offset-8'>{'< About me />'}</a>:
          <><a href='#' className='group-hover:hidden'>{'< About me >'}</a>
          <a href='#' className='hidden group-hover:block'>{'< About me />'}</a></>
          }
        </li>
        <li className='p-5 group hover:text-primary hover:underline underline-offset-8 cursor-pointer'>
          {
          nid==4?<a href='#' className='text-primary underline underline-offset-8'>{'< Contact />'}</a>:
          <><a href='#' className='group-hover:hidden'>{'< Contact >'}</a>
          <a href='#' className='hidden group-hover:block'>{'< Contact />'}</a></>
          }
        </li>
      </ul>
      <div className='md:hidden flex text-3xl hover:text-primary cursor-pointer'>
        <div id='navOpen'><AiOutlineMenu onClick={slideIn}/></div>
        <div id='navClose' className='hidden'><AiOutlineClose onClick={slideOut}/></div>
      </div>
      <div id='mobileNav' className='hidden'>
        <h1 className='text-primary font-bold text-3xl px-4'>{'< Navigation >'}</h1>
        <ul className='p-5'>
          <li className='p-5 text-primary border-b border-primary cursor-pointer'>
            <a href='#'>{!nid?'< Home />':'< Home >'}</a>
          </li>
          <li className='p-5 hover:text-primary border-b border-light-bd-2 dark:border-dark-bd-2 hover:border-primary cursor-pointer'>
            <a href='#'>{nid==1?'< Projects />':'< Projects >'}</a>
          </li>
          <li className='p-5 hover:text-primary border-b border-light-bd-2 dark:border-dark-bd-2 hover:border-primary cursor-pointer'>
            <a href='#'>{nid==2?'< Hobbies />':'< Hobbies >'}</a>
          </li>
          <li className='p-5 hover:text-primary border-b border-light-bd-2 dark:border-dark-bd-2 hover:border-primary cursor-pointer'>
            <a href='#'>{nid==3?'< About me />':'< About me >'}</a>
          </li>
          <li className='p-5 hover:text-primary border-b border-light-bd-2 dark:border-dark-bd-2 hover:border-primary cursor-pointer'>
            <a href='#'>{nid==4?'< Contact />':'< Contact >'}</a>
          </li>
        </ul>
      </div>
    </div>
  ) 
}

export default Navbar