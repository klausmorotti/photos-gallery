import { Container } from "./styles";
 
import GalleryIcon from '../../../favicon.png';

// PROPS
type AlbumItemProps = {
    data: AlbumsType;
}

// HOOKS
import { Link } from "react-router-dom";
import { useAlbum } from "../../contexts/ContextAlbum";
import { AlbumData } from "../../contexts/ContextAlbum";
import { AlbumsType } from "../../types/AlbumsType";

export const AlbumItem = ( {data}: AlbumItemProps ) => {
    const { setStateAlbum } = useAlbum();

    const setAlbum = () => {
        setStateAlbum({
            type:AlbumData.setAlbum,
            payload:{
                title:data.title,
                id:data.id
            }
        })
    }

    return (
        <Container onClick={ setAlbum }>

            <Link to={`/${data.title}`}>
                <div className="imageArea">
                    <img src={GalleryIcon} alt="Imagem Álbum" />
                </div>
                <h3>{data.title}</h3>
            </Link>

        </Container>
    )
}