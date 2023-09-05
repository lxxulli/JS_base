(function(){

    const formE1 = document.querySelector('form');
    const usernameE1 = document.querySelector('.username');
    const passwordE1 = document.querySelector('.password');
    const errormessgeE1 = document.querySelector('.error_message');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usernameValue = usernameE1.value;
        const usernameLen = usernameValue.length;
        console.log(usernameValue.length);
        if(usernameLen <= 2){
            errormessgeE1.innerText = "아이디는 2자리 이상 작성해주세요"
        }else if(passwordE1 <= 8){
            errormessgeE1.innerText = "패스워드는 8자 이상으로 작성해주세요"
        }
    }
        // password / login / singnup 만들어보기
    formE1.addEventListener('submit', handleSubmit);

})();