# Portfolio

> ### [Page link](https://mndev.eu)

#### The project was created with [Vite](https://vitejs.dev/), React with TypeScript + [SWC](https://github.com/vitejs/vite-plugin-react-swc) was used for the frontend, CSS was written using the SASS preprocessor and SCSS was used as the syntax of choice.

- used icons:

  - [Font Awesome](https://fontawesome.com/),
  - [skill-icons](https://github.com/tandpfun/skill-icons) from [tandpfun](https://github.com/tandpfun).

- used fonts:

  - [Poppins](https://fonts.google.com/specimen/Poppins).

#### Structure:

- the website has been created as responsive (RWD), scaling and layout has been adapted to display it comfortably on different devices:

| Small screens (e.g. smartphone)                                                                                                                 | Medium screens (e.g. tablet)                                                                                                            | Large screens (e.g. desktop)                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| < 768px                                                                                                                                         | 768px - 1023px                                                                                                                          | >= 1024px                                                                        |
| Scaling adapted to the use of the site with screens of small width, drop-down menu on the side of the screen activated by the Hamburger button, | View for wider screens, transition to multiple columns in places, larger font, menu moved from expandable to header due to wider width, | Widest view, much larger fonts, further possible transition to multiple columns. |

- open graph tags (page preview in pasted link) in the head of the page,

- button in the header to change between modes (light, dark, system preference),

- hook [useTernaryDarkMode](https://usehooks-ts.com/react-hook/use-ternary-dark-mode) was used to switch between modes, [useOnClickOutside](https://usehooks-ts.com/react-hook/use-on-click-outside) was used to hide mode selection.

- links in the menu scrolling to the corresponding section with [react-scroll](https://www.npmjs.com/package/react-scroll),

- in the projects section, the button at the bottom is used to expand the section with unhighlighted projects,

- [react-fetch-hook](https://www.npmjs.com/package/react-fetch-hook) was used to send the contact form,

- email address under the contact form when clicked is copied to the clipboard, [useCopyToClipboard](https://usehooks-ts.com/react-hook/use-copy-to-clipboard) was used for this.

#### Look:

- revised text selection design to more closely match the design colors.

#### Extras:

- an addition to Vite's configuration of postcss autoprefixer to CSS,

- ability to disable completely the animations present on the page.

  > (To disable animations: Settings > Accessibility > Display > Show animations in Windows (Disable)) (The setting is found in the \_reset.scss file).
