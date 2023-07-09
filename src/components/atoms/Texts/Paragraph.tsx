import React from 'react';
import { Text } from '@chakra-ui/react';

function Paragraph(props: { children: string | number; isBold?: boolean }) {
    return <Text as={props.isBold ? 'b' : 'p'}>{props.children}</Text>;
}

export default Paragraph;
