import React, { useEffect, useRef, useState } from "react";

const App: React.FC = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [role, setRole] = useState<"host" | "viewer" | "">("");
  const [roomID, setRoomID] = useState<string>("");

  useEffect(() => {
    if (!role || !roomID) return;
  }, [role, roomID]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Live Streaming</h1>
      {!role ? (
        <div>
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={() => setRole("host")}>Start Hosting</button>
          <button onClick={() => setRole("viewer")}>Join as Viewer</button>
        </div>
      ) : (
        <div>
          {role === "host" ? (
            <div>
              <h2>Hosting in Room: {roomID}</h2>
              <video ref={localVideoRef} autoPlay muted style={{ width: "600px", backgroundColor: "black" }} />
            </div>
          ) : (
            <div>
              <h2>Watching Room: {roomID}</h2>
              <video ref={remoteVideoRef} autoPlay style={{ width: "600px", backgroundColor: "black" }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
