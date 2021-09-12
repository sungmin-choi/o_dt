const express = require('express');
const app = express();
const port =process.env.PORT || 3001;
const axios = require("axios");
const cheerio = require('cheerio');
const cors=require('cors');


app.use(cors());
app.use('/api',(req,res)=>{
    let url = 'https://search.naver.com/search.naver?where=blog&sm=tab_viw.blog&query=%EA%B0%95%EB%AC%B8%EB%96%A1%EA%B0%88%EB%B9%84&nso=';
    const getHTML=async ()=> {
        try {
          return await axios.get(url);
        } catch (error) {
          console.error(error);
        }
    }

    
    getHTML().then(html=>{
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
          return res.json(dataList);
 });
});

app.listen(port,()=>{
    console.log(`express is running on ${port}`)
})