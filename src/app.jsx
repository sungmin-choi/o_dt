
import './app.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/homeScreen/home';
import DivideLine from './components/divideLine/divideLine';
import Introduce from './components/introduce/introduce';
import Menu from './components/menu/menu';
import Blog from './components/blog/blog';
import { useEffect, useState } from 'react';
const cheerio =require('cheerio');
function App({Kakao,scraper}) {
  const [blogData,setBlogData]=useState();
  useEffect(()=>{
    scraper.getHTML()
    .then(html=>{
      let dataList = [];
      const $ = cheerio.load(html.data);
      const bodyList = $("ul.lst_total").children("li.bx");
  
      bodyList.each(function(i, elem) {
          dataList[i] = {
            title: $(this)
              .find("a.total_tit")
              .text(),
          description:$(this)
          .find("div.dsc_txt")
          .text(),
          link:$(this)
          .find("a.total_tit")
          .attr("href"),
          img:$(this)
          .find("img.thumb")
          .attr("src")
          
          };
        });
        return dataList;
  });
  },[scraper])
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
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
