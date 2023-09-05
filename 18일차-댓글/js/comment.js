(function(){

    const formEl = document.querySelector('form');
    const inputEl = document.querySelector('input');
    const commentWrapEl = document.querySelector('.comment_wrap');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputEl.value;
        const commentEl = document.createElement("p");
        
        commentEl.innerText = inputValue;
        commentEl.classList.add("comment");
        commentWrapEl.appendChild(commentEl);
        
        inputEl.value = "";
    }

    formEl.addEventListener('submit', handleSubmit);

})();