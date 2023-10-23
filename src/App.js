import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Tabs from './Components/Tabs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Liquidity from './Components/Liquidity';
import AddLiquidity from './Components/AddLiquidity';
import NFT from './Components/NFT';
import CreatePool from './Components/CreatePool';
import CreatePool2 from './Components/CreatePool2'
import Profile from './Components/Profile';
import CreatePoolNew from './Components/CreatePoolNew';
import Farm from './Components/Farm';
import { sidebarstore } from './Components/Action/action'
import { useSelector, useDispatch } from 'react-redux'
import StakePool from './Components/StakePool';

function App() {
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <div className='middle_section'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/swap" element={<Tabs />} />
            <Route path="/Pool" element={<Liquidity />} />
            <Route path="/Addliquidity" element={<AddLiquidity />} />
            <Route path="/Farm" element={<Farm />} />
            <Route path="/NFT" element={<NFT />} />
            <Route path="/Staking" element={<CreatePool />} />
            <Route path="/Createpool" element={<CreatePool2 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/CreatePools" element={<CreatePoolNew />} />
            <Route path="/StakeCreate" element={<StakePool/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
