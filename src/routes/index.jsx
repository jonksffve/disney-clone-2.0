import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root';
import Index from '../pages/IndexView';

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
				element: '',
			},
			{
				path: 'detail/:id',
				element: '',
			},
		],
	},
]);
