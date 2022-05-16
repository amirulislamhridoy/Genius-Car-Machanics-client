import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    
    return (
        <footer>
            <p className='text-center mt-5 text-danger'> &#169; {year} Copy write warning.</p>
        </footer>
    );
};

export default Footer;