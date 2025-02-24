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
import ArtistProfileSetting from './pages/ArtistProfileSetting';
import SellMethodPage from './pages/SellMethodPage';
import CreateNFT from './pages/CreateNFT';

const App = () => {
  return (
    <>
      <Routes>

        {/* Route: Home Page / Lading Pag */}
        <Route path="/" element={<Home />} />

        {/* Route: Not Found Page*/}
        <Route path="*" element={<NotFound />} />


        {/* Route: Home Page / Lading Pag */}
        <Route path="/auction" element={<AuctionPage />} />


        {/* Route: Home Page / Lading Pag */}
        <Route path="/top-Collection-page" element={<TopCollectionPage />} />


        {/* Route: Home Page / Lading Pag */}
        <Route path="/pixacio-page" element={<TopCollectionPixacio />} />


        {/* Route: Home Page / Lading Pag */}
        <Route path="/NFTdetail" element={<NFTdetailpixacio />} />


        {/* Route: Home Page / Lading Pag */}
        <Route path="/top-seller-page" element={<TopSellerPage />} />

        

        {/* Route: Home Page / Lading Pag */}
        <Route path="/seller-collection-page" element={<SellerCollectionPage />} />



        {/* Route : Create NFT   */}
        <Route path="/create-nft" element={<CreateNFT />} />


        {/* Route : Create NFT Page  */}
        <Route path="/create-nft-page" element={<CreateNFTpage />} />



        {/* Route: Artist Profile Page */}
        <Route path="/artist-profile-page" element={<ArtistProfilePage />} />



        {/* Route: Artist Profile Page Setting */}
        <Route path="/artist-profile-page-setting" element={<ArtistProfileSetting />} />


        {/* Route: Sell Method Page */}
        <Route path="/sell-method-page" element={<SellMethodPage />} />



      </Routes>
    </>
  )
}

export default App