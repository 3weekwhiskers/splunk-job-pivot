document.querySelector('#openTab').addEventListener('click', function() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    let url = tabs[0].url;
    if (url.includes('sid=')) {
      let sid = url.split('sid=')[1].split('&')[0];
      let newUrl = 'http://192.168.12.3:8000/en-US/app/search/search?q=%7C%20loadjob%20' + sid;
      window.open(newUrl);
    } else {
      console.log("No 'sid' parameter found in the URL.");
    }
  });
});

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getAllServerNames,
    }, (result) => {
      document.getElementById('server-name').textContent = result[0].result.join(', ');
    });
  });
  
  
  document.querySelector('#copyButton').addEventListener('click', function() {
    const serverName = document.getElementById('server-name').textContent;
    navigator.clipboard.writeText(serverName);
  });
  
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getAllServerNames,
    }, (result) => {
      document.getElementById('server-name').textContent = result[0].result.join(', ');
    });
  });
  
  function getAllServerNames() {
    const scriptTags = document.querySelectorAll('script');
    const regex = /\"serverName\":\s\"(.*?)\"/g;
    let serverNames = [];
  
    scriptTags.forEach((scriptTag) => {
      let match;
      while ((match = regex.exec(scriptTag.innerHTML)) !== null) {
        serverNames.push(match[1]);
      }
    });
  
    return serverNames;
  }