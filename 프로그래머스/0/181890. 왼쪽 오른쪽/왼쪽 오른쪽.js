function solution(str_list) {
    var answer = [];
    let locationL = str_list.indexOf('l')
    console.log(locationL)
    let locationR = str_list.indexOf('r')
    console.log(locationR)

   
    if (locationL<locationR){
        if(locationL == -1){
            return str_list.slice(locationR+1)
        }else{
             return str_list.slice(0,locationL)
        }       
    }
    else if(locationL>locationR){
        if(locationR == -1){
            return str_list.slice(0,locationL)
        }
        else{
        return str_list.slice(locationR+1)

        }
    }
    else{
        return []
    }
   
}