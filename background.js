chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getServerName,
    });
  });
  
  function getAllServerNames() {
    const scriptTags = document.querySelectorAll('script');
    const regex = /\"serverName\":\s\"(.*?)\"/g; // replace with your regex
    let serverNames = [];
  
    scriptTags.forEach((scriptTag) => {
      let match;
      while ((match = regex.exec(scriptTag.innerHTML)) !== null) {
        // This will push only the server name without quotes
        serverNames.push(match[1]);
      }
    });
  
    return serverNames;
  }
              