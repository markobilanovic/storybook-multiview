import './Popup.css';
import { handleStorybookPage } from './handleStorybookPage';
import { useState } from 'react';
import { SettingsTab } from './tabs/SettingsTab';

export const Popup = () => {
  const layoutStorybook = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id || 0 },
      // func: handleStorybookPage,
      files: ['test.ts'],
    });
  };

  return (
    <main>
      <SettingsTab />
      <button onClick={layoutStorybook}>Storybook</button>
    </main>
  );
};

export default Popup;
