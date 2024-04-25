// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new mdc.ripple.MDCRipple(s)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new materialstyle.Tooltip(tooltipTriggerEl)
})