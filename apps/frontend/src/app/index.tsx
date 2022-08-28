import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Layout, RootPage } from "@multi-chat/frontend/pages"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RootPage />} />
          <Route path=":folderName" element={<RootPage />} />
          <Route path="contacts" element={<RootPage />} />
          <Route path="settings" element={<RootPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
