import { _url, timeout } from "../config/url";

export async function getAmenity(){
    let url = _url.server + _url.apiAmenity; 
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return timeout(fetch(url, {
        method: 'GET',
        headers: header,
    }).then(res => res.json()));
}