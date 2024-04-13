import React, { ReactNode } from "react";
import { Code, BrightProps } from "bright";

import theme from "./theme";
import styles from "./CodeSnippet.module.css";

interface CodeSnippetProps {
  language?: string;
  children?: ReactNode;
}

export default function CodeSnippet({ children, language }: CodeSnippetProps) {
  return (
    <Code theme={theme} lang={language} className={styles.wrapper}>
      {children}
    </Code>
  );
}
