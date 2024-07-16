var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new materialstyle.Tooltip(tooltipTriggerEl)
});

// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new mdc.ripple.MDCRipple(s)
});

// Initialize Text fields
var textFieldList = [].slice.call(document.querySelectorAll('.form-control'))
var textFields = textFieldList.map(function (textField) {
  return new materialstyle.TextField(textField)
})

var myModal = document.getElementById('myModal')
myModal.addEventListener('shown.bs.modal', function (event) {
  // Redraw Text Field
  var textFields = this.querySelectorAll('.form-control');
  for (const [, value] of Object.entries(textFields)) {
    var textFieldInstance = materialstyle.TextField.getOrCreateInstance(value)
    textFieldInstance.redraw();
  }
});