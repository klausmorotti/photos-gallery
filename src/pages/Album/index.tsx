import { Container } from "./styles";

// IMAGES AND ICONS
import ImageIcon from '../../assets/galeria.png';
import LupaIcon from '../../assets/lupa.png';

// HOOKS
import { useNavigate, useParams } from "react-router-dom";
import { useAlbum } from "../../contexts/ContextAlbum";
import { useEffect, useState } from "react";

// API
import { api } from "../../api/api";

// TYPES
import { PhotoType } from "../../types/PhotoType";
import { PhotoItem } from "../../components/PhotoItem";

export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const { stateAlbum } = useAlbum();

    useEffect(() => {

        const request = async () => {
            let response = await api.getData(`albums/${stateAlbum.id}/photos`);
            setPhotos(response);
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
                        <img src={ImageIcon} alt="Ícone Pasta" />
                        <p>Adicionar Foto</p>
                    </div>
                </div>

            </header>

            <article>

                { photos.map((item) => (
                    <PhotoItem key={item.id} data={item} />
                )) }

            </article>

        </Container>
    )
}