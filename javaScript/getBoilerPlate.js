const getData=async()=>{
    try{
        const response=await fetch('https://www.api-to-call.com/endpoint');
        if(response.ok){
            const jsonResponse=await response.json();
            //more code to work with jsonResponse
        }
        throw new Error("Request failed!");
    }catch(error){
        console.log(error);
    }
}