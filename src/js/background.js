import '../img/icon-128.png'
import '../img/icon-34.png'

chrome.browserAction.onClicked.addListener(() => { getCurrentTab(); createTab() })

function createTab() {
  chrome.tabs.create({ url: 'popup.html' }) 
}

function getCurrentTab() {
  chrome.tabs.query(
    { currentWindow: true, active: true },
    function (tabArray) { console.log(tabArray) }
  )
}