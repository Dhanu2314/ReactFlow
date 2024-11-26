import React from "react";
import ReactFlow, { addEdge, MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";



const initialNodes = [
  {
    id: "1",
    type: "input", // Input node
    data: { label: "Start Node" },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: { label: "Middle Node" },
    position: { x: 250, y: 150 },
  },
  {
    id: "3",
    type: "output", // Output node
    data: { label: "End Node" },
    position: { x: 250, y: 300 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3" },
];

function App() {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  const onConnect = (connection) => setEdges((eds) => addEdge(connection, eds));

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
