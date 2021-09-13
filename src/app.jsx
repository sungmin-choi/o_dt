
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
    fetch('http://localhost:3001/api')
    .then(res=>res.json())
    .then(data=>setBlogData(data));
  },[])
  return (
    <>
    <header>
    <Header/>
    </header>
    <Home/>
    <DivideLine title={`메 뉴`}/>
    <Menu/>
    <DivideLine title={`매장 소개`}/>
    <Introduce Kakao={Kakao}/>
    <DivideLine title={`블로그`}/>
    <Blog blogData={blogData}/>
    <Footer/>
    </>
  );
}

export default App;
