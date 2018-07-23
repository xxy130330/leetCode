var longUrl = "http://www.leetcode.com/faq/?id=10";
var storage = [];
var pair = {};
pair.shortUrl;
pair.longUrl;

encode(longUrl);



function encode (inputUrl){
  var flag = true;
  // console.log(checkStorage());
  // if(checkStorage(storage, longUrl)){


  var lastSlash = inputUrl.lastIndexOf('/');
  var lastPart = inputUrl.slice(lastSlash +1);
  pair.longUrl = inputUrl;
  // if(storage.indexOf(pair[longUrl]) == -1){
  //   storage.push(pair);
  // }
  for(var i=0; i<storage.length; i++){
    if(storage[i].longUrl == inputUrl){
      flag = false
    }
  }
  if(flag){
    do{
      var sixDigits = generateUrl();
    }
    while(!check(sixDigits));
    var shortUrl = 'https://' + lastPart + '/' + sixDigits;
    pair.shortUrl = shortUrl;
    storage.push(pair);

  }

  return shortUrl;

}

function generateUrl(){
  var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var outputStr = '';
  for(var i=0; i<6; i++){
    outputStr += str[Math.floor(Math.random()*str.length)];
  }
  return outputStr;
}

function check(str){
  var db = [];
  if(db.indexOf(str) == -1){
    db.push(str);
    return true;
  }else{
    return false;
  }
}

decode(encode(longUrl));

function decode(url){
  var short = url;
  for(var i=0; i<storage.length; i++){
    if(storage.shortUrl == short){
      var target = storage[i];
    }
  }

  return target.longUrl;
}
