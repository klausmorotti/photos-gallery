import { useRoutes } from "react-router-dom";

// COMPONENTS
import { Albums } from "./pages/Albums";
import { Album } from "./pages/Album";
import { Photo } from "./pages/Photo";

export const Router = () => {
    return useRoutes([
        { path:'/', element: <Albums /> },
        { path:'/:album', element: <Album /> },
        { path:'/:album/:photo', element: <Photo /> },
    ])
}