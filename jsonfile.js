
//step01: Create an XHR object
//request has to be used in whole program
var request = new XMLHttpRequest();
//step:02: create a connection
//true : optional
request.open('GET', 'https://restcountries.com/v2/all', true);
//step:03: send a request
//push for the api to send request to server
request.send();
//step04 : once data successfully received from server
//http:200
request.onload = function(){
    //conversion of string to array of json objects...
    var data = JSON.parse(request.response);
    console.log(data);
   for(var i = 0; i < data.length; i++){
          var myDiv = document.createElement("div");
          myDiv.style.backgroundColor = "black";
          myDiv.style.color = "white";
          myDiv.innerHTML = "Name: "+data[i].name+ "    Region: " +data[i].region+ "    Sub-Region: " +data[i].subregion+ "    Population: " +data[i].population;
          var myFlag = document.createElement("img");
          myFlag.style.width = "200px";
          myFlag.style.height = "200px";
          myFlag.style.border = "1px solid black";
          myFlag.setAttribute("src", data[i].flags.png);
          console.log("Name: "+data[i].name + "    Region: " +data[i].region+ "    Sub-Region: " +data[i].subregion+ "    Population: " +data[i].population);
          document.body.appendChild(myDiv);
          document.body.appendChild(myFlag);
    } 
    
    
  // let res = data.filter((data) => data.population < 100000);
  // console.log(res.map((data) => data.name));
}