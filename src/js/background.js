import '../img/icon-128.png'
import '../img/icon-34.png'

let tabId
chrome.browserAction.onClicked.addListener(() => { getCurrentTab(); createTab() })

function createTab() {
  chrome.tabs.create({ url: 'popup.html' }) 
}

function getCurrentTab() {
  chrome.tabs.query(
    { currentWindow: true, active: true },
    function (tabArray) { tabId = tabArray[0].id }
  )
}

chrome.extension.onMessage.addListener(function (message, messageSender, sendResponse) {
  let inset = "document.querySelector('.wp-editor-area')"
  let finalMessage = message.msg.reverse().reduce((x, u) => {
    x = u.content + x
    return x
  }, '')
  chrome.tabs.executeScript(
    tabId,
    { code: `
              ${inset}.value = '';
              ${inset}.value = '${finalMessage}';
            `
    }
  )



  var updateProperties = { 'active': true };
  chrome.tabs.update(tabId, updateProperties, (tab) => { });
});