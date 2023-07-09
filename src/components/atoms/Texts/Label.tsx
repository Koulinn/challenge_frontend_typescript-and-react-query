import React from 'react';
import { Text } from '@chakra-ui/react';

function Label(props: { children: string }) {
    return <Text as={'b'}>{props.children}</Text>;
}

export default Label;
