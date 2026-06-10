function launchBrowser(){
    let browserName="safari";
    if(browserName=="chrome")
    {
        console.log("Chrome")
    }
    else 
    {
      console.log("other browser")
    }
}
launchBrowser();

function runTests(){
    let testType="sanity";
    switch(testType){
        case"smoke":
            console.log("Smoke test");
            break;
            case "sanity":
                 console.log("Sanity test");
            break;
             case "regression":
                 console.log("regression test");
            break;
             default:
                console.log("no tests");
    }
}
runTests();