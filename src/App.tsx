import React, { useRef, useState } from "react";

const App: React.FC = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [roomID, setRoomID] = useState<string>("");
  const [isJoined, setIsJoined] = useState<boolean>(false);



  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>ZEGOCLOUD Video Call</h1>
      {!isJoined ? (
        <div>
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button onClick={() => {}} style={{ padding: "8px 16px" }}>
            Join Room
          </button>
        </div>
      ) : (
        <div>
          <h2>Room ID: {roomID}</h2>
          <button onClick={() => {}} style={{ padding: "8px 16px", marginBottom: "20px" }}>
            Leave Room
          </button>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <div>
              <h3>Local Video</h3>
              <video
                ref={localVideoRef}
                autoPlay
                muted
                style={{ width: "300px", height: "200px", backgroundColor: "black" }}
              ></video>
            </div>
            <div>
              <h3>Remote Video</h3>
              <video
                ref={remoteVideoRef}
                autoPlay
                style={{ width: "300px", height: "200px", backgroundColor: "black" }}
              ></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
