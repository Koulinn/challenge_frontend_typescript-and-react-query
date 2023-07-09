import React, { useMemo, useState } from 'react';

// Types
import { VulnerabilityDataType } from 'types/VulnerabilitiesTypes';

// Custom hook to separate UI elements from the logical components
function useSearch(vulnerabilities: VulnerabilityDataType[] | undefined) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [severityValue, setSeverityValue] = useState<string>('');

    // Could add debounce here or change to blur
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSeverity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSeverityValue(e.target.value);
    };

    // Avoid unnecessary computation (if there are multiple re render events caused by other props, parents components)
    const filteredData = useMemo(
        () =>
            vulnerabilities?.filter((vulnerability: any) => {
                const regexName = new RegExp(searchValue, 'i');
                const regexSeverity = new RegExp(severityValue, 'i');
                return (
                    vulnerability.name.match(regexName) &&
                    vulnerability.severity.match(regexSeverity)
                );
            }),
        [vulnerabilities, searchValue, severityValue]
    );

    return {
        filteredData,
        handleSearch,
        handleSeverity,
    };
}

export default useSearch;
