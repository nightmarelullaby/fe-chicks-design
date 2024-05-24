import styles from "./footer.module.css";
export default function Footer() {
  const links = [
    {
      header: "Chicks Gold",
      elements: ["Games", "About Us", "Blog", "Sitemap"],
    },
    {
      header: "Support",
      elements: ["Contact Us", "FAQ"],
    },
    {
      header: "Legal",
      elements: ["Privacy Policy", "Terms of Service", "Copyright Policy"],
    },
  ];
  return (
    <footer className={styles.footer}>
      <CompaniesFooterSection />
      <div
        style={{
          alignSelf: "center",
          width: "clamp(200px,80%,1280px)",
          padding: "32px 0 32px 0",
        }}
      >
        <img src="src/assets/social-media-footer.png" width={220} />
        <div
          style={{
            margin: "24px 0 ",
            width: "100%",
            backgroundColor: "lightblue",
            height: 1,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",

              flexDirection: "column",
            }}
          >
            <img
              src="assets/chicks-logo-large.png"
              style={{
                width: "200px",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <span style={{ color: "white" }}>support@chicksgold.com</span>
          </div>
          <div className={styles.categories}>
            {links.map(({ header, elements }) => (
              <FooterLinks header={header} elements={elements} />
            ))}
          </div>
        </div>
        <p className={styles.footerDisclaimerText}>
          © 2017 - 2020 Chicksgold.com. All rights reserved
        </p>
      </div>
    </footer>
  );
}
export function FooterLinks({
  header,
  elements,
}: {
  header?: string;
  elements?: string[];
}) {
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4 style={{ color: "white" }}>{header}</h4>
      <div
        style={{
          marginTop: 16,
          display: "flex",
          gap: 8,
          flexDirection: "column",
        }}
      >
        {elements?.map((el: string) => (
          <li key={el}>
            <span style={{ color: "#cbcbcf" }}>{el}</span>
          </li>
        ))}
      </div>
    </ul>
  );
}

export function CompaniesFooterSection() {
  return (
    <section
      style={{
        backgroundColor: "#2b2c3b",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <div
        style={{
          width: "clamp(800px,80%,1280px)",
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <img src="/src/assets/brands.png" width={300} />
        <span style={{ color: "lightgray" }}>and 50+ more</span>
      </div>
    </section>
  );
}
