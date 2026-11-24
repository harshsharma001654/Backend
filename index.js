require('dotenv').config();

const express = require('express');
const app = express()
const port = 4000

const githubData={
  "login": "harshsharma001654",
  "id": 285939966,
  "node_id": "U_kgDOEQsY_g",
  "avatar_url": "https://avatars.githubusercontent.com/u/285939966?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshsharma001654",
  "html_url": "https://github.com/harshsharma001654",
  "followers_url": "https://api.github.com/users/harshsharma001654/followers",
  "following_url": "https://api.github.com/users/harshsharma001654/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshsharma001654/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshsharma001654/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshsharma001654/subscriptions",
  "organizations_url": "https://api.github.com/users/harshsharma001654/orgs",
  "repos_url": "https://api.github.com/users/harshsharma001654/repos",
  "events_url": "https://api.github.com/users/harshsharma001654/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshsharma001654/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harsh Sharma",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-05-19T08:22:33Z",
  "updated_at": "2026-09-19T20:34:36Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Harsh.com');
})

app.get('/facebook',(req,res)=>{
    res.send('Harshfb.com');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login first</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>please login first at Youtube</h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})