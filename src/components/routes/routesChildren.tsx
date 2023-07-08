import { CustomSpinner } from 'components/atoms';
import { About, Home } from 'components/pages';

const routesChildren = [
    {
        path: '',
        element: <Home />,
        loader: CustomSpinner,
    },
    {
        path: 'about',
        element: <About />,
        loader: CustomSpinner,
    },
];

export default routesChildren;
