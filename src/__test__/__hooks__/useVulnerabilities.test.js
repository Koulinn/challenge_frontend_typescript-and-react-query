// Packages
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Custom hook
import useVulnerabilities from '../../hooks/useVulnerabilities';

const queryClient = new QueryClient({ retry: false });
const HooksWrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test('Test useVulnerabilities data', async () => {
    const { result } = renderHook(() => useVulnerabilities(), {
        wrapper: HooksWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
});
