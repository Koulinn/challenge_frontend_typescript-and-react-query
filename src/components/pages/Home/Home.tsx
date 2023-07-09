import React from 'react';

// Packages
import { Box } from '@chakra-ui/react';

// Components
import { CardsViewer, HandleApiStatus } from 'components/organisms';
import Hero from 'components/organisms/Hero/Hero';
import { DropdownSelect, InputTexts, Texts } from 'components/atoms';

// Custom Hooks
import useVulnerabilities from 'hooks/useVulnerabilities';
import useSearch from 'hooks/useSearch';

// Constants
import { dropdownOptions } from 'lib/constants';

function Home() {
    const { data, status } = useVulnerabilities();
    const { handleSearch, handleSeverity, filteredData } = useSearch(
        data?.data
    );

    const notSuccess = status !== 'success';

    if (notSuccess) {
        return <HandleApiStatus status={status} />;
    }

    return (
        <div>
            <Hero />
            <Box marginBottom={'16'} maxWidth={'25%'}>
                <Texts.Label>Search:</Texts.Label>
                <InputTexts onChange={handleSearch}></InputTexts>
                <DropdownSelect
                    variant="flushed"
                    placeholder="Please select a severity"
                    onChange={handleSeverity}
                    options={dropdownOptions.SEVERITY_OPTIONS}
                />
            </Box>
            {status === 'success' && <CardsViewer cards={filteredData} />}
        </div>
    );
}

export default Home;
