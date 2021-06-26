function anagrams (str1, str2 ){
    if ( str1.length !== str2.length ){
        return false;
    
    }
    let stringObj1 = {};
    let stringObj2 = {};
    for (let val of str1.split("")){
        stringObj1[val] = (stringObj1[val] || 0 ) + 1
    }
    for (let val of str2.split("")){
        stringObj2[val] = (stringObj2[val] || 0 ) + 1
    
    }
     
      for (let key in stringObj1 ){
          if ( !stringObj2[key] || stringObj1[key] !== stringObj2[key] ){
              return false
          }
          
      }
    return true
 }


 console.log(anagrams("pear", "reapo"))