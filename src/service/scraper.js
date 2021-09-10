import axios from "axios";
import { Cheerio } from "cheerio";

async function getHTML() {
    try {
      return await axios.get("https://place.map.kakao.com/453150489");
    } catch (error) {
      console.error(error);
    }
  }

getHTML().then(html=>{
    let title=[];
    const $=Cheerio.load(html.data);
    const bodyTitle = $("h2.tit_location");
    return bodyTitle;
}).then(res=>console.log(res));