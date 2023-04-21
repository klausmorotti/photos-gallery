import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

import GalleryIcon from '../../../favicon.png';

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <Container>
            
            <header>

                <div className="navigationMenu">
                    <h2 onClick={ () => navigate('/') }>Meus Álbuns</h2> / <h2 onClick={ () => navigate(-1) }>{params.album}</h2> / <h2>{params.photo}</h2>
                </div>

            </header>

            <div className="photoArea">
                <img src={GalleryIcon} alt="Imagem Galeria" />
            </div>

        </Container>
    )
}