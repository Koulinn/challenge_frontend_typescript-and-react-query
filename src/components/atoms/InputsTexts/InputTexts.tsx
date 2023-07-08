import React from 'react';

//Packages
import { Input } from '@chakra-ui/react';

// Types
import { InputTextsTypes } from 'types/InputTypes';

function InputTexts(props: InputTextsTypes) {
    return <Input {...props} />;
}

export default InputTexts;
