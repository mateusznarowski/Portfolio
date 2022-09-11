# Portfolio

> ### [Page link](https://malelus-portfolio.netlify.app/)

---

#### The project was built using vite, frontend of the site was written in ReactJS and SCSS to write to CSS code, used icons from https://fontawesome.com/

- used fonts:
  - [Poppins](https://fonts.google.com/specimen/Poppins)
  - [Lora](https://fonts.google.com/specimen/Lora)

---

#### Structure:

- the website has been designed in a responsive way so that it can be used freely and comfortably on any device:

| Smartphone                                                                                          | Mobile                                                                                           | Desktop                                                                  |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| < 768px                                                                                             | 768px - 999px                                                                                    | > 1000px                                                                 |
| View adapted for use on a smartphone, hamburger menu (expandable navigation) (initial site design), | Mobile view, fixed navigation bar on top, fonts resize and fit of animations for larger screens, | Desktop view , fonts resize and fit of animations for desktop computers. |

- button in the navigation bar to change the theme of the page, and the selected theme is saved to local storage,

- navigation links navigating to the corresponding section on the page, from [react-scroll](https://www.npmjs.com/package/react-scroll),

- non-react projects section is visible after pressing the button,

- images when they are initially loaded are replaced with their skeleton using [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton), when the image loads it is displayed,

- when you press the email address, this one will copy to the clipboard and you will see a message informing you about it.

#### Look:

- changed scrollbar design,

- changed text selection design.

#### Extras:

- ability to disable completely the animations present on the page.

  > (To disable animations: Settings > Accessibility > Display > Show animations in Windows (Disable)) (The setting is found in the \_reset.scss file).

---

#### Made by: Mateusz Narowski

#### Date: 04.09.2022
