import React from 'react';

// constants
import { apiMessages } from 'lib/constants';

// We can handle custom error messages and capture errors as well
function ErrorMessages(props: any) {
    return <div>{apiMessages.generalError}</div>;
}

export default ErrorMessages;
