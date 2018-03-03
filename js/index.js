function Selector(ele){
  return document.querySelectorAll(ele)
}

// onload
window.onload = function () {
  objBannerBtn[0].className = 'banner-active'
  ourButtonArr[0].className = 'button-active'
  mainTitleAndSectionAnimation (mainProductHeader,mainProductSectionFirst,mainProductSection,mProSecArr)
  mainTitleAndSectionAnimation (mainOurHeader,mainOurSectionFirst,mainOurSection,mOurSecArr)
  window.onscroll = function () {
    mainTitleAndSectionAnimation (mainProductHeader,mainProductSectionFirst,mainProductSection,mProSecArr)
    mainTitleAndSectionAnimation (mainOurHeader,mainOurSectionFirst,mainOurSection,mOurSecArr)
  }
}

//############ main title animation ############
function mainTitleAndSectionAnimation(header, sectionFirst, section, eleArr) {
  // target object
  let hs  = header.offsetTop       //HeaderScroll
  let sfs = sectionFirst.offsetTop //SectionFirstScroll

  // body window
  let bodyScroll   = document.documentElement.scrollTop // bodyScroll
  let windowHeight = document.documentElement.clientHeight //windowHeight

  // header
  if ( bodyScroll > hs-windowHeight/1.4 ) {
    header.className = eleArr[0]
  }

  // section
  for (let i=0; i<section.length; i++) {
    if ( bodyScroll >= section[i].offsetTop-windowHeight/1.4 ){
    // main-product-section
      section[i].className =  eleArr[1] + " " + eleArr[i+2]
    }
  }
}
//############ main title animation end #######

//############ banner ###########

// objBannerBtn index
let bannerIndex = 0

// bannerTimer
let bannerTimer = null
bannerTimer = setInterval(BannerAuto,5000)

// obj get
let windowWidth = document.documentElement.clientWidth
let objBannerBtn = Selector(".banner-btn>ul>li")
let objBannerWrap = Selector("#banner-wrap")[0]

// banner autoplay
function BannerAuto () {
  //重新定义left防止窗口改变时位移异常
  windowWidth = document.documentElement.clientWidth

  bannerIndex += 1
  if ( bannerIndex>3 ) {
    bannerIndex = 0
  }
  BannerChange( bannerIndex )
}

// banner change fun
function BannerChange ( bannerIndex ) {
  for (let i = 0; i<objBannerBtn.length; i++) {
    objBannerBtn[i].className = ''
  }
  objBannerBtn[ bannerIndex ].className = 'banner-active'
  objBannerWrap.style.left = "-" + bannerIndex*windowWidth + "px"
}

// banner click change to target
for (let i=0; i<objBannerBtn.length; i++) {
  objBannerBtn[i].onclick = function () {
    clearInterval( bannerTimer )
    BannerChange( this.getAttribute("value") )
    bannerIndex = i-1
    bannerTimer = setInterval(BannerAuto,5000)
  }
  // mouse over for stop banner
  objBannerBtn[i].onmouseover = function (e) {
    if (e.target.getAttribute('value') === i) {
      console.log(objBannerBtn[i]);
      clearInterval(bannerTimer)

      // and out
      objBannerBtn[i].onmouseout = function () {
        bannerTimer = setInterval(BannerAuto,5000)
      }
    }
  }

}

//############ banner end ############

//############ sidebar ###############
const sidebarTop  = Selector(".sidebar-totop")[0]
const sidebarTopP = Selector(".sidebar-totop p")[0]
function sidebarTopAct(f,s,c) {
  sidebarTop.children[0].style.top = f
  sidebarTop.children[1].style.top = s
  sidebarTopP.style.color          = c
}
sidebarTop.onmouseover = () => {
  sidebarTopAct("-50px","0","#2792F2")
}
sidebarTop.onmouseout  = () => {
  sidebarTopAct("0","50px","#ffffff")
}

//############ sidebar end ############

//############ sidebar pop ############
const sidebarPop      = Selector(".sidebar-pop")[0]
const sidebarPopClose = Selector(".sidebar-pop-close")[0]
const sidebarConsult  = Selector(".sidebar-consult")[0]
const sidebarConsultSpan  = Selector(".sidebar-consult span")
function FunSidebarConsult( spanColor, right, bgc, classname, src, dir ) {
  for (let i=0; i<sidebarConsultSpan.length; i++){
    sidebarConsultSpan[i].style.backgroundColor = spanColor
  }
  sidebarPop.style.right = right
  sidebarConsult.style.background = bgc
  sidebarConsult.children[4].className = classname
  sidebarConsult.children[3].setAttribute(src, dir)
}
sidebarConsult.onclick  = () => {
  FunSidebarConsult( "#288EF0", "42px",   "#ffffff", "sidebar-consult-p-active", "src", "images/061.png" )
}
sidebarPopClose.onclick = () => {
  FunSidebarConsult( "#ffffff", "-249px", "",        " ",                        "src", "images/059.png" )
}

