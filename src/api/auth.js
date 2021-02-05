import {matrix} from '@rn-matrix/core';
import UserInfo from '../../UserInfo';

export const doStuff = () => {
    matrix.createClient(
        UserInfo.baseUrl,
        UserInfo.accessToken, 
        UserInfo.userId, 
        "my-device-id");

    matrix.start();

    matrix.createRoom()

}

