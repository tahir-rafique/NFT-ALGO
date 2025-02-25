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
import ChooseCollection from './pages/ChooseCollection';
import CreatCollectionPage from './pages/CreatCollectionPage';
import CreateNFTCollectionPage from './pages/CreateNFTCollection';
import CreateNFTCollection from './pages/CreateNFTCollection';

const App = () => {
  return (
    <>
      <Routes>

        {/* Route: Home Page / Lading Pag */}
        <Route path="/" element={<Home />} />

        {/* Route: Not Found Page*/}
        <Route path="*" element={<NotFound />} />


        {/* Route: Auction Page */}
        <Route path="/auction" element={<AuctionPage />} />


        {/* Route: Top Collection Page */}
        <Route path="/top-Collection-page" element={<TopCollectionPage />} />


        {/* Route: Pixacio Page */}
        <Route path="/pixacio-page" element={<TopCollectionPixacio />} />


        {/* Route: NFT Detail Pixacio */}
        <Route path="/NFTdetail" element={<NFTdetailpixacio />} />


        {/* Route: Top Seller Page */}
        <Route path="/top-seller-page" element={<TopSellerPage />} />



        {/* Route: Seller Collection Page */}
        <Route path="/seller-collection-page" element={<SellerCollectionPage />} />



        {/* Route : Create NFT   */}
        <Route path="/create-nft" element={<CreateNFT />} />


        {/* Route : Create NFT Page  */}
        <Route path="/create-nft-page" element={<CreateNFTpage />} />

        {/* Route : Create Collection Page*/}
        <Route path="/create-collection-page" element={<CreatCollectionPage />} />

        {/* Route : Choose Collection */}
        <Route path="/choose-collection" element={<ChooseCollection />} />

        {/* Route : Create NFT Collection */}
        <Route path="/create-nft-collection" element={<CreateNFTCollection />} />



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