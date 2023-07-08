import React from 'react';

import { CardsViewer, HandleApiStatus } from 'components/organisms';
import Hero from 'components/organisms/Hero/Hero';
import useVulnerabilities from 'hooks/useVulnerabilities';

function Home() {
    const { data, status } = useVulnerabilities();
    const notSuccess = status !== 'success';

    if (notSuccess) {
        return <HandleApiStatus status={status} />;
    }

    return (
        <div>
            <Hero />
            {status === 'success' && <CardsViewer cards={data} />}
        </div>
    );
}

export default Home;
