import styles from '@/App.module.css'
import {Route, Routes} from "react-router-dom";


import Header from '@/components/Layout/Header/Header.tsx'

import Home from "@/pages/Home.tsx";
import Catalog from "@/pages/Catalog.tsx";

import Login from "@/pages/Login";
import ProtectedRoute from "@/components/Route/ProtectedRoute";

function Admin() {
    return <h1>Admin Panel</h1>;
}

function App() {

  return (
    <>
        <div className={styles.App}>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />

                <Route path="/login" element={<Login />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>

    </>
  )
}

export default App
