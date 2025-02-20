import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/typography.css';
import './styles/slider.css'
import AuctionPage from './pages/AuctionPage';
import TopCollectionPage from './pages/TopCollectionPage';
import TopCollectionPixacio from './pages/TopCollectionPixacio';
import NFTdetailpixacio from './pages/NFTdetailpixacio';
import TopSellerPage from './pages/TopSellerPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/top-Collection" element={<TopCollectionPage />} />
        <Route path="/pixacio-page" element={<TopCollectionPixacio />} />
        <Route path="/NFTdetail" element={<NFTdetailpixacio />} />
        <Route path="/top-seller-page" element={<TopSellerPage />} />




      </Routes>
    </>
  )
}

export default App