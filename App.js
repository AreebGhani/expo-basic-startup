import AuthProvider from "./src/context/AuthContext";
import FirebaseProvider from "./src/context/FirebaseContext";
import ThemeProvider from "./src/context/ThemeContext";
import Navigation from "./src/routes/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <FirebaseProvider>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </FirebaseProvider>
    </AuthProvider>
  );
}
