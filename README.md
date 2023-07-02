## EASE CART

Web application intended to manage a shopping cart easely.

![Screenshot](./public/screenshot.png 'Ease Cart')

### SETUP

- **clone repo**: Open a new terminal and execute _git clone https://github.com/jdmiguel/shopping-cart.git_
- **install dependencies**: Execute _npm install_
- **run local server**: Execute _npm run dev_
- **create production files**: Execute _npm run build_
- **run test suites**: Execute _npm run test test_

### TECHNOLOGIES

- **VITE**
- **REACT**
- **TYPESCRIPT**
- **EMOTION**
- **VITEST**
- **REACT-TESTING-LIBRARY**

### DEVELOPMENT

[Vitejs](https://vitejs.dev/) has been used as bundler for this application. In addition, the setup of the application includes several tools (such as eslint, prettier, husky and lintstaged) widely used in professional application setups.

The source files are in the _src folder_ that is composed of the following folders:

- **assets**: Images used in the app
- **components**: All the components used, including:
  - **ui**: Core components that are reused across the application
- **hooks**: React hooks to handle visual logic
- **contexts**: React contexts to handle visual logic and avoid prop drilling issues
- **helpers**: Several utilities such as types, literals, colors, mocks and theme settings

### STYLING

The [Emotion](https://emotion.sh/docs/introduction) library has been used for styling. On the other hand, responsiveness has been added to support different devices:

![Screenshot](./public/responsiveness.gif 'Responsiveness')

### TESTING

Unit tests have been implemented on several components such as Button, Card, etc... Some integration tests has been added on the root component as well to ensure the app behaves as expected by using [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/)

### BONUS

- **pagination**: The products are loaded by scrolling down to improve the performance of the application
- **theme mode**: Switchable theme mode (light and dark theme)
- **error catching**: Error boundaries included to catch errors
