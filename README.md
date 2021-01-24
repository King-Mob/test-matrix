This is a bare bones Matrix client in React Native designed to get familiar with the Matrix ecosystem.

Install and Run instructions

requires:
* node
* yarn
* React Native environment, I use an android phone and android dev environment. Suggest follow the react native dev set up instructions.

Steps:

1. yarn install
2. create a matrix user on a home server somewhere, I've used app.element.io
3. find your baseUrl,accessToken and userId on their service
on element it's:
* Settings -> Help and About -> Advanced -> Home server for baseUrl
* Settings -> Help and About -> Advanced -> Reveal Access Token for the access token
* Settings -> General for the userId

4. create UserInfo.js in the root folder with the following structure

`
export default UserInfo = {
    baseUrl: "https://example.homeserver.com", 
    accessToken: "QRSD12312SFGS568JHZFD9",
    userId: "@myusername:example.homeserver.com"
}
`

5. npx react-native run-android (or your command equivalent)

6. Mess around with the matrix js-sdk: https://matrix.org/docs/guides/usage-of-the-matrix-js-sdk
