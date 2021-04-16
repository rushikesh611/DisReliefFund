Fundraising for disaster relief: support friends and family at a time when they need it most, raise money for them without an intermediary.
Project for Rakathon 2021
## Prerequisite
1. Install [Node JS](https://nodejs.org/en/) and [Ganache](https://www.trufflesuite.com/ganache)
2. Create new workspace in Ganache
3. Install Metamask as Google Chrome Extension and create Custom RPC Network with ganache RPC server link. Then import an account using Ganache MNEMONIC(Private key for address).

## Getting Started
1. Install all the dependencies
``` 
npm install 
```
2. Under Ethereum directory, open `deploy.js` and update the mnemonic code(Private key for address) and end point link(Ganache RPC Server Link). Then open `web3.js` and update end point link.

3. In the Ethereum directory, compile the contract
```
node compile.js
```
then deploy the contract
```
node deploy.js
```
Copy the contract deploy address and replace it in `factory.js` file.

4. To run the application
run the development server:
```
npm run dev
```
Make sure Metamask account is connected to the ganache server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots
![image](https://user-images.githubusercontent.com/58942299/114221174-96d4d800-998a-11eb-91b8-9a1b9b328f0f.png)

![image](https://user-images.githubusercontent.com/58942299/114227502-b53ed180-9992-11eb-914d-526c4cdf460a.png)

![image](https://user-images.githubusercontent.com/58942299/114227572-cd165580-9992-11eb-8196-d921f737b240.png)

![image](https://user-images.githubusercontent.com/58942299/114227700-f0d99b80-9992-11eb-8069-eafe46e65b0a.png)

![image](https://user-images.githubusercontent.com/58942299/114227874-3c8c4500-9993-11eb-9f50-1eaa0a3ce185.png)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


