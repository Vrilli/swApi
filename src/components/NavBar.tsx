import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <nav className='bg-violet-100'>
            <ul className="p-4 flex justify-center gap-12 font-bold text-3xl">
                <li><Link to="/get-stickers" className=' hover:bg-gray-300 p-3'>Láminas</Link></li>
                <li> <Link to="/my-album"  className=' hover:bg-gray-300 p-3'>Álbum</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
