import classes from './modules/home.module.css';
import imageOne from '../assets/images/viewers-disney.png';
import videoOne from '../assets/videos/disney.mp4';
import imageTwo from '../assets/images/viewers-marvel.png';
import videoTwo from '../assets/videos/marvel.mp4';
import imageThree from '../assets/images/viewers-national.png';
import videoThree from '../assets/videos/national-geographic.mp4';
import imageFour from '../assets/images/viewers-pixar.png';
import videoFour from '../assets/videos/pixar.mp4';
import imageFive from '../assets/images/viewers-starwars.png';
import videoFive from '../assets/videos/star-wars.mp4';

const Viewers = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<img
					src={imageOne}
					alt=''
				/>
				<video
					src={videoOne}
					playsInline={true}
					autoPlay={true}
					loop={true}
					muted={true}
				/>
			</div>
			<div className={classes.wrapper}>
				<img
					src={imageTwo}
					alt=''
				/>
				<video
					src={videoTwo}
					playsInline={true}
					autoPlay={true}
					loop={true}
					muted={true}
				/>
			</div>
			<div className={classes.wrapper}>
				<img
					src={imageThree}
					alt=''
				/>
				<video
					src={videoThree}
					playsInline={true}
					autoPlay={true}
					loop={true}
					muted={true}
				/>
			</div>
			<div className={classes.wrapper}>
				<img
					src={imageFour}
					alt=''
				/>
				<video
					src={videoFour}
					playsInline={true}
					autoPlay={true}
					loop={true}
					muted={true}
				/>
			</div>
			<div className={classes.wrapper}>
				<img
					src={imageFive}
					alt=''
				/>
				<video
					src={videoFive}
					playsInline={true}
					autoPlay={true}
					loop={true}
					muted={true}
				/>
			</div>
		</div>
	);
};

export default Viewers;
