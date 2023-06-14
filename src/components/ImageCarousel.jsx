import classes from '../components/modules/home.module.css';
import { Carousel } from 'antd';
import imageOne from '../assets/images/slider-badag.jpg';
import imageTwo from '../assets/images/slider-badging.jpg';
import imageThree from '../assets/images/slider-scale.jpg';
import imageFour from '../assets/images/slider-scales.jpg';

const ImageCarousel = () => {
	return (
		<Carousel className={classes.carousel}>
			<div>
				<img
					src={imageOne}
					alt=''
				/>
			</div>
			<div>
				<img
					src={imageTwo}
					alt=''
				/>
			</div>
			<div>
				<img
					src={imageThree}
					alt=''
				/>
			</div>
			<div>
				<img
					src={imageFour}
					alt=''
				/>
			</div>
		</Carousel>
	);
};

export default ImageCarousel;
