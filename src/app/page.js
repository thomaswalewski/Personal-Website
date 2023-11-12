import NavBar from './components/nav/nav'
import DisplayImg from './components/DisplayImg/displayimg'
import './style.css'
import './stylet.css'

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
        <div>
          <h1 className="sm:text-8xl text-5xl text-center font-normal pb-4 pt-4">About Me</h1>
        </div>
        <div className='flex justify-center'>
          <h2 className="text-justify justify-center text-md xl:w-2/3 sm:text-lg pl-3 pr-3">
            I am a third year student at Northeastern University in
            Boston Massachusetts, majoring in Computer Science and also pursuing a minor in Mathematics. I have a lot
            of wide interests within computer science, such as software development, machine
            learning, and web development.
          </h2>
        </div>
        <div className='justify-center flex'>
          <div className="about-desc-flex">
            <div className="background-mygrey about-desc rounded-xl align-top p-4">
              <h1 className="text-2xl sm:text-4xl text-center mb-3">How I Became Interested in Computer Science</h1>
              <h2 className='text-justify text-md sm:text-lg indent-6'>
                When I was in elementary and middle school, like many other kids, I absolutely loved minecraft. I still
                think its a great game, but at that time it was something I played every day. As I was getting into middle
                school, my friends and I wanted to play together and I ended up hosting some of our minecraft servers for
                a few years. At first, I paid a company to host the server for me and all I had to do was install plugins
                and make sure to restart the server occasionally. However as time went on, I realized I could host the
                server myself on an old PC I had, which would give me more control and save me money. Once I made this
                transition, I got really into making my server run very smoothly, adding and tuning plug-ins to give
                players a fun experince and give my server unique features. I wasn't doing any full on coding at that
                point, but through some configuration files for plugins I was able to add some new items and crafting recipes in.
                This balanced gameplay and made my server unqiue. Once I was in high school, I took AP CSA and learned some basic Java.
                Realizing how much fun computer science was and how broad the field was, I knew I wanted to do CS and I applied to
                all of my prospective colleges as a CS major.
              </h2>
            </div>
            <div className="background-mygrey about-desc rounded-xl align-baseline p-4">
              <h1 className="text-2xl sm:text-4xl text-center mb-3">My Interests Outside of Computer Science</h1>
              <h2 className='text-justify text-md sm:text-lg indent-6'>
                <p>
                  While this website is dedicated to showcasing my life from the lens of computer science, I really
                  believe in the necessity of living a balanced life. One of my biggest personal hobbies is fitness, and I
                  make sure to get to the gym six times a week (typically in the mornings before class). This time is very
                  important to me, as it allows me to focus my mind entirely on something that has nothing to do with my
                  academic pursuits. Going to the gym has always been a time for me to relax, and focus on discipling my
                  mind and body. I have been an athelete my entire life, so keeping this side of me through college is
                  something I have been very serious about, as it is a large part of my identity.
                </p>
                <p>
                  As a Connecticut native, I have always loved the outdoors. I am very fortunate that around my town there
                  are a number of open-spaces and reserves, and though the years it has remained one of my favorite
                  activities to go on a walk through these beautiful areas (The cover-photo of this website was taken on
                  one such walk). Protecting and respecting these spaces means a lot to me, and is something I certinaly
                  want to get more involed with later in life. Nature always fascinates me with a deep beauty that I feel
                  we have a responsiblity to protect.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className='justify-center flex'>
          <div className="photo-section">
            <h1 className="sm:text-7xl text-5xl text-center font-normal pb-4">Some of My Favorite Photos</h1>
            <div className="about-desc-flex">
              <DisplayImg source="./images/Highlights/IMG_0010.jpg" location="Fairfield, CT" />
              <DisplayImg source="./images/Highlights/IMG_2251.jpg" location="Fairfield, CT" />
            </div>
            <div className="about-desc-flex">
              <DisplayImg source="./images/Highlights/IMG_0360.jpg" location="Barryville, NY" />
              <DisplayImg source="./images/Highlights/IMG_0071.jpg" location="Stratton, VT" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center font-normal">Built by Thomas Walewski</h3>
        </div>
      </div >
    </div >
  )
}
