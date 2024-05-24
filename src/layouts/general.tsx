import React from "react";
import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {children}
      <div style={{ flexGrow: 1 }}>
        <Footer />
      </div>
    </>
  );
}
