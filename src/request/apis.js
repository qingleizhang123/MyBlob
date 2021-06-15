import axios from './$http'
import base from './base'

const apis = {
  getArticle () {
    return axios.get(`${base.url}/api/article`)
  }
}

export default apis
