import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/typography.css';
import './styles/slider.css'
import './styles/modal.css'
import AuctionPage from './pages/AuctionPage';
import TopCollectionPage from './pages/TopCollectionPage';
import TopCollectionPixacio from './pages/TopCollectionPixacio';
import NFTdetailpixacio from './pages/NFTdetailpixacio';
import TopSellerPage from './pages/TopSellerPage';
import SellerCollectionPage from './pages/SellerCollectionPage';
import CreateNFTpage from './pages/CreateNFTpage';
import ArtistProfilePage from './pages/ArtistProfilePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/top-Collection-page" element={<TopCollectionPage />} />
        <Route path="/pixacio-page" element={<TopCollectionPixacio />} />
        <Route path="/NFTdetail" element={<NFTdetailpixacio />} />
        <Route path="/top-seller-page" element={<TopSellerPage />} />
        <Route path="/seller-collection-page" element={<SellerCollectionPage />} />

        {/* Route : Create NFT Page  */}
        <Route path="/create-nft-page" element={<CreateNFTpage />} />

        {/* Route: Artist Profile Page */}
        <Route path="/artist-profile-page" element={<ArtistProfilePage />} />



      </Routes>
    </>
  )
}

export default App