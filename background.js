// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
chrome.webNavigation.onCommitted.addListener(function(details) {
    console.log("blocker triggered:")
    console.log(details)
    // chrome.tabs.executeScript(null, { runAt: "document_start", code: "window.stop();" })
    chrome.tabs.executeScript(null, { runAt: "document_start", file: "blockAndChangeContent.js" });
}, {
    url: [
        { hostSuffix: 'reddit.com' },
        { hostSuffix: 'news.ycombinator.com' }
    ]
})
