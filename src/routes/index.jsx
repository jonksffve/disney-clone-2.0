import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		//errorElement: '',
		children: [
			{
				index: true,
				element: '',
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
