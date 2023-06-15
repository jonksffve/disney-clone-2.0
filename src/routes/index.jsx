import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root';
import Index from '../pages/IndexView';
import Home from '../pages/HomeView';
import Detail from '../pages/DetailView';

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
				path: 'home/:id',
				element: <Detail />,
			},
		],
	},
]);
