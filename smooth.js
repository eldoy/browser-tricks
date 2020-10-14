const smooth = (el) => {
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
  if (!el) {
    return
  }
  const STEP = 40
  const FAST = 80
  const LONG = 320
  const SLOW = 10
  const OFFSET = 10
  const move = () => {
    const y = window.scrollY
    const top = el.offsetTop - OFFSET
    if (y !== top) {
      const diff = Math.abs(y - top)
      const step = diff > LONG
        ? FAST
        : diff < STEP
          ? SLOW
          : STEP
      if (diff < step) {
        window.scroll(0, top)
      } else {
        const i = y > top ? -step : step
        window.scroll(0, y + i)
      }
      window.requestAnimationFrame(move)
    }
  }
  window.requestAnimationFrame(move)
}
