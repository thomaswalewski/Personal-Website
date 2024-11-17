import './displayimg.css'

export default function DisplayImg(props) {
    return (
        <div className='p-2'>
            <div className='img-wrapper'>
                <img src={props.source} width="100%" className='displayimg' />
                <h1 class="img-desc font-extrabold">{props.location}</h1>
            </div>
        </div >)
}