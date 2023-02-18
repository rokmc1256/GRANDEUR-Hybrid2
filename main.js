let colorBtn = document.querySelectorAll('button');
let checkIcon = document.querySelectorAll('i');
let photo = document.querySelector('.photo');
let colorName = document.querySelector('.color_name');

const photoLinkList = ['23그랜저하이브리드/어비스 블랙 펄(블랙잉크).png', '23그랜저하이브리드/세레니티 화이트 펄(블랙잉크).png',
                     '23그랜저하이브리드/유기 브론즈 매트(무광 컬러).png','23그랜저하이브리드/어비스 블랙 펄.png','23그랜저하이브리드/세레니티 화이트 펄.png',
                     '23그랜저하이브리드/큐레이티드 실버 메탈릭.png','23그랜저하이브리드/트랜스미션 블루 펄.png','23그랜저하이브리드/녹턴 그레이 메탈릭.png',
                     '23그랜저하이브리드/바이오필릭 블루 펄.png','23그랜저하이브리드/밤부 차콜 그린 펄.png','23그랜저하이브리드/유기 브론즈 메탈릭.png',
                     '23그랜저하이브리드/녹턴 그레이 메탈릭(매트컬러).png'];

let colorNameList = ['어비스 블랙 펄(블랙잉크)', '세레니티 화이트 펄(블랙잉크)', '유기 브론즈 매트(무광 컬러)', '어비스 블랙 펄', '세레니티 화이트 펄',
                     '큐레이티드 실버 메탈릭', '트랜스미션 블루 펄', '녹턴 그레이 메탈릭', '바이오필릭 블루 펄', '밤부 차콜 그린 펄', '유기 브론즈 메탈릭', 
                     '녹턴 그레이 메탈릭(매트 컬러)']
                     
for(let num=0; num<colorBtn.length; num++) {
    colorBtn[num].addEventListener('click', () => {
        checkIcon[num].style.opacity = 1;
        photo.setAttribute('src',photoLinkList[num]);
        colorName.innerText = colorNameList[num];
    })
}

