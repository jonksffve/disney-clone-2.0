import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root';
import Index from '../pages/IndexView';
import Home from '../pages/HomeView';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		//errorElement: '',
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'detail/:id',
				element: '',
			},
		],
	},
]);
