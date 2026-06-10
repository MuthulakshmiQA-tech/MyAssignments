// scoping-visibility or accessibility of the variable

/* global scope - can be declared anywhere in the script but outside the block
   block scoped- variable is declared within the block {}
   function scoped- variable declared with in the function  */

//let browserVersion="Chrome";
function getBrowserVersion()
{
    if(true){
        let browserVersion1="chrome";
        let browserVersion2="Edge";
        //console.log("Chrome browser");
        console.log(browserVersion2);
    }
    
    console.log(browserVersion1)//error since let is accessed outside block
}
//console.log(browserVersion);// error since var is accessed outside the function
getBrowserVersion();

