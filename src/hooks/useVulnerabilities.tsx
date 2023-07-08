import { useQuery } from '@tanstack/react-query';

import mockData from '../mockData/vulnerabilities.json';
import VulnerabilitiesType from '../types/VulnerabilitiesTypes';

const mockAPI = (): Promise<VulnerabilitiesType> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockData);
        }, 700);
    });

function useVulnerabilities() {
    return useQuery({
        queryKey: ['vulnerabilitites'],
        queryFn: async () => {
            const data = await mockAPI();

            return data;
        },
        onError: (err: any) => {
            console.log(err, 'err');
        },
    });
}

export default useVulnerabilities;
