interface PropsChat {
    roomId: string;
    serverUrl: string;
}

const createConnection = ({ roomId, serverUrl }: PropsChat) => {
    return {
        connect() {
            console.log(`✅ Connecting to "${roomId}" room at ${serverUrl}...`);
        },
        disconnect() {
            console.log(`❌ Disconnected from "${roomId}" room at ${serverUrl}`);
        },
    };
};

export default createConnection;