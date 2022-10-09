import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SingleProduct() {
  const navigate = useNavigate();
  const { product } = useParams();

  return (
    <div style={{ display: "grid", placeItems: "center", paddingTop: "200px" }}>
      <motion.h1 layoutId="title" style={{ userSelect: "none" }}>
        {product}
      </motion.h1>

      <motion.img
        src={`/images/${product}.webp`}
        alt={product}
        width={400}
        height={300}
        onClick={() => navigate(-1)}
        style={{
          margin: "20px auto",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        layoutId={product}
      />
    </div>
  );
}

export default SingleProduct;
