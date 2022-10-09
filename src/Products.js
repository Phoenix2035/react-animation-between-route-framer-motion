import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Products() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1 layoutId="title" style={{ margin: "50px auto", userSelect: "none" }}>My Shop</motion.h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        {["Shoe", "Watch", "Headphone"].map((item) => (
          <Link to={`/product/${item}`}>
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              src={`/images/${item}.webp`}
              alt="shoe"
              width={400}
              height={300}
              style={{ borderRadius: "5px", cursor: "pointer" }}
              layoutId={item}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
