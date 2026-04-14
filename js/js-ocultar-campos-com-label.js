function hideUtmFields() {
  var elements = document.querySelectorAll('[name^="cf_utm"]');
  
  if (elements.length === 0) {
    return;
  }

  elements.forEach(function(element) {
    var parentElement = element.parentElement;
    if (parentElement) {
      parentElement.style.display = 'none';
    }
  });
}

var observer = new MutationObserver(function(mutations, me) {
  var formElement = document.querySelector('[name^="cf_utm"]');

  if (formElement) {
    hideUtmFields(); 
    me.disconnect(); 
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true 
});