import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <>
            <footer className="bg-violet-100 p-4 text-center grid grid-cols-2 gap-1">
                <div>
                    <p className="flex text-left">
                        Desarrollado con <BsHeartFill className="text-red-500 ml-1" />
                    </p>
                    <p className="text-left">By: Vrilli Castro</p>
                </div>
                <div className="text-right">
                    <a href="https://www.linkedin.com/in/vrilli-castro-rodriguez-37584822a/" target="_blank" rel="noopener noreferrer" className="inline-block mr-2 text-blue-600">
                        <BsLinkedin className='w-auto h-8' />
                    </a>
                    <a href="https://github.com/Vrilli" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <BsGithub className='w-auto h-8' />
                    </a>
                    <p>© 2024 - Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
