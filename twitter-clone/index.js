const createTweetFormElement = document.querySelector("#createTweetForm");
const tweetListElement = document.querySelector(".tweet-list");

createTweetFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputElement = document.querySelector("#username");
  const textAreaElement = document.querySelector("#tweetMessage");

  let tweet = {
    author: inputElement.value,
    message: textAreaElement.value,
    image: "https://i.pinimg.com/474x/4c/c2/3e/4cc23e28035d3bef286c29139319c044--twitter-icon-icons.jpg"
  };

  const response = await fetch("https://kc-fake-tweets-api.onrender.com/posts", {
    method: "POST",
    body: JSON.stringify(tweet),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const createdTweet = await response.json()

  inputElement.value = "";
  textAreaElement.value = "";

  drawTweet(createdTweet)
});

function generateTweetCommentsHTML(comments) {
  let HTMLResult = '';

  comments.forEach(comment => {
    HTMLResult = HTMLResult + `
      <li>
        <p>Autor: ${comment.author}</p>
        <p>${comment.message}</p>
      </li>
    `
  })

  return HTMLResult;
}

async function deleteTweet(tweetId) {
  console.log(tweetId);

  // usar aquí window.confirm
  const removeConfirmation = window.confirm("¿Estás seguro de borrar el tweet?");

  if (removeConfirmation) {
    await fetch(`https://kc-fake-tweets-api.onrender.com/posts/${tweetId}`, {
      method: "DELETE"
    })

    // borrar el tweet de la pantalla
    const tweetElement = document.getElementById(tweetId);
    tweetElement.remove();
  }

}

function drawTweet(tweet) {
    // creamos etiqueta article
    const tweetElement = document.createElement("article");

    tweetElement.setAttribute("id", tweet.id);

    let tweetContent = `
      <p>Autor: ${tweet.author}</p>
      <p>${tweet.message}</p>
      <p>${tweet.likes.length} likes y ${tweet.comments.length} comentarios</p>
      <button onclick="deleteTweet(${tweet.id})">Borrar tweet</button>
    `;

    if (tweet.comments.length > 0) {
      const tweetComments = generateTweetCommentsHTML(tweet.comments)
      tweetContent = tweetContent + `
        <hr>
        <p>Comentarios</p>
        <ul>${tweetComments}</ul>
      `;
    }

    tweetElement.innerHTML = tweetContent;

    // añadimos el tweet a la lista por el principio
    tweetListElement.prepend(tweetElement)
}

async function drawTweets() {
  const response = await fetch("https://kc-fake-tweets-api.onrender.com/posts");
  const tweets = await response.json();
  tweetListElement.innerHTML = "";

  tweets.forEach((tweet) => {
    drawTweet(tweet)
  });
}

drawTweets();

/*
{
  "id": 0,
  "author": "TechCrunch",
  "image": "https://www.smartworld.it/wp-content/uploads/2018/07/Facebook-Mark-Zuckerberg.jpg",
  "message": "",
  "likes": [
    "markZuck",
    "donnie",
    "EduardoSaverin",
    "DMoskovitz"
  ],
  "comments": [
    {
      "author": "markZuck",
      "message": "👏👏👏"
    },
    {
      "author": "edu",
      "message": "afsdfdsfdsfs"
    }
  ]
},
*/