// key = 234WUU7Q9XHXCCE8EKP524P42
import { temp_req, conditions_req,loading_component,humidity_req,cloudCover_req,precip_request } from "./query_selector.js";
import { text_index, tempCalc } from "./app.js"

// img elements
const condition_gif = document.querySelector('#condition-gif');

export async function getLoc(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=234WUU7Q9XHXCCE8EKP524P42`
      try {
          const response = await fetch(url, {mode: 'cors'});
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const msg = await response.json();
        

         const element = (value) => {
          return msg.currentConditions[value];
        }
  
        temp_req.innerHTML = `${element('temp')} F`
        precip_request.innerHTML = `${element('precipprob')} %`
        humidity_req.innerHTML = `${element('humidity')} %`
        cloudCover_req.innerHTML = `${element('cloudcover')} %`
        conditions_req.innerHTML = `${element('conditions')}`

        //text_indexing to show gif using the .includes('')
        text_index()
        if (temp_req.value != "") {
          loading_component.classList.remove('loader')
        }
      }  catch (error)  {
        console.error(error.message); 
      }
    

}

export async function showGif(value) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=KqnUMRcsuS1fjQhanrCxx0fSvto0SRg9&s=${value}`;
  try {
    const response = await fetch(url , {mode: 'cors'})
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const gif = await response.json();
    // console.log(gif.data.images.original.url);
    condition_gif.src = gif.data.images.original.url

    

  } catch (error) {
    console.error(error.message)
  }
}









    
 