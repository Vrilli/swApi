import { useState, useEffect } from 'react';

interface SwapiItem {
    name: string;
    id: number;
}

interface SwapiData {
    films: SwapiItem[];
    characters: SwapiItem[];
    starships: SwapiItem[];
}

const useSwapiData = () => {
    const [data, setData] = useState<SwapiData>({ films: [], characters: [], starships: [] });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [films, characters, starships] = await Promise.all([
                fetch('https://swapi.dev/api/films/').then(res => res.json()),
                fetch('https://swapi.dev/api/people/').then(res => res.json()),
                fetch('https://swapi.dev/api/starships/').then(res => res.json())
            ]);

            setData({
                films: films.results.map((item: any, index: number) => ({ name: item.title, id: index + 1 })),
                characters: characters.results.map((item: any, index: number) => ({ name: item.name, id: index + 1 })),
                starships: starships.results.map((item: any, index: number) => ({ name: item.name, id: index + 1 }))
            });
            setLoading(false);
        };

        fetchData();
    }, []);

    const fetchItemById = async (category: string, id: number) => {
        const response = await fetch(`https://swapi.dev/api/${category}/${id}/`);
        return await response.json();
    };

    return { data, loading, fetchItemById };
};

export default useSwapiData;
