// HOOKS
import React, { createContext, useContext, useReducer } from "react";

// TYPES
import { ActionsReducerType } from "../types/ActionReducer";

export const ContextAlbum = createContext<ContextType | undefined>(undefined);

type ContextType = {
    stateAlbum: initialDataType;
    setStateAlbum: (action: ActionsReducerType) => void;
}

const initialData = {
    title:'',
    id:0
}
type initialDataType = {
    title:string;
    id:number;
} 

export enum AlbumData {
    setAlbum
}

type AlbumProviderType = {
    children:React.ReactNode;
}

const reducerAlbum = (stateAlbum: initialDataType, actionReducer:ActionsReducerType) => {
    switch(actionReducer.type) {
        case AlbumData.setAlbum:
            return {...stateAlbum, 
                title:actionReducer.payload.title,
                id:actionReducer.payload.id
            }
        default:
            return {...stateAlbum}
    }
}

export const AlbumProvider = ({children}: AlbumProviderType) => {
    const [stateAlbum, setStateAlbum] = useReducer(reducerAlbum, initialData);
    const value = { stateAlbum, setStateAlbum };

    return (
        <ContextAlbum.Provider value={value}>
            {children}
        </ContextAlbum.Provider>
    )
}

export const useAlbum = () => {
    let context = useContext(ContextAlbum);
    if( context === undefined ) {
        throw new Error('Os dados só podem ser acessados dentro do provider');
    } 
    
    return context;
}