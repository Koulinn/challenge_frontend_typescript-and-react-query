import React from 'react';

import { ErrorMessages } from 'components/molecules';
import { CustomSpinner } from 'components/atoms';

function HandleApiStatus(props: {
    status: 'loading' | 'error';
    errorData?: any; // I wouldn't use type any for this
}) {
    const isLoading = props.status === 'loading';

    if (isLoading) {
        return <CustomSpinner />;
    } else {
        return <ErrorMessages errorData={props.errorData} />;
    }
}

export default HandleApiStatus;
