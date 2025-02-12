import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/typography.css';
import AuctionPage from './pages/AuctionPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/auction" element={<AuctionPage />} />
      </Routes>
    </>
  )
}

export default App