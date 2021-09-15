
import './app.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/homeScreen/home';
import DivideLine from './components/divideLine/divideLine';
import Introduce from './components/introduce/introduce';
import Menu from './components/menu/menu';
import Blog from './components/blog/blog';
import { useEffect, useState } from 'react';

function App({Kakao}) {
  const [blogData,setBlogData]=useState([]);
  useEffect(()=>{
    fetch('https://odtserver.herokuapp.com/api')
    .then(res=>res.json())
    .then(data=>setBlogData(data));
  },[])
  return (
    <>
    <header>
    <Header/>
    </header>
    <Home/>
    <div className="" id="menuPos">
    <DivideLine title={`메 뉴`}/>
    </div>
    <Menu/>
    <div className="" id="introducePos">
    <DivideLine title={`매장 소개`}/>
    </div>
    <Introduce Kakao={Kakao}/>
    <div className="" id="blogPos">
    <DivideLine title={`블로그`}/>
    </div>
    <Blog blogData={blogData}/>
    <Footer/>
    </>
  );
}

export default App;
