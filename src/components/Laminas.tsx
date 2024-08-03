import React, { useState, useEffect } from 'react';
import useSwapiData from '../useSwapiData';
import { Link } from 'react-router-dom';

interface SwapiItem {
    name: string;
    id: number;
}

const Laminas: React.FC = () => {
    const { data, loading } = useSwapiData();
    const [activePack, setActivePack] = useState<number | null>(null);
    const [disabledPacks, setDisabledPacks] = useState<number[]>([]);
    const [times, setTimes] = useState<number[]>([0, 0, 0, 0]);
    const [packs, setPacks] = useState<SwapiItem[][]>([[], [], [], []]);
    const [album, setAlbum] = useState<SwapiItem[]>([]);
    const [handledItems, setHandledItems] = useState<SwapiItem[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimes(times.map(time => (time > 0 ? time - 1 : 0)));
        }, 1000);

        return () => clearInterval(interval);
    }, [times]);

    useEffect(() => {
        if (data.films && data.characters && data.starships) {
            generatePacks();
        }
    }, [data]);

    const generatePacks = () => {
        const newPacks: SwapiItem[][] = [[], [], [], []];
        for (let i = 0; i < 4; i++) {
            const isFirstConfig = Math.random() < 0.5;
            if (isFirstConfig) {
                newPacks[i] = [
                    ...getRandomItems(data.films, 1),
                    ...getRandomItems(data.characters, 3),
                    ...getRandomItems(data.starships, 1)
                ];
            } else {
                newPacks[i] = [
                    ...getRandomItems(data.characters, 3),
                    ...getRandomItems(data.starships, 2)
                ];
            }
        }
        setPacks(newPacks);
    };

    const getRandomItems = (array: SwapiItem[], count: number) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const openPack = (index: number) => {
        if (activePack === null && !disabledPacks.includes(index)) {
            setActivePack(index);
            setDisabledPacks([...disabledPacks, index]);
            setTimes(times.map((time, i) => (i === index ? 60 : time)));

            setTimeout(() => {
                setActivePack(null);
                setDisabledPacks(disabledPacks.filter(pack => pack !== index));
            }, 60000);
        }
    };

    const addToAlbum = (item: SwapiItem) => {
        setAlbum([...album, item]);
        setHandledItems([...handledItems, item]);
    };

    const discardItem = (itemId: number) => {
        setHandledItems([...handledItems, ...packs[activePack as number].filter(item => item.id === itemId)]);
    };

    const isInAlbum = (itemId: number) => {
        return album.some(item => item.id === itemId);
    };

    const allItemsHandled = () => {
        return packs[activePack as number].every(item => handledItems.includes(item));
    };

    const discardPack = () => {
        setActivePack(null);
        setHandledItems([]);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold mb-4">Obtener Láminas</h1>
                <Link to="/home" className='text-xl font-bold hover:bg-gray-300 p-3'>Volver al Home</Link>
                <button className='text-xl font-bold hover:bg-gray-300 p-3'><Link to="/">Cerrar Sesion</Link></button>
            </div>

            <div className="flex space-x-4 justify-center items-center pt-40">
                {packs.map((pack, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => openPack(index)}
                            className={`p-4 border ${disabledPacks.includes(index) ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded`}
                            disabled={disabledPacks.includes(index)}
                        >
                            Sobre {index + 1}
                        </button>
                        {disabledPacks.includes(index) && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded">
                                {Math.floor(times[index] / 60)}:{times[index] % 60}
                            </div>
                        )}
                        {activePack === index && (
                            <div className="mt-4">
                                {pack.map((item, i) => (
                                    <div key={i} className="p-2 border mb-2">
                                        <div>
                                            {item.name} (ID: {item.id})
                                        </div>
                                        <div>
                                            {isInAlbum(item.id) ? (
                                                <button
                                                    onClick={() => discardItem(item.id)}
                                                    className="mt-2 p-2 bg-red-500 text-white rounded"
                                                >
                                                    Descartar
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => addToAlbum(item)}
                                                    className="mt-2 p-2 bg-green-500 text-white rounded"
                                                >
                                                    Agregar al álbum
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {allItemsHandled() && (
                                    <button
                                        onClick={discardPack}
                                        className="mt-2 p-2 bg-red-500 text-white rounded"
                                    >
                                        Descartar Sobre
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Laminas;
