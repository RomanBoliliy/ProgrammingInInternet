class defaults{
constructor(mode, debugLevel, logFolder)
{
    this.mode = mode;
    this.debugLevel  = debugLevel;
    this.logFolder = logFolder;
}
}

class userSetting{
constructor(mode, debugLevel)
{
        this.mode = mode;
        this.debugLevel  = debugLevel;
}
}



function merge1(defaul, user) {
    return Object.assign({}, defaul, user);
}

function merge2(defaul, user) {
    var newset = new defaults;
    if(user.mode!=null)
    {
        newset.mode = user.mode;
    } 
    else{
        newset.mode = defaul.mode;
    }

    if(user.debugLevel!=null)
    {
        newset.debugLevel = user.debugLevel;
    }
    else{
        newset.debugLevel = defaul.debugLevel;
    }
    newset.logFolder = defaul.logFolder;

    return newset;
}

function merge3(defaul, user) {
    return { ...defaul, ...user };
}




var def = new defaults("test","error","root");
var user = new userSetting("production","trace");

console.log( merge1(def,user));
console.log( merge2(def,user));
console.log( merge3(def,user));