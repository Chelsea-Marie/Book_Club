import React from 'react';

const Footer = ({ children }) => {
    return (
        <div style={{
            backgroundColor: '#D3D3D3',
            color: 'grey',
            padding: '100px',
        }}>
            <span>Copyright 2023</span>
            <span>Created by : Chelsea Pederson & Chris Lee</span>
            {children}
        </div>
    );
};

export default Footer;