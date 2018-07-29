const apiUrl = "api/v1/news"

export const getNews = () => {

  return fetch(apiUrl)
    .then(res => {
      console.log({ res })
      return res.json()
    })
    .then(JSONRes => {
      return JSONRes.posts.map(post => ({
        title: post.main_headline, text: post.details.blurb
      })
      )
    })
}

