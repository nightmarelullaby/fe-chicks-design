import React from "react";
import { formatCountryCurrency } from "../../utils/currencyFormat";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import styles from "./list.module.css";
import { ListCardTypes, ListRenderTypes } from "./list.types";
export default function ListContainer(props: React.PropsWithChildren) {
  return <div className={styles.listContainer}>{props.children}</div>;
}

export function ListRender({ children, ...style }: ListRenderTypes) {
  return (
    <ul
      className={styles.listRender}
      style={{
        ...style,
      }}
    >
      {children}
    </ul>
  );
}

export function ListCard({
  title,
  productImage,
  price,
  prevPrice,
  description,
}: ListCardTypes) {
  return (
    <div className={styles.listCardContainer}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div
              style={{
                backgroundColor: "#39e29d",
                width: 4,
                height: 4,
                borderRadius: 100,
              }}
            ></div>
            <span style={{ textTransform: "uppercase", fontSize: 13 }}>
              on sale
            </span>
          </div>
          <div>
            <span
              style={{
                borderRadius: 4,
                border: "1px solid #39e29d",
                padding: "4px 8px",
                fontSize: 14,
                color: "#39e29d",
              }}
            >
              In stock
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginTop: 16,
        }}
      >
        {productImage}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontWeight: 400 }}>{title}</h4>
          <img src="assets/game-logo.png" width={32} height="auto" />
        </div>
        <div>
          <span style={{ fontWeight: 500, marginRight: 8 }}>
            {formatCountryCurrency(price)}
          </span>
          <small>
            <span
              style={{
                textDecoration: "line-through",
                color: "lightgray",
                textDecorationThickness: 1.5,
                textDecorationColor: "red",
              }}
            >
              {formatCountryCurrency(prevPrice)}
            </span>
          </small>
        </div>
        <p style={{ fontWeight: 400, fontSize: 14, color: "#b0b0b0" }}>
          {description}
        </p>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <button className={styles.listCardDetailsButton}>
          <span className={styles.listCardDetailsButtonText}>details</span>
        </button>
        <button className={styles.listCardAddButton}>
          <span style={{ color: "white", fontWeight: 500 }}>add</span>
          <ShoppingCartIcon width={16} color="white" />
        </button>
      </div>
    </div>
  );
}
