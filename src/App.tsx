import "./App.css";
import GlobalLayout from "./layouts/global-layout/layout";
import BackgroundImage from "./components/background-image/background-image";
import MainSection from "./sections/main";
import styles from "./App.module.css";
import MainLayout from "./layouts/general";
function App() {
  return (
    <GlobalLayout>
      <MainLayout>
        <main className={styles.main}>
          <div style={{ height: "100%" }}>
            <BackgroundImage
              style={{
                filter: "brightness(1) opacity(0.18) hue-rotate(22deg)",
              }}
              src={"background1.png"}
            />
          </div>
          <MainSection />
        </main>
      </MainLayout>
    </GlobalLayout>
  );
}

export default App;
