import { createBrowserRouter } from 'react-router-dom';

import routesChildren from './routesChildren';

import { CustomSpinner } from 'components/atoms';

import App from 'App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: CustomSpinner,
        children: routesChildren,
    },
]);

export default router;
