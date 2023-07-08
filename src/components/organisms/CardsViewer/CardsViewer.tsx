import { SimpleGrid } from '@chakra-ui/react';
import { VulnerabilityCard } from 'components/molecules';
import React from 'react';
import VulnerabilitiesType from 'types/VulnerabilitiesTypes';

function CardsViewer(props: { cards: VulnerabilitiesType }) {
    return (
        <SimpleGrid minChildWidth="320px" spacing="32px">
            {props.cards.data.map((vulnerability) => (
                <VulnerabilityCard vulnerability={vulnerability} />
            ))}
        </SimpleGrid>
    );
}

export default CardsViewer;
