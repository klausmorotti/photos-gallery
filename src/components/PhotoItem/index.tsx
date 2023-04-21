import { Container } from "./styles";

// TYPES
import { PhotoType } from "../../types/PhotoType";

// PROPS
type PhotoItemProps = {
    data: PhotoType;
}

// HOOKS
import { Link, useParams } from "react-router-dom";

export const PhotoItem = ( {data}: PhotoItemProps ) => {
    const params = useParams();

    return (
        <Container>

            <Link to={`/${params.album}/${data.title}`}>
                <div className="imageArea">
                    <img src={data.thumbnailUrl} alt="Foto" />
                </div>
                <p>{data.title}</p>
            </Link>

        </Container>
    )
}