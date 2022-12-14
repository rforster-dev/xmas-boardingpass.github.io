// multi language js
// https://codepen.io/erikkjon88/pen/MGWzwV
var arrLang = {
  en: {
    quizResponse: "🎅 Merry Christmas! 🎅",
    quizTitle:
      "So mum, lets find out where you are going to be whisked away to... 🤔",
    quizDesc:
      "Answer the questions, and your boarding pass will be revealed...",
    q1Title: "Do I deserve a holiday? 🏖️",
    q1Option1: "Fuck yeah I do!",
    q1Option2: "Nah (but secretly yes)",
    q2Title: "Who's your favourite son? 🧒",
    q2Option1: "Russ",
    q2Option2: "Russ",
    q3Title:
      "OK, serious business now: Do I fancy exploring the historic sites of the Med? 🏝️",
    q3Option1: "Yeah, that sounds fun!",
    q3Option2: "Nah, I don't like holidays",
    q4Title:
      "How do you feel about site seeing where Captain Sandy has sailed? ⛵",
    q4Option1: "Bloody yes mate, sign me up! She's a cool cat",
    q4Option2: "Who's Captain Sandy? I don't own a television",
    q5Title:
      "OK final question... you're absolutely sure i'm the favourite? 😎",
    q5Option1: "Yes Russ, for the 100th time",
    q5Option2: "<No comment>",
  },
};

$(document).ready(function () {
  var lang = "en";
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

$(".translate").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 0);
  var lang = $(this).attr("id");
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// Anchor to next question
// https://codepen.io/kasap-victor/pen/rNVRxPM
$("#q1 .quizOption-item").click(function () {
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  $("#q1 .quizOption-item").not(this).addClass("unselected");
  $("#q1 .quizOption-item").not(this).siblings().removeClass("unselected");
  $("html,body")
    .delay(450)
    .animate(
      {
        scrollTop: $("#q2").offset().top - 32,
      },
      "slow"
    );
});

$("#q2 .quizOption-item").click(function () {
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  $("#q2 .quizOption-item").not(this).addClass("unselected");
  $("#q2 .quizOption-item").not(this).siblings().removeClass("unselected");
  $("html,body")
    .delay(450)
    .animate(
      {
        scrollTop: $("#q3").offset().top - 32,
      },
      "slow"
    );
});

$("#q3 .quizOption-item").click(function () {
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  $("#q3 .quizOption-item").not(this).addClass("unselected");
  $("#q3 .quizOption-item").not(this).siblings().removeClass("unselected");
  $("html,body")
    .delay(450)
    .animate(
      {
        scrollTop: $("#q4").offset().top - 32,
      },
      "slow"
    );
});

$("#q4 .quizOption-item").click(function () {
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  $("#q4 .quizOption-item").not(this).addClass("unselected");
  $("#q4 .quizOption-item").not(this).siblings().removeClass("unselected");
  $("html,body")
    .delay(450)
    .animate(
      {
        scrollTop: $("#q5").offset().top - 32,
      },
      "slow"
    );
});

$("#q5 .quizOption-item").click(function () {
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  $("#q5 .quizOption-item").not(this).addClass("unselected");
  $("#q5 .quizOption-item").not(this).siblings().removeClass("unselected");
});

// Random colors
// https://stackoverflow.com/questions/21289681/set-random-background-colors-for-multiple-divs
var colors = ["orange", "purple", "blue"];
var randomColor = Math.floor(Math.random() * colors.length);

$(".quizOption-item-plain").each(function () {
  $(this).addClass(colors[randomColor]);
  randomColor = (randomColor + 1) % colors.length;
});

// Parallax scroll
// https://codepen.io/webmadewell/pen/EqwxEJ
$(document).ready(function () {
  $(window).on("load scroll", function () {
    var parallaxElement = $(".deco-parallax"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.15 + "px, 0)",
        });
      }
    });
  });
});
