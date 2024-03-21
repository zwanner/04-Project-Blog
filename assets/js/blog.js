let loggedContent = localStorage.getItem('blogData');
console.log(loggedContent);
let username = JSON.parse(loggedContent).username;
let title = JSON.parse(loggedContent).title;
let content = JSON.parse(loggedContent).content;
console.log(username);
console.log(title);
console.log(content);
localStorage.setItem('blogData', JSON.stringify({username: username, title: title, content: content}));

const blogBody = document.getElementById('blogBody');
blogBody.appendChild(document.createElement('h1')).textContent = title;
blogBody.appendChild(document.createElement('p')).textContent = content;
blogBody.appendChild(document.createElement('p')).textContent = `By: ${username}`;

