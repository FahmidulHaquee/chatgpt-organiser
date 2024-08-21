const clearPinnedElement = document.getElementById("clearPinned");
if (clearPinnedElement) {
  clearPinnedElement.addEventListener("click", () => {
    // Rest of the code...
  });
}

chrome.storage.sync.set({ pinnedChats: [] }, () => {
    alert("All pinned chats have been cleared.");
});