import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


const Home: React.FC = () => {
    return (
        <>
            <div
                className="p-6"
                style={{
                    backgroundImage: 'url("https://galaxiastarwars.wordpress.com/wp-content/uploads/2015/04/cropped-puuerhquwef08qw1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.9,
                }}
            >
                <h1 className="text-2xl font-bold mb-4 text-center text-white">
                    Bienvenid@ a tu álbum de Star Wars
                </h1>
            </div>
            <NavBar />

            <div className='px-6 pt-10 flex flex-col justify-center items-center text-lg min-h-screen'>
                <p>
                    En nuestra página web, puedes sumergirte en el fascinante universo de Star Wars a través de un álbum digital de láminas coleccionables.
                    Aquí, puedes explorar y visualizar láminas de tus personajes, naves y planetas favoritos de Star Wars.
                </p>

                <h1 className='text-2xl font-semibold py-5'>Cómo usar la página web:</h1>

                <ul>
                    <li><strong>Navegación:</strong> Utiliza el menú de navegación para explorar las secciones de láminas y álbum.</li>
                    <li><strong>Agregar al Álbum:</strong> Haz clic en el botón de agregar para incluir una lámina en tu álbum personal.</li>
                    <li><strong>Ver Detalles:</strong> Selecciona una lámina para ver más información y detalles adicionales.</li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Home;
