// COMPONENTS
import { Router } from "./Router";

import { AlbumProvider } from "./contexts/ContextAlbum";

const App = () => {
  return (
    <AlbumProvider>

      <Router />

    </AlbumProvider>
  )
}

export default App;