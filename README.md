# Expo Basic Startup

Expo Basic Startup is a React Native Expo app template that includes routing, theming, Firebase integration, REST API integration, and user authentication.

## Features

- **Routing**: Easily navigate between screens using React Navigation.
- **Theming**: Implement custom themes for your app using Context API.
- **Firebase Integration**: Integrate Firebase services for authentication and other functionalities.
- **REST API Integration**: Communicate with RESTful APIs to fetch or send data.
- **User Authentication**: Implement user authentication features using Firebase Auth.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Firebase account](https://firebase.google.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AreebGhani/expo-basic-startup.git
    ```

2. Navigate to the project directory:

    ```bash
    cd expo-basic-startup
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Firebase Setup:
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable the authentication method you prefer (e.g., Email/Password, Google Sign-In, etc.).
    - Obtain your Firebase configuration (apiKey, authDomain, etc.) from Firebase settings.
    - Replace the Firebase configuration in your project with your own configuration.
    
2. REST API Integration:
    - Replace the REST API endpoints in your project with your actual API endpoints.

### Usage

1. Start the development server:

    ```bash
    npx expo start
    ```

2. Open the Expo Go app on your mobile device.
3. Scan the QR code displayed in the terminal to open the app.

### Contributing

Contributions are welcome! If you have suggestions or found bugs, please open an issue or create a pull request.

### License

This project is licensed under the [MIT License](LICENSE).
