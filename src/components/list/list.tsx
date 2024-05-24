import React from "react";
import { formatCountryCurrency } from "../../utils/currencyFormat";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import styles from "./list.module.css";
import { ListCardTypes, ListRenderTypes } from "./list.types";
export default function ListContainer(props: React.PropsWithChildren) {
  return (
    <div className={styles.listContainer} style={{}}>
      {props.children}
    </div>
  );
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
  description,
}: ListCardTypes) {
  return (
    <div className={styles.listCardContainer} style={{}}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div
              style={{
                backgroundColor: "#4dff71",
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
                border: "1px solid lightgreen",
                padding: "4px 8px",
                fontSize: 14,
                color: "lightgreen",
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

        <h4 style={{ fontWeight: 400 }}>{title}</h4>
        <span style={{ fontWeight: 500 }}>{formatCountryCurrency(price)}</span>
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
