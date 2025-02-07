import React from "react";
import { motion } from "framer-motion";

const AnimatedLine = () => {
    return (
        <motion.div
        className="animated-line"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        />
    );
};

export default AnimatedLine;