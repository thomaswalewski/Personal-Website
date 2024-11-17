import NavBar from './components/nav/nav'
import './style.css'
import './stylet.css'
import AboutMe from './components/AboutMeTabs/AboutMe'

export default function Main() {

  return (
    <div>
      <NavBar></NavBar>
      <div className='intro-cover'>
        <div>
          <h1 className="sm:text-8xl text-5xl text-center font-semibold mt-14 cover-text">Thomas Walewski</h1>
          <div className='lg:justify-end justify-center flex'>
            <div className='w-fit mt-4'>
              <h3 className="sm:text-2xl text-l text-right font-semibold cover-text typewriter"> Computer Science at Northeastern.</h3>
            </div>
          </div>
          <div className='flex lg:justify-end justify-center'>
            <a className='down-arrow mt-4' href='#about'>
              <svg fill="#ffffff" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-6.6 -6.6 343.20 343.20" stroke="#ffffff">
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#323a41" strokeWidth="1.0">
                  <g id="XMLID_2_">
                    <path id="XMLID_4_" d="M165,225.606c-3.839,0-7.678-1.464-10.606-4.394l-80-80c-2.93-2.929-4.394-6.767-4.394-10.606s1.464-7.678,4.394-10.606c2.928-2.929,6.767-4.394,10.606-4.394s7.678,1.465,10.606,4.394l69.393,69.392l69.393-69.392c2.929-2.929,6.767-4.394,10.606-4.394s7.678,1.465,10.606,4.394c2.93,2.928,4.394,6.767,4.394,10.606s-1.464,7.678-4.394,10.606l-80,80C172.678,224.142,168.839,225.606,165,225.606z"></path>
                    <path id="XMLID_5_" d="M165,0c91.981,0,165,74.019,165,165s-74.019,165-165,165S0,256.981,0,165S73.019,0,165,0z M165,300c74.439,0,135-60.561,135-135S239.439,30,165,30S30,90.561,30,165S90.561,300,165,300z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <section id="about"></section>
      <div className="home-back">
        <div className='justify-center flex w-auto min-h-fit content-center pb-5'>
          <AboutMe />
        </div>
        <div>
          <h3 className="text-center font-normal">Built by Thomas Walewski</h3>
        </div>
      </div >
    </div >
  )
}
