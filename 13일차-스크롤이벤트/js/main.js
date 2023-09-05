(function(){

    // *스크롤 이벤트
    //   ㄴ브라우저에 스크롤을 이용하여 이벤트를 사용함
    //   ㄴ선택자(객체)는 보통 window를 사용함

    const boxE1 = document.querySelector('.box');

    const handScroll = () => {
        const pageY = window.pageYOffset;
        // ㄴ윈도우 객체가 가지고 있는 스크롤바의 거리를 px로 가져옴
        // ㄴwindow는 생략 가능
        const boxTop = boxE1.offsetTop;
        // ㄴ엘리먼트의 top에서 현재 위치 거리
        // ㄴtranslate는 포함하지 않음
        // ㄴoffsetLeft 왼쪽 거리를 알아옴(잘은 안 씀)
        const boxHeight = boxE1.offsetHeight;
        // ㄴ엘리먼트의 높이값 또는 가로값을 px단위로 얻어올 수 있음
        const windowHeight = window.innerHeight;
        // ㄴ현재 보고있는 브라우저의 높이값을 px단위로 얻어옴
        // ㄴ스크롤바의 높이값과 동일함

        
        // console.log("스크롤 top 값" + pageY);
        // console.log("박스 top 값" + boxTop);
        // console.log("박스 높이값" + boxHeight);
        console.log("윈도우 높이값" + windowHeight);


        // if(pageY >= boxTop - 100){
        //     boxE1.style.backgroundColor = "green"
        //     boxE1.classList.add('active');
        // }else if(pageY <= 800){
        //     boxE1.style.backgroundColor = "gold"
        //     boxE1.classList.remove('active');
        // }

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

        // *문제 - 스크롤을 내릴때마다 박스가 회전되게 만들기

        boxE1.style.transform = `rotate(${pageY}deg)`
    
    }

    window.addEventListener('scroll', handScroll);

})();