const btn1 = document.querySelector('#button1');
const inp1 = document.querySelector('#input1');
const content_box = document.querySelector('#cont1');
var bod = document.querySelector('body');

btn1.addEventListener('click', (e)=>{
    let inp_val = inp1.value;
    //If the input is not given check
    if(inp_val.length===0)
    {
        alert('Please fill the place/city');
    }
    //when the text to be appended in the div 
    if(inp_val!=="")
    {
        var url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=e7f5a647b8a40eaf25f369db72f23479') 
        var search_params = url.searchParams;
        search_params.set('q', inp_val);
        fetch(url)
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
                let place = document.createElement('p');
                place.innerHTML = '<p id="para1"></p>';
                content_box.prepend(place);
                place.append(data.name);
                content_box.append(place);
                place.innerHTML+="<br>";
                var date1 = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
                place.append(date1);
                content_box.append(place);
                place.innerHTML+="<br>";
                content_box.append(place);
                place.innerText+="Temperature : ";
                var temp1 = data.main.temp;
                temp1 = temp1 - 273.00;
                place.append(Math.round(temp1),"°C");
                content_box.append(place);
                place.innerHTML+="<br>";
                place.innerText+="Humidity : "
                place.append(data.main.humidity,"%");
                content_box.append(place);
                place.innerHTML+="<br>";
                place.innerText+="";
                place.append(Math.round(data.main.temp_min - 273.00),"°C",' (min)');
                content_box.append(place);
                place.innerText+="/";
                place.append(Math.round(data.main.temp_max - 273.00),"°C",' (max)');
                content_box.append(place);
                place.innerHTML+="<br>";
                content_box.append(place);
                place.append(data.weather[0].description);
                content_box.append(place);
                place.innerHTML+="<br>";
                place.append(Math.round(data.wind.speed*1.852),'km/h');
                content_box.append(place);
                var image = document.createElement('img');
                image.src = "";
                var pl = data.weather[0].description;
                if(pl.toLowerCase().indexOf('cloud')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1473445730015-841f29a9490b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('clear')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('haze')!==-1 || pl.toLowerCase().indexOf('mist')!==-1 || pl.toLowerCase().indexOf('fog')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1507369512168-9b7de6ec6be6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('rain')!==-1 || pl.toLowerCase().indexOf('drizzle')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('snow')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    //when text is already appended
    if(inp_val!=="" && content_box.length>0)
    {
        var url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=e7f5a647b8a40eaf25f369db72f23479') 
        var search_params = url.searchParams;
        search_params.set('q', inp_val);
        fetch(url)
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
                let place = document.createElement('p');
                place.innerHTML = '<p id="para1"></p>';
                content_box.prepend(place);
                place.append(data.name);
                content_box.append(place);
                place.innerHTML+="<br>";
                var date1 = new Date().toLocaleDateString('en-in', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
                place.append(date1);
                content_box.append(place);
                place.innerHTML+="<br>";
                content_box.append(place);
                place.innerText+="Temperature : ";
                var temp1 = data.main.temp;
                temp1 = temp1 - 273.00;
                place.append(Math.round(temp1),"°C");
                content_box.append(place);
                place.innerHTML+="<br>";
                place.innerText+="Humidity : "
                place.append(data.main.humidity,"%");
                content_box.append(place);
                place.innerHTML+="<br>";
                place.innerText+="";
                place.append(Math.round(data.main.temp_min - 273.00),"°C",' (min)');
                content_box.append(place);
                place.innerText+="/";
                place.append(Math.round(data.main.temp_max - 273.00),"°C",' (max)');
                content_box.append(place);
                place.innerHTML+="<br>";
                content_box.append(place);
                place.append(data.weather[0].description);
                content_box.append(place);
                place.innerHTML+="<br>";
                place.append(Math.round(data.wind.speed*1.852),'km/h');
                content_box.append(place);
                var pl = data.weather[0].description;
                if(pl.toLowerCase().indexOf('cloud')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1473445730015-841f29a9490b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('clear')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('haze')!==-1 || pl.toLowerCase().indexOf('mist')!==-1 || pl.toLowerCase().indexOf('fog')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1507369512168-9b7de6ec6be6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('rain')!==-1 || pl.toLowerCase().indexOf('drizzle')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
                else if(pl.toLowerCase().indexOf('snow')!==-1)
                {
                    bod.style.backgroundImage = "url('https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80')";
                    bod.style.backgroundRepeat = "none";
                }
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    //refresh when text is already appended in the div 
    else
    {
        content_box.innerHTML = "";
    }
})