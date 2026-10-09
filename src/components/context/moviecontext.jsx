import { createContext, useContext, useEffect, useState } from "react";

export const moviecontext = createContext();

export function Movieprovider({ children }) {
    const [favorites, setFavorites] = useState(()=>{
        const storedfav=localStorage.getItem('favorites')

        return storedfav? JSON.parse(storedfav)
        :([])
    });
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (movie) => {
        const alreadyExists = favorites.some((fav) => fav.id === movie.id);
        if (alreadyExists) return;
        setFavorites([...favorites, movie]);
    };

    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    };

    return (
        <moviecontext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </moviecontext.Provider>
    );
}

export const useMovieContext = () => {
    return useContext(moviecontext);
};