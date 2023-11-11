import './not-found.css'

export default function NotFound() {
    return (
        <div className='notfound-back'>
            <div id="message">
                <h1 className='text-xl'>Page Not Found</h1>
                <p className='text-justify'>I haven't added this page yet, I guess you are ahead of me.</p>
                <a href="/">Back to Home Page</a>
            </div>
        </div >
    )
}