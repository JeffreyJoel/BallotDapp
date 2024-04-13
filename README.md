# Ballot Dapp

## Description
This is a simple ballot decentralized application, that allows the owner (the person that deploys the contract) to create polls at the point of contract deployment. 
The platform allows the owner to add voters, each voter can vote on a poll or delegate their votes to other registered voters.

## Folder Structure
This project is comprised of two sections, namely the frontend and smart contract sections.

### Frontend
This section allows the user interact with the ballot contract. 
This is a react project built with vite.

#### Installation
Clone the project, then run `cd frontend` to get into the frontend folder, run `npm install` to install all neccessary dependencies. Run `npm run dev` to view the project in your browser.

### Smart-contract
This section is where the smart contract resides. 
This is a hardhat project.
The ballot contract is deployed on the Ethereum Sepolia network at `0x79607153513AE04d4E1620aC9882771D0Ce2AC82`

#### Installation
Clone the project, then run `cd smart-contracts` to get into the smart-contract folder, run `npm install` to install all neccessary dependencies
