import React from 'react';

// Spinner
import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';

// WrappedComponent = CollectionsOverview/Shop Page || CategoryPage
// otherProps = match(router)
const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        // Spinner
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        // Shop Page || Category Page
        <WrappedComponent {...otherProps} />
    );
}

export default withSpinner;