//############ sidebar pop end #########

//############ sidebar totop ###########
const sidebarTotop = Selector(".sidebar-totop")[0]
sidebarTotop.onclick = function () {
  $("html,body").animate({scrollTop:0},300)
}
//############ sidebar totop end #######

//############ sidebar hide ############
const sidebar     = Selector(".sidebar")[0]
const sidebarVis  = Selector(".sidebar-vis")[0]
const sidebarHide = Selector(".sidebar-hide")[0]
sidebarHide.onclick = function () {
  sidebar.style.right    = "-42px"
  sidebarVis.style.right = "42px"
}
sidebarVis.onclick = function () {
  sidebar.style.right    = "0px"
  sidebarVis.style.right = "-42px"
}

//############ sidebar hide end ########

//############ product animation #################
const mainProductHeader        = Selector(".main-product-header")[0]
const mainProductSection       = Selector(".main-product-section")
const mainProductSectionFirst  = Selector(".main-product-section")[0]

const mProSecArr = [
  "main-product-header-animation",
  "main-product-section",
  "main-product-section-animation",
  "main-product-section-animation2",
  "main-product-section-animation3",
  "main-product-section-animation",
]
// onload
// mainTitleAnimation (mainProductHeader,mainProductSectionFirst,mainProductSection,mProSecArr)


//############ product animation end #################

//############ our-slip ##########################
const ourPcSlip      = Selector(".our-pc-slip")[0]
const ourMobileSlip  = Selector(".our-mobile-slip")[0]
const ourPadSlip     = Selector(".our-pad-slip")[0]
const ourButtonArr   = Selector(".main-our-banner-button ul li")

// index
let ourInd = 0

// timer
let ourTimer = setInterval( OurAuto, 1900 )

let pcImgHeight = ourPcSlip.children[0].height
let mobileImgHeight = ourMobileSlip.children[0].height
let padImgHeight = ourPadSlip.children[0].height;

for (let i=0; i<ourButtonArr.length; i++) {
  ourButtonArr[i].onmouseover = function ( ourInd ) {

    // clear time
    clearInterval( ourTimer )

    let listNum = parseInt(this.getAttribute("value"))

    for ( let j=0; j<ourButtonArr.length; j++ ) {
      ourButtonArr[j].className = " "
    }
    this.className = "button-active"
    ourInd = parseInt(this.getAttribute("value"))
    OurImgChange ( listNum )
  }
    ourButtonArr[i].onmouseout = function () {
      ourInd += 1
    ourTimer = setInterval( OurAuto, 1900 )
  }
}


function OurAuto () {

  // reset height
  pcImgHeight = ourPcSlip.children[0].height
  mobileImgHeight = ourMobileSlip.children[0].height
  padImgHeight = ourPadSlip.children[0].height;

  if ( ourInd>2 ) {
    ourInd = 0
  }

  OurImgChange( ourInd )

  // increase
  ourInd +=1
}
function OurImgChange( n ) {
  for ( let j=0; j<ourButtonArr.length; j++ ) {
    ourButtonArr[j].className = " "
  }
  ourButtonArr[n].className = "button-active"

  ourPcSlip.style.top = "-" + n * pcImgHeight + "px"
  ourMobileSlip.style.top = "-" + n * mobileImgHeight + "px"
  ourPadSlip.style.top = "-" + n * padImgHeight + "px"
  ourInd = n
}
//############ our-slip end ############

//############ our section animation ###
const mainOurHeader   = Selector(".main-our-header")[0]
const mainOurSection  = Selector(".main-our-section")
const mainOurSectionFirst  = Selector(".main-our-section")[0]

const mOurSecArr = [
  "main-our-header-animation",
  "main-our-section",
  "main-our-section-animation2",
  "main-our-section-animation",
  "main-our-section-animation3",
  "main-our-section-animation2",
  "main-our-section-animation",
  "main-our-section-animation3"
]
// onload
// mainTitleAnimation (mainOurHeader,mainOurSectionFirst,mainOurSection,mOurSecArr)
//############ our section animation end #
