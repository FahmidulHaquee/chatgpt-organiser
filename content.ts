document.addEventListener("DOMContentLoaded", function () {
  // Get stored pinned chats from Chrome storage
  chrome.storage.sync.get("pinnedChats", function (data: any) {
    const pinnedChats = data.pinnedChats || [];

    const chatNav = document.querySelector("nav");

    // Function to render pinned chats
    function renderPinnedChats() {
      const pinnedContainer = document.createElement("div");
      pinnedContainer.id = "pinned-chats";
      pinnedContainer.innerHTML = "<h3>Pinned Chats</h3>";
      pinnedChats.forEach((chatId: any) => {
        const chatElement = document.getElementById(chatId);
        if (chatElement) {
          pinnedContainer.appendChild(chatElement.cloneNode(true));
        }
      });
      chatNav!.prepend(pinnedContainer);
    }

    renderPinnedChats();

    // Add a pin button to each chat item
    chatNav!.querySelectorAll("a").forEach(chatItem => {
      const pinButton = document.createElement("button");
      pinButton.innerText = "📌";
      pinButton.style.marginLeft = "10px";

      pinButton.addEventListener("click", () => {
        const chatId = chatItem.id;
        if (!pinnedChats.includes(chatId)) {
          pinnedChats.push(chatId);
          chrome.storage.sync.set({ pinnedChats: pinnedChats }, () => {
            console.log("Chat pinned: " + chatId);
          });
        }
      });

      chatItem.appendChild(pinButton);
    });
  });
});
