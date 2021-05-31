chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
  chrome.storage.sync.set({ currentTabId: tabs[0].id });
  chrome.devtools.panels.create('RequestComparator', null, 'src/app/pages/panel/panel.html');
});
