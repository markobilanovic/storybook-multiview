import './Popup.css';
import { handleStorybookPage } from './handleStorybookPage';

export const Popup = () => {
  const layoutStorybook = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id || 0 },
      // func: handleStorybookPage,
      files: ['test.ts'],
    });
  };

  return (
    <main>
      <button onClick={layoutStorybook}>Storybook</button>
    </main>
  );
};

export default Popup;
