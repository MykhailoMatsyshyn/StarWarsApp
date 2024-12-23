import React from "react";
import styles from "./CustomNode.module.css";
import clsx from "clsx";
import { Handle } from "reactflow";
import { Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    label: string;
    imageUrl?: string;
    category?: "person" | "film" | "starship";
    details?: {
      gender?: string;
      height?: string;
      eyeColor?: string;
      hairColor?: string;
      skinColor?: string;
      homeworld?: string;
    };
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div className={clsx(styles.customNode, styles[data.category || ""])}>
      {data.category === "film" && (
        <Handle type="target" position={Position.Top} />
      )}
      {data.category === "starship" && (
        <Handle type="target" position={Position.Top} />
      )}
      {data.category !== "starship" && (
        <Handle type="source" position={Position.Bottom} />
      )}

      {data.imageUrl && <img src={data.imageUrl} alt={data.label} />}
      <h2>{data.label}</h2>
      {data.details && (
        <div className={styles.details}>
          {data.details.gender && (
            <p>
              <span>Gender:</span>
              <span>{data.details.gender}</span>
            </p>
          )}
          {data.details.height && (
            <p>
              <span>Height:</span>
              <span>{data.details.height}</span>
            </p>
          )}
          {data.details.eyeColor && (
            <p>
              <span>Eye color:</span>
              <span>{data.details.eyeColor}</span>
            </p>
          )}
          {data.details.hairColor && (
            <p>
              <span>Hair color:</span>
              <span>{data.details.hairColor}</span>
            </p>
          )}
          {data.details.skinColor && (
            <p>
              <span>Skin color:</span>
              <span>{data.details.skinColor}</span>
            </p>
          )}
          {data.details.homeworld && (
            <p>
              <span>Homeworld:</span>
              <span>{data.details.homeworld}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomNode;
