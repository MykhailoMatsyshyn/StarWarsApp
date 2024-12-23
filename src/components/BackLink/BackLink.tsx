import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./BackLink.module.css";

interface BackLinkProps {
  to: string;
  children: React.ReactNode;
}

export const BackLink: React.FC<BackLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      <HiArrowLeft size={24} />
      {children}
    </Link>
  );
};
