var element = document.getElementById('getpost');
if (element) {
    element.addEventListener('click', getPost);
}
async function getPost() {
    let myPost;

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "Get",
        });
        myPost = await response.json();
        console.log(myPost);
    } catch (err) {
        console.log(err);
    }
    document.getElementById("table").innerHTML = "<tr><th>USER_ID</th><th>ID</th><th>TITLE</th><th>BODY</th></tr>"
    let MyPost = myPost.map((myPost, index) => {

        return `<tr><td>${myPost.userId}</td><td>${myPost.id}</td><td>${myPost.title}</td><td>${myPost.body}</td></tr>`
    })
    document.getElementById("table").innerHTML += MyPost.join('');
}
getPost();