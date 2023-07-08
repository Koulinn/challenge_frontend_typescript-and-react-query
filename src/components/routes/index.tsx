// Packages
import { createBrowserRouter } from 'react-router-dom';

// Children routes
import routesChildren from './routesChildren';

// Components
import { CustomSpinner } from 'components/atoms';

//Pages
import App from 'App';
import { Error400 } from 'components/pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: CustomSpinner,
        errorElement: <Error400 />,
        children: routesChildren,
    },
]);

export default router;
