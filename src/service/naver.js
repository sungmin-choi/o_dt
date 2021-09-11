const axios = require('axios');

class NaverBlog {
    constructor(){
        this.URL=encodeURI('https://openapi.naver.com/v1/search/blog.json?query=강문+오듯+보일링&display=99');
        this.config={
            method: 'get',
            url: this.URL,
            headers: { 
              'Content-Type': 'application/json; charset=UTF-8', 
              'X-Naver-Client-Id': '6Rw4ylzf2TxYieTJVDVQ', 
              'X-Naver-Client-Secret': 'yI02MVz7zy',
            }
        }

    }
    getBlog(){
            const promise = new Promise((resolve,reject)=>{
                const response=axios(this.config).then((response)=>response.data.items);
                setTimeout(()=>{
                    resolve(response)
                },2000)
            })
            
            promise.then(items=>{
                return items;
            }).catch(error=>{
                return error;
            });
    }
}

export default NaverBlog