// document.getElementById("blockButton").addEventListener("click", () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       const activeTab = tabs[0];
//       chrome.tabs.sendMessage(activeTab.id, "blockShortsPage");
//     });
//   });
  
document.getElementById("blockButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, "blockShortsPage");
    });
  });