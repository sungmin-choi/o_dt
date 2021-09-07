
import './app.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/homeScreen/home';
import DivideLine from './components/divideLine/divideLine';
import Introduce from './components/introduce/introduce';
import Reservation from './components/reservation/reservation';
import Menu from './components/menu/menu';
function App({Kakao}) {
  return (
    <>
    <header>
    <Header/>
    </header>
    <Home/>
    <DivideLine title={`음식점 예약`}/>
    <Reservation/>
    <DivideLine title={`메 뉴`}/>
    <Menu/>
    <DivideLine title={`매장 소개`}/>
    <Introduce Kakao={Kakao}/>
    <Footer/>
    </>
  );
}

export default App;
