import * as sdk from 'matrix-js-sdk';
import UserInfo from '../../UserInfo';

export const tryLogin = (username, password) => {
    console.log(`attempting to login using ${username} and ${password}`);
    syncWithMatrix();
    return "success";
}

export const syncWithMatrix = async () => {
    const client = sdk.createClient({
        baseUrl: UserInfo.baseUrl,
        accessToken: UserInfo.accessToken,
        userId: UserInfo.userId,
        deviceId: "my-device-id"
    });

    console.log(client.getAccessToken());

    await client.startClient();
    
    await client.once('sync', (state, prevState, res) => {
        console.log(state); // state will be 'PREPARED' when the client is ready to use
        if(state==="PREPARED")
            tryRooms(client);
    });
}

const tryRooms = async (client) => {
    let rooms = await client.getRooms();
    rooms.forEach(room => {
        console.log(room.roomId);

        let members = room.getJoinedMembers();
        members.forEach(member => {
            console.log(member.name);
        });

        room.timeline.forEach(t => {
            console.log(JSON.stringify(t.event.content));
        });

        trySendMessage(room,client);
    });
}

const trySendMessage = (room, client) => {
    let testRoomId = room.roomId;

    let content = {
        "body": "Hello from my client",
        "msgtype": "m.text"
    };

    client.sendEvent(testRoomId, "m.room.message", content, "")
        .then((res) => {
            console.log(res)
        // message sent successfully
        }).catch((err) => {
            console.log(err);
    });
}
