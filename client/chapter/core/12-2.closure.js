function earth() {
  let water = true
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'The Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  }
  let o2 = 9999

  /* function tiger() {
    console.log(water, o2)
  }

  return tiger */

  return function () {
    console.log(water, o2)
  }
}

/* -------------------------------------------------------------------------- */
/*                                실제로는 어떻게 사용되나                               */
/* -------------------------------------------------------------------------- */

function handler() {
  let isClicked = false

  return function () {
    console.log(isClicked)

    if (isClicked === true) {
      this.style.background = 'transparent'
    } else {
      this.style.background = 'red'
    }

    isClicked = !isClicked
  }
}

// handler를 실행해야 내부 함수를 리턴함
document.querySelector('.first').addEventListener('click', handler())
