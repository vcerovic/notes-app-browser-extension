import { MemoryRouter, Route, Routes } from "react-router-dom"
import NotesPage from "~note/pages/NotesPage"
import LogInPage from "~auth/pages/LogInPage"
import ProtectedPage from "~auth/pages/ProtectedPage"
import RegisterPage from "~auth/pages/RegisterPage"

import "~style.css"
import { AuthProvider } from "~auth/core/authContext"

const Popup = () => {
    return (
        <AuthProvider>
            <MemoryRouter>
                <Routes>
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route element={<ProtectedPage />}>
                        <Route path="/" element={<NotesPage />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        </AuthProvider>
    )
}

export default Popup