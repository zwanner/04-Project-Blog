const username = document.querySelector('#inputUsername');
const title = document.querySelector('#inputTitle');
const content = document.querySelector('#inputContent');
const submit = document.querySelector('#submitBtn');
let dataArr = [];

submit.addEventListener('click', function (event) {
    event.preventDefault();
  
    const blogData = {
      username: username.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    };
    dataArr.push(blogData);
    localStorage.setItem('blogData', JSON.stringify(blogData));
    username.value = '';
    title.value = '';
    content.value = '';
    window.location.href = 'blog.html';
  });

