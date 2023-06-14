import classes from '../modules/navbar.module.css';
import MainLogo from '../../assets/images/logo.svg';
import { AiFillStar, AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { BiSearch, BiRadio } from 'react-icons/bi';
import { RiMovie2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Navbar = () => {
	const user = useSelector((state) => state.user);

	return (
		<nav className={classes.navbar}>
			<div>
				<a href='#'>
					<img
						src={MainLogo}
						alt=''
					/>
				</a>
			</div>

			{!user.loggedIn && (
				<Fragment>
					<div>
						<button>Login</button>
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
							src=''
							alt=''
						/>
						<span>Sign out</span>
					</div>
				</Fragment>
			)}
		</nav>
	);
};

export default Navbar;
