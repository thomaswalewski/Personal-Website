'use client'
import './photos.css'
import '../style.css'
import NavBar from '../components/nav/nav'
import DisplayImg from '../components/DisplayImg/displayimg'
import '../stylet.css'


export default function photos() {

    return (
        <div>
            <NavBar></NavBar>
            <div className="photos-back">
                <h1 className="sm:text-7xl text-5xl text-center font-normal pb-4">My Favorite Photos</h1>
                <h2 className="text-md sm:text-2xl text-center font-normal pb-4 sm:w-4/6">
                    I think photography has been a great way for me to practice gratitude during some special moments in my life.
                </h2>
                <div className='sm:flex items-top justify-center'>
                    <div className='sm:w-1/2 2xl:flex'>
                        <div className='2xl:w-1/2'>
                            <DisplayImg source="./images/Highlights/IMG_0010.jpg" location="Fairfield, CT" />
                            <DisplayImg source="./images/Highlights/IMG_2251.jpg" location="Fairfield, CT" />
                            <DisplayImg source="./images/Highlights/Benderson.jpg" location="Sarasota, FL" />
                            <DisplayImg source="./images/Highlights/Night-sky-NH.jpg" location="Gorham, NH" />
                        </div>
                        <div className='2xl:w-1/2'>
                            <DisplayImg source="./images/Highlights/Fireworks-Start.jpg" location="Fairfield, CT" />
                            <DisplayImg source="./images/Highlights/Beach-Sunrise.jpg" location="Fairfield, CT" />
                            <DisplayImg source="./images/Highlights/Sagrada-Familia-Wall.jpg" location="Barcelona, Spain" />
                            <DisplayImg source="./images/Highlights/Basin.jpg" location="Franconia, NH" />
                            <DisplayImg source="./images/Highlights/Bird.jpg" location="Fairfield, CT" />
                        </div>
                    </div>
                    <div className='sm:w-1/2 2xl:flex'>
                        <div className='2xl:w-1/2'>
                            <DisplayImg source="./images/Highlights/Sagrada-Familia-Ceiling-1.jpg" location="Barcelona, Spain" />
                            <DisplayImg source="./images/Highlights/Me-Cortina.jpg" location="Cortina d'Ampezzo, Italy" />
                            <DisplayImg source="./images/Highlights/IMG_0360.jpg" location="Barryville, NY" />
                            <DisplayImg source="./images/Highlights/Dianas-Baths.jpg" location="North Conway, NH" />
                        </div>
                        <div className='2xl:w-1/2'>
                            <DisplayImg source="./images/Highlights/Dolomites-Base.jpg" location="Cortina d'Ampezzo, Italy" />
                            <DisplayImg source="./images/Highlights/Fireworks-Mid.jpg" location="Fairfield, CT" />
                            <DisplayImg source="./images/Highlights/Rialto.jpg" location="Venice, Italy" />
                            <DisplayImg source="./images/Highlights/Dolomites-Forest.jpg" location="Cortina d'Ampezzo, Italy" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center font-normal pt-2">Built by Thomas Walewski</h3>
                </div>
            </div>
        </div>
    )
}