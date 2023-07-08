import React from 'react';

import { Input } from '@chakra-ui/react';
import { InputTextsTypes } from 'types/InputTypes';



function InputTexts(props: InputTextsTypes) {
    return <Input {...props} />;
}

export default InputTexts;
