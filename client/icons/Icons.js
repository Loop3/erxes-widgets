import * as React from 'react';

const attrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#fff',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const iconPlus = (
  <svg {...attrs} width="20" className="icon" >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const iconLeft = (
  <svg {...attrs}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const iconRight = (
  <svg {...attrs} height="20">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const iconExit = (
  <svg {...attrs} width="18">
    <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5" />
    <polyline points="17 16 21 12 17 8" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const iconAttach = (
  <svg {...attrs} width="18" height="35" stroke="#686868">
    <path
      d="M21.44,11.05l-9.19,9.19a6,6,0,0,1-8.49-8.49l9.19-9.19a4,
      4,0,0,1,5.66,5.66L9.41,17.41a2,2,0,0,1-2.83-2.83L15.07,6.1"
    />
  </svg>
);

const iconClose = (
  <svg {...attrs} width="18">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const defaultAvatar = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><style>.st2{fill:#e6af78}.st5{fill:#f0c087}.st6{fill:#2e255e}</style><circle cx="256.8" cy="256.7" r="255.3" fill="#eee"/><g id="Layer_1_1_"><defs><circle id="SVGID_1_" cx="256.7" cy="256.7" r="255.3"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><path class="st2" d="M326 380v-54H187.4v54l69.3 61.6z"/><path d="M433.2 405.2l-95.3-22.4c-1.4-.3-2.7-.9-4-1.6l-77.2 45-74.2-47.2c-2 1.9-4.4 3.2-7 3.8l-95.3 22.4c-13.9 3.3-23.8 15.7-23.8 30v60.3c0 8.5 6.9 15.4 15.4 15.4h369.7c8.5 0 15.4-6.9 15.4-15.4v-60.3c.1-14.3-9.7-26.7-23.7-30z" fill="#392a6f"/><path d="M187.4 326v56.9c87.3 31.5 138.6-47.3 138.6-47.3V326H187.4z" fill="#d29b6e"/><path class="st5" d="M156.6 148.9l6.7 147.7c.6 13.8 7.4 26.6 18.4 34.9l31.9 23.9c8 6 17.7 9.2 27.7 9.2h30.8c10 0 19.7-3.2 27.7-9.2l31.9-23.9c11-8.3 17.8-21.1 18.4-34.9l6.7-147.7H156.6z"/><path class="st2" d="M233.6 179.7c30.8 0 77-7.7 88-30.8h-165l6.7 147.7c.6 13.8 7.4 26.6 18.4 34.9l31.9 23.9c8 6 17.7 9.2 27.7 9.2h15.4c-15.4 0-46.2-30.8-46.2-69.3v-92.4c0-7.8 7.7-23.2 23.1-23.2z"/><path class="st6" d="M113 460.9l-49.9-44.8c-4.3 5.4-6.6 12.2-6.6 19.1v60.3c0 8.5 6.9 15.4 15.4 15.4h53.9v-21.3c0-11-4.7-21.4-12.8-28.7zM400.5 460.9l49.9-44.8c4.3 5.4 6.6 12.2 6.6 19.1v60.3c0 8.5-6.9 15.4-15.4 15.4h-53.9v-21.3c0-11 4.6-21.4 12.8-28.7z"/><path fill="#5b5d6e" d="M276 510.9h-38.5l4.8-69.3h28.9z"/><path d="M276 426.2h-38.5v14.5c0 4.8 3.9 8.6 8.6 8.6h21.3c4.8 0 8.6-3.9 8.6-8.6v-14.5z" fill="#515262"/><path class="st6" d="M186.3 362.8l70.4 63.4s-19.7 10-44 30c-4.2 3.5-10.4 2.9-13.9-1.3-.6-.7-1-1.4-1.4-2.2L164.3 380l10.5-15.7c2.3-3.5 7.1-4.5 10.7-2.2.2.2.5.5.8.7zM327.1 362.8l-70.4 63.4s19.7 10 44 30c4.2 3.5 10.4 2.9 13.9-1.3.6-.7 1-1.4 1.4-2.2l33.1-72.7-10.5-15.7c-2.3-3.5-7.1-4.5-10.7-2.2-.2.2-.5.5-.8.7z"/><path d="M303.4 97.9l7.2 51c33 6.6 37.7 58.3 38.4 73.1.1 2.7 1 5.3 2.4 7.5L364 249s-4.3-32.2 15.4-53.9c.1 0 6.8-128-76-97.2z" fill="#785550"/><path class="st5" d="M371.8 245.7l-8.7 34.8c-1 4.1-4.7 7-9 7-4.7 0-8.6-3.5-9.2-8.1l-4.5-35.6c-1.1-8.8 5.2-16.7 14-17.8.6-.1 1.2-.1 1.9-.1 8.8 0 16 7.2 16 16-.1 1.3-.2 2.6-.5 3.8z"/><path d="M164 84.1l11.4 7.8c-51.5 38-41.9 103.3-41.9 103.3 15.4 15.4 15.4 53.9 15.4 53.9l15.4-15.4s-5.9-44.5 23.1-61.6c27-15.9 50.6-7.7 74.6-7.7 64.5 0 82.6-24.3 79.4-53.9-1.6-15.3-25-47.2-84.7-46.2-24.1.3-69.3 7.6-92.7 19.8z" fill="#694b4b"/><path d="M159.5 157.6s-8.2-32.2 15.9-65.7c-51.5 38-41.9 103.3-41.9 103.3 15.4 15.4 15.4 53.9 15.4 53.9l15.4-15.4s-5.9-44.5 23.1-61.6c27-15.9 50.6-7.7 74.6-7.7 9.3 0 18.6-.6 27.8-1.9-49.7 1.6-79-36.1-130.3-4.9z" fill="#5a4146"/><path class="st2" d="M141.7 245.7l8.7 34.8c1 4.1 4.7 7 9 7 4.7 0 8.6-3.5 9.2-8.1l4.4-35.6c1.1-8.8-5.2-16.7-14-17.8-.6-.1-1.2-.1-1.9-.1-8.8 0-16 7.2-16 16 .1 1.3.3 2.6.6 3.8z"/><path class="st6" d="M356.9 495.5H303c-4.3 0-7.7 3.4-7.7 7.7v7.7h69.3v-7.7c0-4.2-3.5-7.7-7.7-7.7z"/></g></g></svg>'; // eslint-disable-line

export {
  iconPlus,
  iconLeft,
  iconRight,
  iconExit,
  iconAttach,
  iconClose,
  defaultAvatar
};
