import { Container } from "./styles";

// IMAGES AND ICONS
import FolderIcon from '../../assets/folder.png';
import LupaIcon from '../../assets/lupa.png';

// HOOKS
import { useEffect, useState } from "react";

// TYPES 
import { PhotoType } from "../../types/PhotoType";

// API
import { api } from "../../api/api";

// COMPONENTS
import { AlbumsType } from "../../types/AlbumsType";
import { AlbumItem } from "../../components/AlbumItem";

export const Albums = () => {
    const [albums, setAlbums] = useState<AlbumsType[]>([]);

    useEffect(() => {

        const request = async () => {
            let response = await api.getData('albums');
            setAlbums(response);
        }
        request();

    }, [])

    return (
        <Container>
            
            <header>

                <div className="actionsMenu">
                    <div className="searchAlbum">
                        <input type="search" placeholder="Procurar Álbum"/>
                        <img src={LupaIcon} alt="Imagem Lupa" />
                    </div>
                    <div className="newAlbum">
                        <img src={FolderIcon} alt="Ícone Pasta" />
                        <p>Novo Álbum</p>
                    </div>
                </div>

            </header>

            <article>

                { albums.map((item) => (
                    <AlbumItem key={item.id} data={item} />
                )) }

            </article>

        </Container>
    )
}