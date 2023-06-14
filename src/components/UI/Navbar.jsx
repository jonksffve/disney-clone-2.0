import classes from '../modules/navbar.module.css';
import MainLogo from '../../assets/images/logo.svg';
import { AiFillStar, AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { BiSearch, BiRadio } from 'react-icons/bi';
import { RiMovie2Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { signInGoogle, logoutUser } from '../../api/authAPI';
import { userActions } from '../../store/user-slice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../helpers/firebaseConfig';
import { ROUTE_HOME, ROUTE_INDEX } from '../../helpers/routes';

const Navbar = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (curUser) => {
			if (curUser) {
				const { displayName: name, email, photoURL: photo } = curUser;
				dispatch(
					userActions.loginUserState({
						name,
						email,
						photo,
					})
				);
				navigate(ROUTE_HOME);
			} else {
				navigate(ROUTE_INDEX);
			}
		});
	}, [dispatch, navigate]);

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

	const logoutHandler = async () => {
		await logoutUser();
		dispatch(userActions.logoutUserState());
	};

	return (
		<nav className={classes.navbar}>
			<div>
				<Link to={ROUTE_HOME}>
					<img
						src={MainLogo}
						alt=''
					/>
				</Link>
			</div>

			{!user.loggedIn && (
				<Fragment>
					<div>
						<button onClick={loginHandler}>Login</button>
					</div>
				</Fragment>
			)}

			{user.loggedIn && (
				<Fragment>
					<div>
						<ul className={classes['link-container']}>
							<li className={classes['link-item']}>
								<Link to={''}>
									<AiFillHome />
									<span>home</span>
								</Link>
							</li>
							<li className={classes['link-item']}>
								<Link to={''}>
									<BiSearch />
									<span>search</span>
								</Link>
							</li>
							<li className={classes['link-item']}>
								<Link to={''}>
									<AiOutlinePlus />
									<span>watchlist</span>
								</Link>
							</li>
							<li className={classes['link-item']}>
								<Link to={''}>
									<AiFillStar />
									<span>originals</span>
								</Link>
							</li>
							<li className={classes['link-item']}>
								<Link to={''}>
									<RiMovie2Line />
									<span>movies</span>
								</Link>
							</li>
							<li className={classes['link-item']}>
								<Link to={''}>
									<BiRadio />
									<span>series</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className={classes.signout}>
						<img
							src={user.photo}
							alt='User profile picture'
						/>
						<span onClick={logoutHandler}>Sign out</span>
					</div>
				</Fragment>
			)}
		</nav>
	);
};

export default Navbar;
