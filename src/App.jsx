import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;