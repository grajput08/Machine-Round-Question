import React, { useEffect, FC } from "react";
import CreateConnection from "./chat";

interface PropsUseChat {
    roomId: string,
    serverUrl: string
}

const UseChatRoom = ({ roomId, serverUrl }: PropsUseChat) => {

    useEffect(() => {
        const connection = CreateConnection({ roomId, serverUrl });
        connection.connect();

        return () => {
            connection.disconnect();
        }

    }, [roomId, serverUrl]);

}

export default UseChatRoom;