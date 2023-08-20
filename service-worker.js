const shortsURL = 'https://www.youtube.com/shorts/';
let extensionStatus = 'ON';

function toggleExtensionStatus(tabId) {
  extensionStatus = extensionStatus === 'ON' ? 'OFF' : 'ON';
  chrome.action.setBadgeText({
    tabId,
    text: extensionStatus,
  });
}

// Listen for the extension icon (action) being clicked
chrome.action.onClicked.addListener(async (tab) => {
  toggleExtensionStatus(tab.id);
});

// Listen for changes in navigation history state (page changes)
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (extensionStatus === 'ON' && details.url.startsWith(shortsURL)) {
    // Inject a script to redirect the page to the main YouTube homepage
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      function: () => {
        window.location.href = 'https://www.youtube.com/';
      },
    });
  }
});

// Listen for the extension being installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: extensionStatus,
  });
});
