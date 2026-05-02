"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { SkillDimension } from "@/lib/roles";

export function SkillRadar({
  dimensions,
  height = 260,
}: {
  dimensions: SkillDimension[];
  height?: number;
}) {
  const data = dimensions.map((d) => ({
    dimension: d.dimension,
    Current: d.current,
    "Top Decile": d.topDecile,
  }));

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius="65%">
          <PolarGrid
            stroke="rgba(26, 23, 21, 0.12)"
            strokeDasharray="2 4"
          />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{
              fontSize: 10,
              fill: "#3D3833",
              fontFamily: "DM Sans, sans-serif",
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 5]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Current"
            dataKey="Current"
            stroke="#A0533C"
            strokeWidth={1.5}
            fill="#A0533C"
            fillOpacity={0.18}
          />
          <Radar
            name="Top Decile"
            dataKey="Top Decile"
            stroke="#2A4234"
            strokeWidth={1.5}
            fill="#2A4234"
            fillOpacity={0.1}
          />
          <Legend
            iconSize={8}
            wrapperStyle={{
              fontSize: 11,
              fontFamily: "DM Sans, sans-serif",
              paddingTop: 4,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
