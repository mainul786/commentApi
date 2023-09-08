const loadComment = async () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    const res = await fetch(url);
    const data = await (res.json());
    displayComment(data)
}

const displayComment = comments => {
    const postContainer = document.getElementById('post-container');
    comments.slice(0, 20).forEach(comment => {
       
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                    <div onclick="showCommentData(${comment.id})" class="card">
                        <div class="card-body">
                          <h5 class="card-title">${comment.name}</h5>
                          <h6 class="card-title">${comment.email}</h6>
                          <p class="card-text">${comment.body}</p>
                        </div>
                      </div>
       `;
       postContainer.appendChild(div);
       
    })
}

const showCommentData = async(commentId) =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    const res = await fetch(url);
    const data = await (res.json());
    displayAleart(data);
}

const displayAleart = message =>{
    const alertBox = document.getElementById('alert-box');
    alertBox.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('alert');
    div.classList.add('alert-success');
    div.style.display = 'block';
    div.innerHTML = `
    <h4 class="alert-heading">Email:---${message.email}</h4>
    `;
    alertBox.appendChild(div);
}

loadComment();