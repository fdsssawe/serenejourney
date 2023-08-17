# <a href="" target="_blank">SereneJourney Tours</a>
Web paltform where you can find the best travel package for yourself<br/>

# 🛠️ Stack 

### Tech stack
Next.js 13, TypeScript, Zustand, Tailwind ...

### Resources
Vercel, Cosmos DB

# 🔧 How to run a project localy
### Dependencies recovery
Recover dependencies with `npm i`
### To start application
Start with `npm run dev`
### Environment variable that you have to provide
Create `.env` file and provide following variables :
GOOGLE_CLIENT_ID : creat credential in you google cloud console dashboard , copy client id
GOOGLE_CLIENT_SECRET : creat credential in you google cloud console dashboard , copy client secret
NEXTAUTH_URL : http://localhost:3000 || url of your appliaction
DATABASE_URL : connect url to your MongoDB cluster
SECRET = secret that will be used to generate jwt tokens by Next Auth

# Project decomposition
1.  ### Authorization
    
    - [x] Auth service setup
    - [ ] Mail verification service setup
    - [x] Registration , login , logout functionality in auth service
    - [x] Auth routes on server
    - [ ] Frontend auth handle
    - [ ] Unactivated account handle
    - [ ] Unactivated account limitation
    - [x] OAuth(Google)

2. ### Admin dashboard functionality
    
    - [ ] Users manipulation
    - [ ] Travel packages manipulation
    - [ ] Hotels manipulation
    - [ ] Manageble blog
    - [ ] Statistic
    - [ ] Payment gateway

3. ### Client side

4. ### Database
   
    - [x] ORM setup
    - [x] DB connection
    - [X] Schemas for users
    - [ ] Schemas for Travel packages, Hotels, Order , Products ...
    
6. ### Tests
7. 
    - [ ] Soon...

# Contacts :<br/>
📨 <a href="mailto:zhovanukolexander@gmail.com">Email</a><br/>
📱 <a href="https://t.me/sashazhov" target="_blank">Telegram</a>




