import { Route, Routes } from "react-router-dom";
import { AddressPage } from "./pages/AddressPage/AddressPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/address" element={<AddressPage />}/>
      </Routes>
    </>
  );
}

export default App;
