document.addEventListener("DOMContentLoaded", function() {


  // Zadanie 2 Ukrycie banneru - Metoda II - JS

  var content_img = document.querySelectorAll('.content_img')[1];
  var element_h3 = content_img.querySelector('h3');

  content_img.addEventListener("mouseover", function(event) {
    event.preventDefault();
    element_h3.style.display = "none";
  })

  content_img.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    element_h3.style.display = "block";
  })

  // Zadanie 3 - Slider

  var button = document.querySelectorAll('.slider button');
  var btn_prev = button[0];
  var btn_next = button[1];
  var img = document.querySelector('.slider img');
  var tab_src = ["./images/black_chair.png", "./images/orange.png", "./images/red.png"];

  btn_prev.addEventListener('click', function(event) {
    event.preventDefault();
    if (img.dataset.index > 0) {
      img.dataset.index--;
    } else {
      img.dataset.index = tab_src.length - 1;
    }
    console.log(img.dataset.index);
    img.src = tab_src[img.dataset.index];
    console.log(img.src);
  })

  btn_next.addEventListener('click', function(event) {
    event.preventDefault();
    if (img.dataset.index < tab_src.length - 1) {
      img.dataset.index++;
    } else {
      img.dataset.index = 0;
    }
    console.log(img.dataset.index);
    img.src = tab_src[img.dataset.index];
    console.log(img.src);
  })


  // Zadanie 4 - Application

  var form = document.querySelector('.form');
  var list_arrows = form.querySelectorAll('.list_arrow');
  var list_panels = form.querySelectorAll('.list_panel');
  var list_li = form.querySelectorAll('li');
  var checkbox_transport = form.querySelector('#transport');
  var summary = document.querySelector('.summary_panel');
  var tab_value = summary.querySelector('.panel_right').children;
  var sum = summary.querySelector('.sum');

  console.log(checkbox_transport); // test

  for (var i = 0; i < list_arrows.length; i++) {

    list_panels[i].style.display = "none";
    list_arrows[i].addEventListener('click', function(event) {
      var list_panel = this.parentElement.children[2];
      // console.log(list_panel.style.display); // test
      if (list_panel.style.display === "block") {
        list_panel.style.display = "none";
      } else {
        list_panel.style.display = "block"
      }
    });
    list_panels[i].addEventListener('mouseleave', function(event) {
      this.style.display = "none";
    });

  };

  for (var i = 0; i < list_li.length; i++) {

    list_li[i].addEventListener('click', function(event) {
      console.log(this.innerText); // test
      console.log(this.parentElement.id);

      var name = summary.querySelector('.' + this.parentElement.id);
      var value = summary.querySelector('.' + this.parentElement.id + '.value')

      name.innerText = this.innerText;
      value.innerText = this.dataset.price;
    })
  };

  checkbox_transport.addEventListener("change", function(event) {
    var name = summary.querySelector('.' + this.id);
    var value = summary.querySelector('.' + this.id + '.value')

    console.log(this.checked);

    if (this.checked) {
      name.innerText = this.id;
      value.innerText = this.dataset.price;
    } else {
      name.innerText = "";
      value.innerText = "";
    }
  })


  form.addEventListener('click', function(event) {
    event.preventDefault();
    var total_price = 0;
    for (var j = 0; j < tab_value.length; j++) {
      total_price += Number(tab_value[j].innerText);
    }
    console.log(total_price);
    sum.innerText = total_price;
  });

});
