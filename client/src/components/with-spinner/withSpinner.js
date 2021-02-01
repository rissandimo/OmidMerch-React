import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';

const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        // Spinner
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        // Shop Page
        <WrappedComponent {...otherProps} />
    )
}

export default withSpinner;