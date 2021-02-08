///// mouse storker /////
$(function () {
    const mouse = $(".mouse");
    function Cursor(element, options) {
        function stringNode(node) {
            var tmpNode = document.createElement("div");
            tmpNode.appendChild(node.cloneNode(true));
            return tmpNode.innerHTML;
        }

        var intSize = parseInt(options.size);
        function setSize(size, scale) {
            if (scale) {
                scale = `${scale}`;
                element.css({
                    "transform": `scale(${options.hoverSize})`,
                    "opacity": ".6"
                });
            } else {
                size = parseInt(size);
                element.css({
                    width: size + "px",
                    height: size + "px",
                    transform: "none",
                    opacity: "0.7"
                });
            }
        }
        setSize(options.size);
        document.onmousemove = e => {
            element.css({
                left: e.clientX - parseInt(options.size) / 2 + "px",
                top: e.clientY - parseInt(options.size) / 2 + "px"
            });
            elementType = stringNode(e.target)
                .replace(/\</g, "")
                .split(">")[0]
                .split(" ")[0];
            //console.log(elementType)
            if (["a", "button", "input"].includes(elementType))
                setSize(options.size, options.hoverSize);
            else setSize(options.size);
        };
    }
    Cursor(mouse, {
        size: "30px", // Width and Height
        hoverSize: 0.5 // Scale size
    });
});


///// hamberger /////
$(function () {
    const $nav = $('#navArea');
    const $toggleBtn = $('.toggle_btn');
    const $mask = $('.gnav_mask');
    const open = 'open'; // class
    // menu open close
    $toggleBtn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });
    // mask close
    $mask.on('click', function () {
        $nav.removeClass(open);
    });
});


///// page scroll /////
$(function(){
    $('a[href^="#"]').click(function() {
       // スクロールの速度
       const speed = 400;
       // アンカーの値取得
       const href= $(this).attr("href");
       // 移動先を取得
       const target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       const position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });

///// scroll top /////
$(function () {
    const scrollTopBtn = $('.scroll_top');
    scrollTopBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            scrollTopBtn.fadeIn();
        } else {
            scrollTopBtn.fadeOut();
        }
    });
    $('.scroll_top').on('click', function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
    });
});



///// header bg /////
$(function () {
    const headerBg = $('.js_header_bg');
    const headerFC = $('header a')
    const offsetTopSection = $(".section_top").offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= offsetTopSection - 90) {
            headerBg.css({
                'backgroundColor': '#fcf4eb',
                // 'transition':'background-color .5s',
                // 'color':'#ffffff'
            });
        } else if ($(this).scrollTop() < offsetTopSection) {
            headerBg.css('backgroundColor', 'transparent');
            headerFC.css('color', '#4b4b4b')
        }
    });
});

///// fade-in /////
$(window).fadeThis();  


///// typewriter /////
const typewriter = (param) => {

    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");

    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};

typewriter({
    el: "#typewriter", //要素
    string: "WEB CREATER", //文字列
    speed: 200 //速度
});