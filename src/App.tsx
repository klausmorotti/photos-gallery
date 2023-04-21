// COMPONENTS
import { Router } from "./Router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { AlbumProvider } from "./contexts/ContextAlbum";

const App = () => {
  return (
    <AlbumProvider>

      <Header />

      <Router />

    </AlbumProvider>
  )
}

export default App;