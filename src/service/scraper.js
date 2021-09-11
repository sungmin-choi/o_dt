const axios = require("axios");


class Scraper{
  async getHTML() {
    try {
      return await axios.get("https://search.naver.com/search.naver?where=blog&sm=tab_viw.blog&query=%EA%B0%95%EB%AC%B8%EB%96%A1%EA%B0%88%EB%B9%84&nso=");
    } catch (error) {
      console.error(error);
    }
   }
}

export default Scraper
