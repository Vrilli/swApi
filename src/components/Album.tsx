import React, { useState } from 'react';
import useSwapiData from '../useSwapiData';


const MiAlbum: React.FC = () => {
    const { data, loading, fetchItemById } = useSwapiData();
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const handleItemClick = async (category: string, id: number) => {
        const itemData = await fetchItemById(category, id);
        setSelectedItem(itemData);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const renderSection = (items: any[], category: string) => (
        <div>
            <h2 className="text-xl font-bold mb-2">{category}</h2>
            <div className="grid grid-cols-5 gap-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 border bg-gray-200 cursor-pointer"
                        onClick={() => item ? handleItemClick(category.toLowerCase(), item.id) : null}
                    >
                        {item ? (
                            <div>
                                <p><strong>ID:</strong> {item.id}</p>
                                <p><strong>Nombre:</strong> {item.name}</p>
                            </div>
                        ) : (
                            <p><strong>ID:</strong> {index + 1}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mi Álbum</h1>
            {renderSection(data.films, 'Películas')}
            {renderSection(data.characters, 'Personajes')}
            {renderSection(data.starships, 'Naves')}

            {selectedItem && (
                <div className="mt-6 p-4 border bg-white">
                    <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
                    <div><strong>ID:</strong> {selectedItem.id}</div>
                    <div><strong>Detalles:</strong> <pre>{JSON.stringify(selectedItem, null, 2)}</pre></div>
                </div>
            )}
        </div>
        
    );
};

export default MiAlbum;
