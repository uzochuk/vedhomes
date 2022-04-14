import axios from 'axios'
export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async  (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '5bdad8f2dfmsh34704c138307303p1df871jsn538b24a23f7f'
        }
    })

    return data;
}