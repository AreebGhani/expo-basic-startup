import AuthProvider from "./src/context/AuthContext";
import FirebaseProvider from "./src/context/FirebaseContext";
import ThemeProvider from "./src/context/ThemeContext";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <AuthProvider>
      <FirebaseProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </FirebaseProvider>
    </AuthProvider>
  );
}
