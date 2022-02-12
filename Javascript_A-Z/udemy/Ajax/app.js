
const listasPosts = document.querySelector("#listasPosts");
const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
httpRequest.send();
//console.log(httpRequest);
/*
let posts;

httpRequest.onreadystatechange = function(){
	 if(httpRequest.readyState === 4 && httpRequest.status === 200){
		  posts = JSON.parse(httpRequest.response)
		  //console.log(httpRequest.response);
		  exibePosts();
	 }
}
*//*
fetch("https://jsonplaceholder.typicode.com/posts/")//melhor forma utilizando fetch
.then(response => response.json())
.then((json)=>{
	 posts = json;
})
.then(()=>{
	 exibePosts();
})

function exibePosts(){
	 setTimeout(() =>{
		  let saida ="";
		  posts.forEach((post) => {
				saida += `<li> ${post.title}</li>
								<li> ${post.body}</li><br></br>`
		  })
		  listasPosts.innerHTML = saida;
	 }, 3000)
}
*/

const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/2", {
	method: "PUT",
	
	body: JSON.stringify({
		title: 'new post',
		body: "corpo do post",
		userId: 5
	}),
	headers: {
		'Content-type': 'application/json',
		'Accept': 'application/json',
	},

})

	.then((response) => response.json())
	.then((json) => {
		posts = json;
	})
	.then(() => {
		//exibePosts();
		console.log(posts)

	})


	/*
	const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/2", {
	method: "PUT",
	body: JSON.stringify({
		title: "new post",
		body: "corpo do post",
		userId: 5,
	}),
	headers: {
		'Content-type': 'application/json; charset-UTF-8',
	},
})

	.then((response) => response.json())
	.then((json) => {
		posts = json;
	})
	.then(() => {
		//exibePosts();
		console.log(posts);
*/