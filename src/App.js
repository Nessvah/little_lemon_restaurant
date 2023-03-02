import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import brand from "./styles/brand";
import "@fontsource/markazi-text";
import "@fontsource/karla";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider resetCSS theme={brand}>
      <AlertProvider>
        <main>
          <Navbar />
          <Routes>
            {/*index path - the component to go to*/}
            <Route path="/" element={<Home />} />
            <Route path={"/reservations"} element={<Reservations />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Routes>
          <Footer />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
