import axios from 'axios'
import qs from 'qs'
const url = 'http://blds.zwjk.com/api/frontend/';
export default (_url, obj) => axios.post(url + _url, qs.stringify(obj)).then(d => d.data)