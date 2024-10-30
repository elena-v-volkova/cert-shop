import React from 'react';

const Heading = ({ level, headingText }) => {
    const Tag = `h${level}`;
    return <Tag>{headingText}</Tag>;
};

export default Heading;