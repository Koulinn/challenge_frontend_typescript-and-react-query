import { useQuery } from '@tanstack/react-query';

import VulnerabilitiesType from '../types/VulnerabilitiesTypes';

const getVulnerabilities = async (): Promise<VulnerabilitiesType> => {
    const results = await fetch(
        'https://raw.githubusercontent.com/Koulinn/data-sets/main/vulnerabilities.json'
    );

    return await results.json();
};

function useVulnerabilities() {
    return useQuery({
        queryKey: ['vulnerabilities'],
        queryFn: async () => {
            const data = await getVulnerabilities();

            return data;
        },
        onError: (err: any) => {
            console.log(err, 'err');
        },
    });
}

export default useVulnerabilities;
