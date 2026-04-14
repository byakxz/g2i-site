function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function saveUtmsToStorage() {
  const utms = {
    'utm_source': getUrlParameter('utm_source'),
    'utm_campaign': getUrlParameter('utm_campaign'),
    'utm_medium': getUrlerParameter('utm_medium'),
    'utm_term': getUrlParameter('utm_term'),
    'utm_content': getUrlParameter('utm_content')
  };

  for (const key in utms) {
    if (utms[key]) {
      localStorage.setItem(key, utms[key]);
    }
  }
}

function fillUtmFields() {
  const map = {
    'custom_fields[2694055]': localStorage.getItem('utm_source'),
    'custom_fields[2704665]': localStorage.getItem('utm_campaign'),
    'custom_fields[2704662]': localStorage.getItem('utm_medium'),
    'custom_fields[2704668]': localStorage.getItem('utm_term'),
    'custom_fields[2704671]': localStorage.getItem('utm_content')
  };

  for (const field in map) {
    if (map[field]) {
      const inputs = document.querySelectorAll(`input[name="${field}"]`);
      inputs.forEach(function(input) {
        input.value = map[field];
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  saveUtmsToStorage();
});

window.addEventListener('rdstation:ready', function() {
  fillUtmFields();
});