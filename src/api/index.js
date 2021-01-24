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
        userId: UserInfo.userId
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
    });
}

