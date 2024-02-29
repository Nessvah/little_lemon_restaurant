import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import brand from "./styles/brand";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "@fontsource/markazi-text";
import "@fontsource/karla";
import "./App.css";


function App() {
  return (
    <ChakraProvider resetCSS theme={brand}>
      <Navbar />
      <Routes>
        {/*index path - the component to go to*/}
        <Route path="/" element={<Home />} />
        <Route path={"/reservations"} element={<Reservations />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
