import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		//errorElement: ''
	},
	{
		path: '/home',
		element: '',
	},
	{
		path: '/movies',
		element: '',
	},
]);
