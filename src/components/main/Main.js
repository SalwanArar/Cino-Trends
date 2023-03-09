import StartButton from './StartButton.js';
import bannerVideo from '../../assets/videos/banner.mp4';
import './Main.css';

function Main() {
    return (
        <main>
            <video
            className='main-video'
            autoPlay loop muted
            about='Introduction video of our work'>
                <source src={bannerVideo} type='video/mp4'/>
                Your browser does not support HTML5 video.
            </video>
            <div className='main-content-container'>
                <h1>Everything You Need To Create Your Stunning & Creative Animation Videos.</h1>
                <StartButton />
            </div>
        </main>
    );
}

export default Main; 