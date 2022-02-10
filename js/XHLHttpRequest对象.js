let xhr = new XMLHttpRequest()

xhr.open("get", "example/php?name1=value1&name2=value2", true)

function addURLParam(url, name, value) {
  url += (url.indexOf("?" == -1 ? "?" : "&"))
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value)
  return url
}

let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    try {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        alert(xhr.responseText)
      } else {
        alert("Request was unsucessful: " + xhr.status)
      }
    }
    catch(ex) {

    }
  }
}

xhr.open("get", "timeout.php", true)
xhr.timeout = 1000
xhr.ontimeout = function() {
  alert("Request did not return in a second.")
}

// Fetch请求
let payload = JSON.stringify({
  foo: 'bar'
})

let jsonHeaders = new Headers({
  'Content-Type': 'application/json'
})

fetch('/send-me-json', {
  method: 'POST',
  body: payload,
  headers: jsonHeaders
})