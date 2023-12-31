import React, { useState } from 'react';

// Components
import { SimpleGrid } from '@chakra-ui/react';
import { VulnerabilityCard } from 'components/molecules';

// Types
import { VulnerabilityDataType } from 'types/VulnerabilitiesTypes';

import VulnerabilityModal from '../VulnerabilityModal/VulnerabilityModal';

function CardsViewer(props: { cards: VulnerabilityDataType[] | undefined }) {
    const [vulnerabilityCard, setVulnerabilityCard] =
        useState<VulnerabilityDataType | null>(null);

    return (
        <SimpleGrid minChildWidth="320px" spacing="32px">
            {props.cards?.map((vulnerability) => (
                <VulnerabilityCard
                    key={vulnerability.uuid}
                    vulnerability={vulnerability}
                    setVulnerabilityCard={setVulnerabilityCard}
                />
            ))}
            {vulnerabilityCard !== null && (
                <VulnerabilityModal
                    vulnerabilityCard={vulnerabilityCard}
                    setVulnerabilityCard={setVulnerabilityCard}
                />
            )}
        </SimpleGrid>
    );
}

export default CardsViewer;
