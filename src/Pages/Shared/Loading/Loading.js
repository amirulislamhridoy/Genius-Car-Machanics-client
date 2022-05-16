import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className=" fs-1 w-100 text-center">
            <Spinner animation="border" variant="primary" />
            {/* <h1>Loading...</h1> */}
        </div>
    );
};

export default Loading;