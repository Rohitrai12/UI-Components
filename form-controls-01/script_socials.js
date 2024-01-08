
const timeSince = (date) => {
    const seconds = Math.floor(
        (new Date() - date) / 1000);
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + 
      " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + 
      " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + 
      " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + 
      " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + 
      " minutes ago";
    }
    if (seconds < 10) {
        return "just now";
    }
    return Math.floor(seconds) + 
    " seconds ago";
}

//? defined comment authors
const users = {
    'alex1': {
        name: 'Alex Cooper',
        src: 'assets/alex.jpg'
    }, 
};

const loggedUser = users['alex1'];
let comments = [
    {
        id: 1,
        text: 'Thanks everyone!',
        author: users['alex1'],
        createdAt: '2023-09-03 12:00:00',
    }, // more comments
];

const authedUser = document.querySelector(
    '.authed-user');
const authorHTML = DOMPurify.sanitize(
    `<img class="avatar" src="${loggedUser.src}"
        alt="${loggedUser.name}">`
    );

authedUser.innerHTML = authorHTML;

const commentsWrapper = document.querySelector(
    '.discussion__comments');

//? generate comment HTML based on comment object
const createComment = (comment) => {
    const newDate = new Date(comment.createdAt);
    //? sanitize comment HTML
    return DOMPurify.sanitize(`<div class="comment">
        <div class="avatar">
            <img
                class="avatar"
                src="${comment.author.src}"
                alt="${comment.author.name}"
            >
        </div>
        <div class="comment__body">
            <div class="comment__author">
                ${comment.author.name}
                <time
                    datetime="${comment.createdAt}"
                    class="comment__date"
                >
                    ${timeSince(newDate)}
                </time>
            </div>
            <div class="comment__text">
                <p>${comment.text}</p>
            </div>
        </div>
    </div>`);
}

const commentsMapped = comments.map(comment =>
    createComment(comment)
);

const innerComments = commentsMapped.join('');
commentsWrapper.innerHTML = innerComments;

const newCommentForm = document.getElementById(
    'newcomment__form'
);
const newCommentTextarea = document.querySelector(
    '#newcomment__form textarea'
);

newCommentForm.addEventListener(
    'submit', 
    (e) => {
        e.stopPropagation();
        e.preventDefault();
        const newCommentTextareaValue = newCommentTextarea.value;

        const newComment = {
            id: comments.length + 1,
            text: newCommentTextareaValue,
            author: loggedUser,
            createdAt: new Date().toISOString(),
        };

        const comment = document.createElement('div');
        comment.innerHTML = createComment(newComment);

        if (commentsWrapper.hasChildNodes()) {
            commentsWrapper.insertBefore(
                comment, 
                commentsWrapper.childNodes[0]
            );          
        } else {
            commentsWrapper.appendChild(comment);
        }

        //? reset form after submit
        newCommentForm.reset();
    }
);


