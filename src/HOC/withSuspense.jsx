import React from 'react';
import Preloader from '../components/preloader';

const withSuspense = (Component) => {

    return () => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Component />
            </React.Suspense>
        )
    }
}

export default withSuspense;