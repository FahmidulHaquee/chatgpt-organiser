declare const chrome: any;

chrome.runtime.onInstalled.addListener(() => {
    console.log("ChatGPT Organizer Extension Installed");
});