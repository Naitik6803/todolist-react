import React from 'react';

const Footer = () => {
    let footerStyle={
        position:"relative",
        top:"10vh",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; Mytodolist.com
            </p>
        </footer>
    );
};

export default Footer;