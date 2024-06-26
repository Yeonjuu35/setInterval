// let count = 3;

// setInterval(function(){
//     count++;
//     count %= 5;
//     document.querySelector("#bannerimg").setAttribute("src",`/img/${count}.png`);
// }, 1000)
// // setInterval은 첫 화면부터 바로 보여주지 않음(1초의 대기 시간이 필요)

const bannerdata = [
    "/imgcopy/asdf.png",
    "/imgcopy/daf.png",
    "/imgcopy/ewfdf.png",
    "/imgcopy/qdwfdf.png",
    "/imgcopy/werdfdsf.png"
];

let num = 0;

const bannerWrap = document.querySelector(".bannerwrap");
const bannerImg = document.querySelector("#bannerimg");
const bannerButton = document.querySelector(".bannerwrap button");

function updateBanner() {
    bannerWrap.style.background = `url(${bannerdata[num]}) center no-repeat`;
    bannerImg.setAttribute("src", bannerdata[num]);
}

function startAutoBanner() {
    return setInterval(function() {
        num = (num + 1) % bannerdata.length;
        updateBanner();
    }, 1000);
}

let autoBanner = startAutoBanner();

bannerButton.addEventListener('click', function() {
    clearInterval(autoBanner);
    bannerButton.innerHTML = "PLAY";
});

// 초기 배너 설정
updateBanner();

