

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    console.log(details);
    chrome.scripting.executeScript({
        target : {tabId : details.tabId},
        func : (()=>{
            window.location.href = "https://www.youtube.com/";
        }),
      });
  }
);
