import { getLoc,showGif } from "./api.js"
import { temp_req, conditions_req, loading_component, humidity_req, cloudCover_req, precip_request, toggle_element, toggle } from "./query_selector.js";
export const fetchData = () => {
    const user_input = document.querySelector('#search-bar');
    const search = document.querySelector('.search-button');
    const loading_component = document.querySelector('#loading_component');
    // const condition_value = conditions_req.textContent;
    search.addEventListener('click', () => {
        loading_component.classList.add('loader');
        getLoc(user_input.value);
        
    })
}

export function text_index() {
    if (conditions_req.textContent.includes("Overcast")) {
        showGif('rain')
        // ("it's gonna rain")
    }
    else if (conditions_req.textContent.includes("cloudy")) {
        showGif("cloud")
        // ("it's cloudy")
    } else if (conditions_req.textContent.includes("Windy")) {
        showGif("Wind")
        // ("it's cloudy")
    } else if (conditions_req.textContent.includes("Clear")) {
        showGif("sun")
        // ("it's sunny")
    }
}

export function getToggle() {
    toggle_element.addEventListener('click', () => {
        const Switch = document.querySelector('#switch');
        Switch.classList.toggle('move')

        
        const f_value = (temp_req.textContent)
        if (!isNaN(f_value)) {
            temp_req.innerHTML = `Error`
            return;
        } else if (f_value !== "") {
            // check for toggle state
            if (toggle.classList == 'move') {
                tempCelsius(f_value);

            } else {
                tempFarenheit(f_value)
            };

        }
            
          
    })};

function tempCelsius(value) {
    const C_number = value.replace(/[^0-9.-]/g, '');
    const numberTemp = parseFloat(C_number);
    let result = (numberTemp - 32) * 5 / 9;
    result = result.toFixed(1) 
    temp_req.innerHTML = `${result} °C`;
    
} 

function tempFarenheit(value) {
    const F_number = value.replace(/[^0-9.-]/g, '');
    const numberTemp = parseFloat(F_number);
    let result = (numberTemp * 9/5) + 32
    result = result.toFixed(1);
    temp_req.innerHTML = `${result} F`
    // (value)
}

