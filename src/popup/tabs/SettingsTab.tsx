import '../Popup.css';
import { useState } from 'react';

const viewportDescription = 'Change the size of the preview;';

type MenuType = {
  value: string;
  description: string;
};

export const SettingsTab = () => {
  const [globalTypes, setGlobalTypes] = useState<MenuType[]>([]);
  const [viewportIds, setViewportIds] = useState<string[]>([
    'list-item-manual-xs',
    'list-item-manual-l',
  ]);

  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [viewportId, setViewportId] = useState('');
  return (
    <div>
      <div className={'form-container'}>
        <p>Add global types</p>
        <div className={'global-type-container'}>
          Description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          Value
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <button
          onClick={() => {
            setGlobalTypes((prev) => [{ value, description }, ...prev]);
            setValue('');
            setDescription('');
          }}
        >
          Add global type
        </button>
      </div>

      <div className={'form-container'}>
        <p>Add viewport option id</p>
        <div className={'global-type-container'}>
          <div>Viewport button id (find in Elements Inspector)</div>
          <input
            value={viewportId}
            onChange={(e) => setViewportId(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setViewportIds((prev) => [viewportId, ...prev]);
            setViewportId('');
          }}
        >
          Add viewport option
        </button>
      </div>
    </div>
  );
};
