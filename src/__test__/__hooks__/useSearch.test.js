// Packages
import { act, renderHook } from '@testing-library/react';

// Custom hook
import useSearch from 'hooks/useSearch';

const mockData = [
    {
        uuid: '37bd4bf4-ffbb-36a6-af33-20062c1f43a7',
        name: 'Outdated PHP',
        severity: 'HIGH',
        category: 'Generic',
        description:
            'Sed illo et deleniti nihil consequatur. Aut dignissimos aut vel. Minima facilis harum saepe quo molestias dolor consequatur. Fugiat et quis quam et delectus.',
        remediation:
            'Ea sit iste quia rem quisquam qui. Qui dignissimos id animi veritatis quibusdam saepe est. Consequatur quisquam asperiores ipsa illo in.',
        exploit_available: 1,
        cvss_score: 2.4,
        cvss3_score: 5.8,
        cves: [
            'Nulla tempora voluptatem et delectus. Aspernatur sit voluptatum quia aperiam. Autem aliquid quas ut animi vel ipsam minima.',
            'Qui vero aliquid ducimus saepe. Repudiandae aspernatur quaerat quo excepturi. Et amet et accusamus voluptas sit nihil consequatur. Aut eum unde rem quibusdam.',
        ],
        external_links: [
            {
                url: 'https://hirthe.com/cumque-aliquid-iure-saepe-non.html',
                title: 'See Also',
            },
            {
                url: 'http://www.hamill.com/accusamus-et-quaerat-nulla-sed-accusantium-consequatur',
                title: 'See Also',
            },
        ],
        nessus_plugin_family:
            'Voluptatum voluptatibus eius ut quia occaecati iure voluptatum atque. Autem quibusdam iusto id consequatur veniam. Voluptatibus in nihil atque molestiae. Voluptatem labore rerum aut.',
        nessus_plugin_id: null,
        created_at: '2023-01-30 15:44:05',
        updated_at: '2023-01-30 15:44:05',
        deleted_at: null,
        additional_affected_asset_fields: [
            'Ms. Dolores McCullough MD',
            'Mrs. Aglae Lindgren DDS',
            'Alexzander Romaguera',
        ],
        record_to_remove: null,
    },
    {
        uuid: '1b286949-de0e-3425-9116-b5451bd36520',
        name: 'Vulnerable WordPress version',
        severity: 'MEDIUM',
        category: 'Generic',
        description:
            'Est et quia possimus recusandae quaerat autem voluptatem. Rerum doloremque laboriosam sit rerum. Illo tenetur delectus aut aut velit harum commodi.',
        remediation:
            'Adipisci quis molestiae eveniet. Quo necessitatibus commodi voluptatem sunt qui. Dolor accusamus laudantium omnis impedit id.',
        exploit_available: 1,
        cvss_score: 9.9,
        cvss3_score: 6.8,
        cves: [
            'Praesentium et facere id et aut. Quidem accusamus itaque eos ullam soluta dolorum. Necessitatibus ducimus ea aut commodi.',
            'Quibusdam deleniti non aspernatur reprehenderit odio. Vitae repellendus ut sit qui sint. Pariatur porro maiores ut. Nesciunt id numquam adipisci sint est aut. In dolorum est qui rem pariatur.',
        ],
        external_links: [
            {
                url: 'http://www.kemmer.com/',
                title: 'See Also',
            },
            {
                url: 'http://www.hane.net/molestias-voluptatibus-et-in-in-quas-unde-mollitia',
                title: 'See Also',
            },
        ],
        nessus_plugin_family:
            'Magnam molestias et voluptas dolorem sequi est. Magnam culpa consequuntur non ipsum. Ea incidunt qui et est eos iure est.',
        nessus_plugin_id: null,
        created_at: '2023-01-30 15:44:05',
        updated_at: '2023-01-30 15:44:05',
        deleted_at: null,
        additional_affected_asset_fields: [
            'Mrs. Lea Kerluke IV',
            'Mrs. Queen McClure II',
            'Elza Schuster',
        ],
        record_to_remove: null,
    },
    {
        uuid: '24573fce-e0f0-33de-85a2-bcfe204249b9',
        name: 'Apache 2.0 is super vulnerable',
        severity: 'LOW',
        category: 'Generic',
        description:
            'Blanditiis doloribus quia ullam ad. Omnis corporis asperiores veritatis. Nihil sed fugit aut iure harum voluptas quia.',
        remediation:
            'Aut aperiam perferendis est sit ipsa et sit. Veritatis nihil velit sed corrupti ut nostrum. Nisi aliquam et id voluptas.',
        exploit_available: 1,
        cvss_score: 5.4,
        cvss3_score: 7.3,
        cves: [
            'Quo aspernatur in ut voluptatem quod ex. Adipisci non ducimus veniam ut. Voluptas quasi ut consequuntur sint odit. Molestiae molestiae eligendi quos dolore.',
            'Animi harum ipsa sint non repellendus. Ut repellat dolorem non maxime delectus. Expedita officia modi et a facilis nihil.',
        ],
        external_links: [
            {
                url: 'http://miller.com/voluptas-ea-non-in-aut-non',
                title: 'See Also',
            },
            {
                url: 'https://farrell.com/veniam-maiores-non-omnis-deleniti-aut-neque-minima.html',
                title: 'See Also',
            },
        ],
        nessus_plugin_family:
            'Perferendis dolor ipsum laboriosam hic est omnis. Ratione quod cum eveniet animi dolor reprehenderit veniam. Aliquam sed vel suscipit vero itaque. Culpa maxime id vero.',
        nessus_plugin_id: null,
        created_at: '2023-01-30 15:44:05',
        updated_at: '2023-01-30 15:44:05',
        deleted_at: null,
        additional_affected_asset_fields: [
            'Cassie Dibbert',
            'Donavon Torp DVM',
            'Major Schulist',
        ],
        record_to_remove: null,
    },
];

test('Test useSearch without any search parameter', () => {
    const { result } = renderHook(() => useSearch(mockData));
    const totalItems = result.current.filteredData.length;

    expect(totalItems).toBe(3);
});

test('Test useSearch with searchValue by name', () => {
    const { result } = renderHook(() => useSearch(mockData));

    act(() => {
        result.current.handleSearch({ target: { value: 'Outdated PHP' } });
    });

    const totalItems = result.current.filteredData.length;
    expect(totalItems).toBe(1);
});

test('Test useSearch by severity', () => {
    const { result } = renderHook(() => useSearch(mockData));

    act(() => {
        result.current.handleSeverity({ target: { value: 'HIGH' } });
    });

    const totalItems = result.current.filteredData.length;
    expect(totalItems).toBe(1);
});

test('Test useSearch by severity and by name with a valid item in the Array', () => {
    const { result } = renderHook(() => useSearch(mockData));

    act(() => {
        result.current.handleSeverity({ target: { value: 'HIGH' } });
        result.current.handleSearch({ target: { value: 'PHP' } });
    });

    const totalItems = result.current.filteredData.length;
    expect(totalItems).toBe(1);
});

test('Test useSearch by severity and by name without a match in the array', () => {
    const { result } = renderHook(() => useSearch(mockData));

    act(() => {
        result.current.handleSeverity({ target: { value: 'Low' } });
        result.current.handleSearch({ target: { value: 'PHP' } });
    });

    const totalItems = result.current.filteredData.length;
    expect(totalItems).toBe(0);
});
