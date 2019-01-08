const gluel = (sidebar, options = {}) => {
  if (typeof sidebar === 'string') {
    sidebar = document.querySelector(sidebar)
  }
  sidebar.style.position = 'relative'

  const el = sidebar.firstChild

  if (typeof options.offset === 'undefined') {
    options.offset = 20
  }

  const start = () => {
    el.style.left = 'auto'
    el.style.top = 'auto'
    el.style.position = 'relative'
  }

  const stick = (left) => {
    el.style.top = options.offset + 'px'
    el.style.left = left + 'px'
    el.style.position = 'fixed'
  }

  const end = () => {
    el.style.top = 'auto'
    el.style.bottom = 0
    el.style.left = 0
    el.style.position = 'absolute'
  }

  const update = () => {
    const a = sidebar.getBoundingClientRect()
    const b = el.getBoundingClientRect()
    el.style.minWidth = a.width + 'px'
    el.style.height = b.height + 'px'
    a.top > options.offset
      ? start()
      : a.height + a.top < b.height + options.offset
        ? end()
        : stick(a.left)
  }

  window.addEventListener('scroll', update)
  setTimeout(update, 1)
}
export default gluel
