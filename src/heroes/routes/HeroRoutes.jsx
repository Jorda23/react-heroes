import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPages, HeroPages , SearchPages} from '../pages';

export const HeroRoutes = () => {
  return (
    <>
        <Navbar />
        
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPages />} />

                <Route path="search" element={<SearchPages />} />
                <Route path="hero/:id" element={<HeroPages />}/>

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>
    </>
  )
}
