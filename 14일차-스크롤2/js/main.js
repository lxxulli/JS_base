(function(){
    
    const wrapE1 = document.querySelector('.wrap');
    const headerE1 = document.querySelector('header');
    const sec_2 = document.querySelector('.section_2');
    const barE1 = document.querySelector('.bar');
    // 밖에 적는 함수는 한 번만 움직이고 값이 멈춤
    // ㄴ 이벤트를 계속 반복하고 싶다면 이벤트 함수 안으로 넣기

    const handleScroll = () => {
        const pageY = window.pageYOffset
        const secTop_2 = sec_2.offsetTop;
        // console.log(pageY);
        // console.log(secTop_2);

        if(pageY >= 20){
            headerE1.classList.add('header_fix');
        }else{
            headerE1.classList.remove('header_fix');
        }
        // header event end

        if(pageY >= secTop_2 / 2){;
            // console.log("조건문 실행") <<< 오류가 나고 검사창에도 오류가 없으면 콘솔로 확인해보기
            sec_2.classList.add('con_up');
        }else{
            sec_2.classList.remove('con_up');
        }
        //section_2 .con event end

        // *문제
        // 스크롤을 내릴 때 bar의 가로값이 올라가게 작업하기
        
        const useScroll = wrapE1.offsetHeight - window.innerHeight;
        // console.log(`wrap의 전체 높이 ${wrapE1.offsetHeight}`);
        // console.log(`브라우저의 높이 ${window.innerHeight}`);
        // console.log(`실제 사용 가능한 높이 ${useScroll}`);
        const calcResult = pageY / useScroll * 100;

        barE1.style.width = `${calcResult}%`
    }

    window.addEventListener('scroll', handleScroll);

})();