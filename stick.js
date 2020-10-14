const stick = (el, to, above) => {
  if (typeof el === 'string') el = document.querySelector(el)
  if (typeof to === 'string') to = document.querySelector(to)
  if (!above) above = 0

  var offset = el.offsetTop
  var height = el.offsetHeight
  var top = window.pageYOffset + to.getBoundingClientRect().top
  var stop = top - (height * 2) - above

  document.addEventListener('scroll', () => {
    if (window.scrollY > stop) {
      el.style.position = 'absolute'
      el.style.top = stop + offset + 'px'
    } else {
      el.style.position = 'fixed'
      el.style.top = offset + 'px'
    }
  })
}