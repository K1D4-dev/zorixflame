import styles from '@/App.module.css'
import {Route, Routes} from "react-router-dom";


import Header from '@/components/Layout/Header/Header.tsx'

import Home from "@/pages/Home.tsx";
import Catalog from "@/pages/Catalog.tsx";


function App() {

  return (
    <>
        <div className={styles.App}>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </div>

    </>
  )
}

export default App
