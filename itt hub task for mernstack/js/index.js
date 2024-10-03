function calculate() {
    var a = parseInt(document.getElementById("txtnum1").value);
    var b = parseInt(document.getElementById("txtnum2").value);
    var c = parseInt(document.getElementById("txtnum3").value);
    var d = parseInt(document.getElementById("txtnum4").value);
    var e = parseInt(document.getElementById("txtnum5").value);
    
    var result = a + b + c + d + e;
    var avg = result / 5;

    var output = "The obtained marks are: " + result + "<br>";
    output += "The average of the numbers is: " + avg + "%<br>";

    var resultElement = document.getElementsByClassName("result")[0];

    if (avg >= 50) {
        output += "Pass<br>";
        resultElement.style.color = "green";
        resultElement.innerHTML = "Congratulations! You have passed the exam.";
    } else {
        output += "Fail<br>";
        resultElement.style.color = "red";
        resultElement.innerHTML = "Sorry! You have failed the exam.";
    }

    document.getElementById("output").innerHTML = output;
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'flip',
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: {
      invert: true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
