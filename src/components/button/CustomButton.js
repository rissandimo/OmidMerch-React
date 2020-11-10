import React from 'react';

import { Button } from '@material-ui/core';

const CustomButton = ({ text }) => (
    <Button variant="outlined" color="primary">
        {text}
    </Button>   
)

export default CustomButton;