import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";

import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  applyNodeChanges,
  NodeChange,
} from "reactflow";
import "reactflow/dist/style.css";

import styles from "./PersonDetails.module.css";

import {
  fetchPersonDetails,
  fetchFilmDetails,
  fetchStarShipDetails,
} from "../../api/sw-api";
import { IFilm, IPerson, IStarShip } from "../../api/types";

import CustomNode from "./CustomNode";

import { useErrorContext } from "../../context/ErrorContext";

interface UnifiedNodeData {
  label: string;
  imageUrl?: string;
  details?: {
    gender?: string;
    height?: string;
    eyeColor?: string;
    hairColor?: string;
    skinColor?: string;
    homeworld?: string;
  };
}

interface GraphNode extends Node<UnifiedNodeData> {
  id: string;
  position: { x: number; y: number };
}

type GraphEdge = Edge & {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
};

const nodeTypes = {
  custom: CustomNode,
};

export const PersonDetails: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { setError } = useErrorContext();
  const backLinkHref = location.state ?? "/people";

  const [person, setPerson] = useState<IPerson | null>(null);
  const [films, setFilms] = useState<IFilm[]>([]);
  const [starships, setStarships] = useState<IStarShip[]>([]);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await fetchPersonDetails(Number(id));
        if (!response.data) {
          setError("Person not found.");
          navigate("/people");
          return;
        }
        setPerson(response.data);
      } catch (error) {
        setError("Person not found.");
        navigate("/people");
      }
    };

    fetchPersonData();
  }, [id, navigate, setError]);

  useEffect(() => {
    if (!person) return;

    const fetchRelatedData = async () => {
      try {
        const filmPromises = person.films.map((filmId) =>
          fetchFilmDetails(filmId).then((res) => res.data)
        );
        const starshipPromises = person.starships.map((starshipId) =>
          fetchStarShipDetails(starshipId).then((res) => res.data)
        );

        const [filmsData, starshipsData] = await Promise.all([
          Promise.all(filmPromises),
          Promise.all(starshipPromises),
        ]);

        setFilms(filmsData);
        setStarships(starshipsData);
      } catch (error) {
        console.error("Error fetching related data:", error);
      }
    };

    fetchRelatedData();
  }, [person]);

  useEffect(() => {
    if (!person) return;

    const personNode: GraphNode = {
      id: `person-${person.id}`,
      type: "custom",
      data: {
        label: person.name,
        imageUrl: `https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`,
        details: {
          gender: person.gender,
          height: person.height,
          eyeColor: person.eye_color,
          hairColor: person.hair_color,
          skinColor: person.skin_color,
          homeworld: String(person.homeworld),
        },
      },
      position: { x: 400, y: 0 },
      draggable: true,
    };

    const filmNodes: GraphNode[] = films.map((film, index) => ({
      id: `film-${film.id}`,
      type: "custom",
      data: {
        label: film.title,
        imageUrl: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
        category: "film",
      },
      position: { x: 400 * index, y: 550 },
      draggable: true,
    }));

    const starshipNodes: GraphNode[] = starships.map((starship, index) => ({
      id: `starship-${starship.id}`,
      type: "custom",
      data: {
        label: starship.name,
        imageUrl: `https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`,
        category: "starship",
      },
      position: { x: 400 * index, y: 1000 },
      draggable: true,
    }));

    const filmEdges: GraphEdge[] = films.map((film) => ({
      id: `edge-person-film-${film.id}`,
      source: `person-${person.id}`,
      target: `film-${film.id}`,
      animated: true,
      style: { strokeDasharray: "5,5", stroke: "#f00000", strokeWidth: 3 },
    }));

    const starshipEdges: GraphEdge[] = starships.flatMap(
      (starship) =>
        starship?.films?.map((filmId) => ({
          id: `edge-film-starship-${starship.id}-${filmId}`,
          source: `film-${filmId}`,
          target: `starship-${starship.id}`,
          animated: true,
          style: { strokeDasharray: "5,5", stroke: "#2196f3", strokeWidth: 3 },
        })) || []
    );

    setNodes([personNode, ...filmNodes, ...starshipNodes]);
    setEdges([...filmEdges, ...starshipEdges]);
  }, [person, films, starships]);

  const handleNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  return (
    <main>
      <div className={styles.header}>
        <BackLink to={backLinkHref}>Back to people</BackLink>
        <h2 className={styles.title}>{person?.name}</h2>
      </div>
      <div className={styles.flowContainer}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          onNodesChange={handleNodesChange}
        >
          <Controls />
          <MiniMap nodeColor="#060c21" zoomable pannable />
          <Background gap={25} size={1} color="yellow" />
        </ReactFlow>
      </div>
    </main>
  );
};
