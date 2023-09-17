"use client";
import { Button } from "@carbon/react";
import { Rocket } from "@carbon/icons-react";
import { WordCloudChart } from "@carbon/charts-react";
import React, { useState } from "react";
import "@carbon/charts-react/styles.css";

function WordCloud() {
  const [data, setData] = useState([
    { word: "Carbon", value: 100, group: "Description" },
    { word: "Design System", value: 70, group: "Description" },
    { word: "Template", value: 70, group: "Description" },
    { word: "Next.js", value: 100, group: "Technology" },
    { word: "TypeScript", value: 100, group: "Technology" },
    { word: "Tailwind", value: 70, group: "Technology" },
    { word: "13", value: 70, group: "First" },
    { word: "Sass", value: 50, group: "Technology" },
    { word: "Carbon Charts", value: 50, group: "Component" },
    { word: "ESLint", value: 50, group: "Technology" },
  ]);

  const [options, setOptions] = useState({
    title: "Word cloud",
    resizable: true,
    color: { pairing: { option: 3 } },
    height: "400px",
  });

  return <WordCloudChart data={data} options={options}></WordCloudChart>;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <h1 className="self-center text-center text-3xl m-4">
        Carbon Design System
      </h1>
      <p className="text-lg my-2">
        <Rocket className="inline-flex" /> Get started
      </p>
      <div className="flex flex-row justify-between space-x-2 my-2">
        <Button
          kind="primary"
          className="btn--primary"
          href="https://react.carbondesignsystem.com/"
        >
          Carbon React Storybook
        </Button>
        <Button
          kind="primary"
          className="btn--primary"
          href="https://charts.carbondesignsystem.com/react/"
        >
          Carbon Charts Storybook
        </Button>
      </div>
      <WordCloud />
    </main>
  );
}
