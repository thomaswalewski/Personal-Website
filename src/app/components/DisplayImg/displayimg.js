import './displayimg.css'

export default function DisplayImg(props) {
    return (
        <div className='img-holder'>
            <div className='img-wrapper'>
                <img src={props.source} width="100%" className='displayimg' />
                <h1 class="img-desc font-extrabold text-4xl md:text-5xl xl:text-7xl">{props.location}</h1>
            </div>
        </div>)
}