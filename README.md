This Currency Converter React Website is live at latest-currency-converter.netlify.app

Currency Converter
This project is a Currency Converter application that allows users to convert amounts between different currencies. The application is built using React and utilizes custom hooks for fetching currency data. The UI is styled using Tailwind CSS.

Features
Convert Currencies: Allows users to convert amounts from one currency to another.
Swap Functionality: Users can swap the "from" and "to" currencies with a single click.
Reset Functionality: Users can reset the form to its default state.
Custom Hook: Utilizes a custom hook to fetch currency exchange rates.
Responsive Design: The application is fully responsive and works well on different screen sizes.
Custom Hook: useCurrencyInfo
The custom hook useCurrencyInfo is used to fetch currency exchange rates for a specified currency. It updates the state with the fetched data, which is then used for currency conversion.

Main Application Component: App
The App component manages the state and logic for the currency conversion process. It uses the useCurrencyInfo hook to get exchange rates and includes two InputBox components for user input. The convert, swap, and reset functions handle the core functionality of the application.

Input Component: InputBox
The InputBox component is a reusable component that handles user input for the currency amount and selection. It includes accessibility features and can be customized with additional classes.

Styling
The application is styled using Tailwind CSS along with custom CSS for specific components. The background image, logo, and button styles are customized to provide a user-friendly interface.

Deployment
The application is deployed on Netlify You can view the live version of the application here latest-currency-converter.netlify.app