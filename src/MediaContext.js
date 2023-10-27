import React, {useContext, useState} from 'react'
const MediaContext = React.createContext({})
export function useMediaContext() {
    return useContext(MediaContext);
}

export function MediaProvider({ children }) {
    const [filteredTitle, setFilteredTitle] = useState('');

    const sendTitle = (title) => {
        setFilteredTitle(title);
    };

    return (
        <MediaContext.Provider value={{ filteredTitle, sendTitle }}>
            {children}
        </MediaContext.Provider>
    );
}