$(document).ready(function () {
  $(`.owl-5`).owlCarousel({
    loop: true,
    nav: true,
    items: 5,
    margin: 20,
    navText: [`<ion-icon name="chevron-back-outline"></ion-icon>`, `<ion-icon name="chevron-forward-outline"></ion-icon>`],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      }
    }
  })
  $(`.owl-3`).owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 4,
    margin: 20,
    navText: [`<ion-icon name="chevron-back-outline"></ion-icon>`, `<ion-icon name="chevron-forward-outline"></ion-icon>`],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      }
    }
  })
  $(`.owl-product-4`).owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 4,
    margin: 15,
    dots: false,
    navText: [`<i class="fa fa-angle-left"></i>`, `<i class="fa fa-angle-right"></i>`],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      420: {
        items: 3,
      },
      576: {
        items: 4,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    }
  })

  $(`#main_menu li`).each(function () {
    const subNav = $(this).find(`.sub_nav`).first()
    $(this).hover(
        function () {
          $(subNav).show()
        },
        function () {
          $(subNav).hide()
        }
    )
  }
  )

  $(`.sub_nav`).hover(
      function () {
        $(this).show()
      },
      function () {
        $(this).hide()
      }
  )


})

const infoButtons = document.querySelector(`.nav_button`)
let selectedElem

if (infoButtons) {
  for (const i of infoButtons.children) {
    if (i.firstChild.classList.contains(`active`)) {
      selectedElem = i.firstChild
    }
  }
  infoButtons.onclick = function (event) {
    const target = event.target
    const id = event.target.dataset.toggleId
    if (!id) { return }
    showTab(id)
    highlight(target)
    event.preventDefault()
  }
}

function highlight(elem) {
  selectedElem.classList.remove(`active`)
  selectedElem = elem
  selectedElem.classList.add(`active`)
}

function showTab(id) {
  const selectedId = selectedElem.dataset.toggleId
  document.getElementById(selectedId).classList.remove(`show`)
  const elem = document.getElementById(id)
  elem.classList.add(`show`)
}
