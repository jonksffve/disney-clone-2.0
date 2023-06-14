import classes from '../components/modules/index.module.css';
import logoOne from '../assets/images/cta-logo-one.svg';
import logoTwo from '../assets/images/cta-logo-two.png';
import { signInGoogle } from '../api/authAPI';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-slice';

const IndexView = () => {
	const dispatch = useDispatch();

	const loginHandler = async () => {
		const response = await signInGoogle();
		const { displayName: name, email, photoURL: photo } = response.user;
		dispatch(
			userActions.loginUserState({
				name,
				email,
				photo,
			})
		);
	};

	return (
		<section className={classes.section}>
			<div className={classes.content}>
				<div>
					<img
						src={logoOne}
						alt=''
					/>
					<button
						type='button'
						onClick={loginHandler}
					>
						get all there!
					</button>
					<p>
						Get premium access to any movies and series for an
						additional fee with a Disney+ subscription. As of today
						07/06/2023, I really don't know how much it costs. Have
						fun!
					</p>
					<img
						src={logoTwo}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default IndexView;
