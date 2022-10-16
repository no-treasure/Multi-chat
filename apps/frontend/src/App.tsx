import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useStore } from "@nanostores/react"

import { LoginPage, NotFoundPage, RootPage } from "@multi-chat/frontend/pages"
import { Layout } from "@multi-chat/frontend/components"
import { isLoggedInAtom } from "@multi-chat/frontend/stores"

const App = () => {
  const isLoggedIn = useStore(isLoggedInAtom)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isLoggedIn ? (
          <>
            <Route index element={<RootPage />} />
            <Route path=":folderName" element={<RootPage />} />
            <Route path="contacts" element={<RootPage />} />
            <Route path="settings" element={<RootPage />} />
          </>
        ) : (
          <Route path="login" element={<LoginPage />} />
        )}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
