(function(){
    const user = {
        id:0,
        username: "test",
        password: "test123123"
    }
    

    const formEl = document.querySelector('form');
    const usernameEl = document.querySelector('.username');
    const passwordEl = document.querySelector('.password');
    const errorMessageEl = document.querySelector('.error_message');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const usernameValue = usernameEl.value;
        const usernameLen = usernameValue.length;
        const passwordValue = passwordEl.value;
        const passwordLen = passwordValue.length;

        if(usernameLen <= 2){   
            errorMessageEl.innerText = "아이디는 2자리 이상 작성해 주세요";
        }else{
            errorMessageEl.innerText = "";
        }

        if(passwordLen < 9){
            errorMessageEl.innerText = "비밀번호는 8자리 이상 작성해 주세요";
        }else{
            errorMessageEl.innerText = "";
        }
        // 몇자 이상 확인하는 유효성 검사 끝

        if(usernameValue !== user.username){
            errorMessageEl.innerText = "아이디가 틀렸습니다";
        }else if(passwordValue !== user.password){
            errorMessageEl.innerText = "패스워드가 틀렸습니다";
        }else{
            window.location.href = "index.html";
            // =>페이지 경로 이동할때 location.href 속성을 사용함
        }
    }

    formEl.addEventListener('submit', handleSubmit);


})();


