
const apikey ="0b2bdeda43b5688921839c8ecb20399b"


//搜索
function search() {

}

//登录
function login() {
  
}

//添加购物车

module.exports={
  search,
  login,
  movie250: `https://api.douban.com/v2/movie/top250?apikey=${apikey}`,
  moviehot:`https://api.douban.com/v2/movie/in_theaters?apikey=${apikey}`,
  fenlei:'https://w3cteching.gitee.io/applet_interface/fenlei.json'

}