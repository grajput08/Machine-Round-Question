import React, { useState } from "react";
import UseChatRoom from "./useChatRoom";

const ServerChat = () => {
    const [roomId, setRoomId] = useState("general");
    const [open, setOpen] = useState(false);
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    UseChatRoom({ roomId, serverUrl });

    return (<div className="d-flex justify-content-center align-items-center">
        <div className="card p-2 w-50">
            <div className="d-flex align-items-center">
                <label className="m-2">
                    Choose the chat room:
                </label>
                <select className="w-25 m-2" value={roomId} onChange={(e: any) => setRoomId(e.target.value)}>
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
                <button className="btn btn-primary" onClick={() => setOpen(!open)}>{open ? "close button" : "open button"}</button>
            </div>

            {open && <hr />}
            {open && <> <label>
                Server URL:{' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
                <h1>Welcome to the {roomId} room!</h1>

            </>}
        </div>
    </div>)
}

export default ServerChat;