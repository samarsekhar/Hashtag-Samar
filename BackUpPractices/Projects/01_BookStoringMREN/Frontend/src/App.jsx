import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBooks from "./Pages/CreateBooks";
import ShowBook from "./Pages/ShowBook";
import EditBook from "./Pages/EditBook";
import DeleteBook from "./Pages/DeleteBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;