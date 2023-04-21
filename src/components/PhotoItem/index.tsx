import { Container } from "./styles";

// TYPES
import { PhotoType } from "../../types/PhotoType";

// PROPS
type PhotoItemProps = {
    data: PhotoType;
}

export const PhotoItem = ( {data}: PhotoItemProps ) => {

    return (
        <Container>

            <div className="imageArea">
                <img src={data.thumbnailUrl} alt="Foto" />
            </div>
            <p>{data.title}</p>

        </Container>
    )
}