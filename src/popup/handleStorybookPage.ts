import { addIframe, removeEverythingExceptIframe, setFrameSize, wait } from './utils';

function clickElementWithTitle(doc: Document, title: string) {
  const button = doc.querySelector('[title="' + title + '"]');
  console.log(3, button);
  (button as HTMLButtonElement)?.click();
}

export async function handleStorybookPage() {
  console.log(111);
  const iframes: HTMLIFrameElement[] = [];
  console.log(222);
  clickElementWithTitle(document, 'Change the size of the preview');
  console.log(333);
  await wait(0.5);
  console.log(444);
  const viewSizeL = document.getElementById('list-item-manual_l');
  viewSizeL?.click();

  // click on change theme
  clickElementWithTitle(document, 'Global market');
  await wait(1);
  const WL_THEME = document.getElementById('list-item-WEB_WL_UK');
  WL_THEME?.click();
  await wait(2);

  removeEverythingExceptIframe(document);

  // iframes[0].style.height = '80vh';
  // iframes[0].style.width = '1280px';

  // iframes[0].style['ms-zoom'] = '0.75';
  // iframes[0].style['moz-transform'] = 'scale(0.75)';
  // iframes[0].style['moz-transform-origin'] = '0 0';
  // iframes[0].style['o-transform'] = 'scale(0.75)';
  // iframes[0].style['o-transform-origin'] = '0 0';
  // iframes[0].style['webkit-transform'] = 'scale(0.75)';
  // iframes[0].style['webkit-transform-origin'] = '0 0';

  setFrameSize(iframes[0], 'large');

  await addIframe('medium', iframes.length + 1);
  await wait(2);
  await addIframe('small', iframes.length + 1);
  await wait(2);
  await addIframe('xsmall', iframes.length + 1);

  const rootElement = document.getElementById('root')!;
  rootElement.style.display = 'flex';
  rootElement.style.flexWrap = 'wrap';
  rootElement.style.gap = '20px';
  rootElement.style.height = '100vh';
  rootElement.style.overflow = 'scroll';
}
