"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "a", x: 55, y: 55, r: 8, state: "ok" },
  { id: "b", x: 220, y: 35, r: 6, state: "ok" },
  { id: "c", x: 258, y: 132, r: 7, state: "broken" },
  { id: "d", x: 135, y: 170, r: 6, state: "ok" },
  { id: "e", x: 52, y: 220, r: 7, state: "broken" },
  { id: "f", x: 232, y: 228, r: 6, state: "ok" },
] as const;

const solidEdges: [string, string][] = [
  ["a", "b"],
  ["a", "d"],
  ["d", "f"],
];

const brokenEdges: [string, string][] = [
  ["b", "c"],
  ["d", "e"],
];

function find(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function ProblemGraphic() {
  return (
    <motion.svg
      viewBox="0 0 300 270"
      className="w-full max-w-sm text-accent"
      style={{ aspectRatio: "300 / 270" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <line
        x1={find("c").x}
        y1={find("c").y}
        x2={find("f").x}
        y2={find("f").y}
        stroke="currentColor"
        strokeOpacity={0.15}
        strokeWidth={1}
      />

      {solidEdges.map(([from, to]) => {
        const a = find(from);
        const b = find(to);
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="currentColor"
            strokeOpacity={0.55}
            strokeWidth={1.25}
          />
        );
      })}

      {brokenEdges.map(([from, to]) => {
        const a = find(from);
        const b = find(to);
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#ff5d5d"
            strokeWidth={1.25}
            strokeDasharray="5 6"
            animate={{ strokeDashoffset: [0, -22] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          />
        );
      })}

      {nodes.map((n) =>
        n.state === "ok" ? (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="currentColor"
          />
        ) : (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 6}
              fill="none"
              stroke="#ff5d5d"
              strokeWidth={1}
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeOut",
                delay: n.id === "e" ? 0.5 : 0,
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#ff5d5d" />
          </g>
        )
      )}
    </motion.svg>
  );
}
