//github

const gitHubApi = "https://api.github.com/users/abhhhishhhek"

const fetchData = async()=>{
     const res = await fetch(gitHubApi)
     const jsonData = await res.json()
     console.log(jsonData);
}

fetchData()