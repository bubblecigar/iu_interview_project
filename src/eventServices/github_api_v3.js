import axios from 'axios';

const githubAPI = {
  getReposByUser(user, page, perpage, sort = 'full_name') {
    return axios.get(
      `https://api.github.com/users/${user}/repos?page=${page}&per_page=${perpage}&sort=${sort}`
    )
  },
  searchUser(user, page, perpage) {
    return axios.get(
      `https://api.github.com/search/users?q=${user}&page=${page}&per_page=${perpage}`
    )
  },
  getByDirectUrl(url) {
    return axios.get(url)
  }
}

export default githubAPI;
