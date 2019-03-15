let newsStories = document.getElementById('newsStories')



fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(function(response){
  return response.json()
}).then(function(storyID){
  for(let i = 0; i < storyID.length; i++)
  fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID[i]}.json?print=pretty`)
  .then(function(response){
    return response.json()
  }).then(function(newNewsStories){
    newsStories.innerHTML += `<li>
                            <a href=${newNewsStories}>${newNewsStories.title}</a>
                            <h4>Author:${newNewsStories.by}</h4>
                            <h6>${Date(newNewsStories.time*1000)}</li>
                            `
    })
})
