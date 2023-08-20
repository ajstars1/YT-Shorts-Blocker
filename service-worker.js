chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "ON",
    });
  });

const shorts = 'https://www.youtube.com/shorts/'

let Status = "ON";
chrome.action.onClicked.addListener(async (tab) => {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    Status = nextState;
    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
}
);

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    if (Status === "ON" && details.url.startsWith(shorts)) {
        chrome.scripting.executeScript({
            target : {tabId : details.tabId},
            func : (()=>{
                window.location.href = "https://www.youtube.com/";
            }),
          });
      } 
  
  }
);
