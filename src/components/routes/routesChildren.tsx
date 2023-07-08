import { CustomSpinner } from 'components/atoms';
import { Home } from 'components/pages';

const routesChildren = [
    {
        path: 'home',
        element: <Home />,
        loader: CustomSpinner,
    },
];

export default routesChildren;
