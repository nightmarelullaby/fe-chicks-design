import ListContainer, { ListCard, ListRender } from "../components/list/list";
import Select from "../components/select/select";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import Searchbox from "../components/searchbox/searchbox";
import styles from "./main.module.css";
import Pagination from "../components/pagination/pagination";
const listItems = [
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
  {
    title: "Blue Partyhat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ",
    price: 45000,
    prevPrice: 50000,
  },
];
export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <h1 style={{ marginBottom: 24 }}>Condimentum consectetur</h1>
      <header style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Select
            text="Select a game"
            style={{ flexGrow: 1, gap: 80, maxWidth: "100%" }}
            leftIcon={
              <PuzzlePieceIcon color="white" width={24} strokeWidth={2} />
            }
          />
          <div style={{ flexGrow: 1 }}>
            <Searchbox
              rightElements={
                <div className={styles.searchBoxRightFilters}>
                  <Select
                    style={{
                      backgroundColor: "transparent",
                      flexGrow: 1,
                      maxWidth: "100%",
                    }}
                    leftIcon={<CurrencyDollarIcon width={28} color="#39e29d" />}
                    variant="withIcon"
                    subheader="Price"
                    defaultText="All"
                  />
                  <Select
                    style={{
                      backgroundColor: "transparent",
                      flexGrow: 1,
                      maxWidth: "100%",
                    }}
                    leftIcon={<CurrencyDollarIcon width={28} color="#39e29d" />}
                    variant="withIcon"
                    defaultText="All"
                    subheader="Item type"
                  />
                </div>
              }
            />
          </div>
        </div>
      </header>
      <article>
        <ListContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 62,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ fontWeight: 300 }}>Showing 20 - from 125</h4>
              <Select
                style={{ backgroundColor: "#353a4f" }}
                leftIcon={<CurrencyDollarIcon width={28} color="#39e29d" />}
                variant="withIcon"
                subheader="Price"
                defaultText="All"
              />
            </div>

            <ListRender gap={20}>
              {listItems.map(({ title, description, price, prevPrice }) => (
                <ListCard
                  prevPrice={prevPrice}
                  title={title}
                  productImage={
                    <img
                      src="assets/item.png"
                      style={{
                        width: 48,
                      }}
                    />
                  }
                  description={description}
                  price={price}
                />
              ))}
            </ListRender>
            <div style={{ alignSelf: "center" }}>
              <Pagination pages={[1, 2, 3, 4, 5, 6]}></Pagination>
            </div>
          </div>
        </ListContainer>
      </article>
    </section>
  );
}
