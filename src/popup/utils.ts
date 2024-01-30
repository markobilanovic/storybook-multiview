import { sizes } from './sizes';

export function removeEverythingExceptIframe(doc: Document) {
  const root = doc.getElementById('root');
  const iframe = doc.getElementById('storybook-preview-iframe');
  if (!root || !iframe) {
    return;
  }
  // iframe.style.width = '500px';
  // iframe.style.height = '700px';
  // iframe.style.position = 'relative';
  root.replaceChildren(iframe);
  // iframes.push(iframe);
  return iframe;
}

export function clickElementWithTitle(doc: Document, title: string) {
  const button = doc.querySelector('[title="' + title + '"]');
  console.log(3, button);
  (button as HTMLButtonElement)?.click();
}

export async function wait(s: number) {
  console.log('waiting', s);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data retrieved!');
    }, s * 1000);
  });
}

export function setFrameSize(iframe: HTMLIFrameElement, size: string) {
  iframe.style.width = sizes[size].width;
  iframe.style.height = sizes[size].height;
}

export async function addIframe(size: string, zIndex: number) {
  const CURRENT_URL = window.location.href;
  const iframe = document.createElement('iframe');
  iframe.addEventListener('load', async () => {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDocument) {
      removeEverythingExceptIframe(iframeDocument);
    }
  });
  iframe.src = CURRENT_URL.split('&')[0];
  iframe.id = `storybook-iframe-${size}`;
  iframe.style.position = 'absolute';
  setFrameSize(iframe, size);
  // iframe.style.width = sizes[size].width;
  // iframe.style.height = sizes[size].height;
  // iframe.style.top = (5 + iframes.map((iframe) => iframe.style.height).reduce((a, b) => parseInt(a) + parseInt(b), 0)) + 'px';
  iframe.style.top = '0';
  iframe.style.left = '0';
  // iframe.style.zIndex = iframes.length + 1;
  iframe.style.zIndex = zIndex.toString();
  // document.body.appendChild(iframe);
  document.getElementById('root')?.appendChild(iframe);
  return iframe.contentWindow?.document.title;
}
