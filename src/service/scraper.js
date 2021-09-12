const axios = require("axios");
const cheerio =require('cheerio');


async function getHTML() {
    try {
      return await axios.get("https://search.naver.com/search.naver?where=blog&sm=tab_viw.blog&query=%EA%B0%95%EB%AC%B8%EB%96%A1%EA%B0%88%EB%B9%84&nso=");
    } catch (error) {
      console.error(error);
    }
   }


function getData(){
  let dataList=[];
  getHTML()
    .then(html=>{
      const $ = cheerio.load(html.data);
      const bodyList = $("ul.lst_total").children("li.bx");
      let dataList=[];
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
  });
  return dataList;
}

module.exports={getData};
