
# **Test myConnectedCompany**
<!-- <details>
  <summary>Introduction</summary>

  <br> -->

  > ## **Introduction**

  <br>

  Le but de ce test sera d'évaluer votre compétence d'apprentissage, d'autonomie et votre logique.

  Vous pouvez me demander de l'aide, comme si j'étais votre collègue. Je suis disponible par email et sur Discord (Voir Ressource).

  Pour cela vous devez créer une api REST en suivant le backlog fournis, le langage utilisé n'est pas important, cependant, si vous voulez utiliser le starter-kit, vous devez utiliser du Javascipt. L'utilisation de git avec une solution en ligne est obligatoire dans votre projet et faire des commits construits et explicites (avec un message de commit expliquant ce que vous avez fait dans celui-ci), vous m'enverrez le lien du repositorie en ligne en tant que rendu.

  Avant d'envoyer votre rendu, vous pouvez y rajouter une note de debriefing sur le projet.(ressentie, difficulté, compréhension)

  P-S: Ne cherchez pas à faire compliqué et n'utilisé pas quelque chose que vous ne comprendrez pas.

  <br>

<!-- </details> -->

____

<!-- <details>
  <summary>Backlog</summary> -->
   <br>

   > ## **Backlog**

   <br>

   ### **Projet : MyTaskBoard (Trello like back-end only)** 

   <br>

> STORY 0 : <br> **EN TANT QUE** développeur <br> **JE VEUX** produire du code propre et le mettre sur git <br> **AFIN DE** qu'il soit compréhensible par d'autres développeurs. Le mettre sur un repository en ligne, type: Github, Gitlab, Bitbucket ou autres.

<br>

Si vous n'utilisez pas le starter-kit:

> STORY 1 : <br> **EN TANT QUE** développeur <br> **JE VEUX** initialiser le projet <br> **AFIN D'** avoir une base pour commencer <br> **DoD** . 

Si vous utilisez le starter-kit :

> STORY 1 : <br> **EN TANT QUE** développeur <br> **JE VEUX** comprendre l'architecture du projet <br> **AFIN DE** me familiariser avec le projet <br> **DoD** . 

<br>

> STORY 2 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** pouvoir requéter un élément sur la route /cards <br> **AFIN D'** avoir mon premier controller <br> **DoD** Vous pouvez récupérer un tableau vide par le biais d'une méthode GET.

<br>

> STORY 3 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** avoir le CRUD d'une carte <br> **AFIN D'** avoir une base pour les cartes <br> **DoD** Récupérer une carte par rapport à un ID.<br>Pouvoir récupérer toutes les cartes.<br>Créer une carte et générer un ID.<br>Pouvoir mettre à jour une carte.<br>Pouvoir supprimer une carte par rapport à un ID. <br> Model d'une carte :
>> - Nom de la carte
>> - Membres (ne sera pas utiliser tout de suite)
>> - Description
>> - Etiquettes
>> - Checklist
>> - Durée d'une tâche ou Date de fin de la tâche (Deadline / milestone)
>> - Date et Temps de la mise à jour de la carte
>> - Date et Temps de création de la carte

<br>

> STORY 4 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** avoir le CRUD d'une liste <br> **AFIN D'** y mettre les cartes <br> **DoD** Faire le  CRUD des listes. <br> Model d'une liste :
>> - Nom de la liste
>> - Tableau qui contiendra des cartes
>> - Date et Temps de création de la liste

<br>

> STORY 5 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** créer une carte dans une liste <br> **AFIN DE** pouvoir trier mes tâches <br> **DoD** Une liste contient des cartes.

<br>

> STORY 6 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** pouvoir mettre à jour une carte <br> **AFIN DE** pouvoir la changer de liste <br> **DoD**  Vous devez récupérer une carte par le biais de son ID ou de son nom, puis transférer l'objet de la carte dans une nouvelle liste.

<br>

> STORY 7 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** pouvoir créer un tableau <br> **AFIN DE** créer un tableau par projet. <br> **DoD** Vous devez créer un tableau de projet qui contiendra des listes de tâches. Un tableau de projet contient une liste de tags qui pourront ëtre utilisés par les tâches. <br> Modèle de Tableau :
>> - Nom du tableau
>> - Tableau qui contient des listes
>> - Date et Temps de la mise à jour du tableau
>> - Date et Temps de création du tableau
>> - Tableau d'étiquettes

<br>

> STORY 8 :  <br> **EN TANT QUE** développeur <br> **JE VEUX** ajouter des utilisateurs<br> **AFIN D'** attribuer des tâches aux utilisateurs. <br> **DoD** Créer le CRUD utilisateur, <br> Modèle d'utilisateur :
>> - Pseudo
>> - Email
>> - Date et Temps de l'utilisateur
>> - Tableau dans lequel je suis membre ou propriétaire (Attention, ne pas faire la feature en rapport tout de suite, story 9)

<br>

> STORY 9 : <br> **EN TANT QUE** développeur <br> **JE VEUX**  qu'un tableau ait un propriétaire et qu'il puisse ajouter des utilisateurs <br> **AFIN D'** avoir une équipe et partager mon projet. <br> **DoD** Refactoriser la création des tableaux pour qu'on puisse y ajoute un utilisateur. L'ID du tableau sera ajouté dans le tableau d'appartenance de l'utilisateur. Un propriétaire peut ajouter un ou des membres dans son tableau.

<br>

> STORY 10 (Bonus) :  <br> **EN TANT QUE** développeur <br> **JE VEUX**  créer un log pour chaque activité <br> **AFIN DE** suivre son avancement et les modifications.  <br> **DoD** Créer un service qui va générer les logs par rapport aux tableaux, aux tâches et aux utilisateurs.

<br>

> STORY 11 (Bonus) :  <br> **EN TANT QUE** développeur <br> **JE VEUX** mettre en place une BDD<br> **AFIN D'** enregistrer des données et de les rendre persistante <br> **DoD** Refactoriser le code pour le rendre compatible à la mise en base de données.

<br>

> STORY 12 (Bonus) :  <br> **EN TANT QUE** développeur <br> **JE VEUX** avoir un système d'authentification<br> **AFIN DE** sécuriser mon API <br> **DoD** Ajouter l'enregistrement de compte avec un chemin register, avec un mot de passe, qui sera hasché (chiffré) dans la base de données.<br> Un chemin pour le login qui va comparer le mot de passe donner par l'utilisateur avec celui de la BDD et lui retourner un JWT afin de pouvoir utiliser les différentes routes qui seront sécurisées.<br>L'ajout d'un middleware vous permettant de verifier le JWT à l'appel d'une route.

   <br>

<!-- </details> -->

____

<!-- <details>
  <summary>Ressources</summary> -->

  <br>

   > ## **Ressources**

   <br>

   - Contact:
     - Discord : Sauronox#0117
     - Email : alan.drieux@myconnectedcompany.com

 <br>

   - Apprendre NodeJS / JS:
     - https://grafikart.fr/formations/nodejs
     - https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466231-demarrez-votre-serveur-node
     -  https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript/6278450-enregistrez-vos-donnees-avec-des-types-de-donnees
     - https://www.youtube.com/watch?v=s_VMwHFSjXY&list=PLuWyq_EO5_AI83Z2JdSPdJ-81QPvI3cxC

 <br>

   - [Apprendre git](https://grafikart.fr/formations/git)
   - [Documentation ExpressJS](https://expressjs.com/fr/)
   - [Documentation DB ORM sequelize](https://sequelize.org/)
   - [Tutoriel utiliser mysql avec nodejs](https://sequelize.org/)

 <br>

   - Docker :
     - [Presentation de Docker by Grafikart](https://grafikart.fr/tutoriels/docker-intro-634)
     - https://openclassrooms.com/fr/courses/2035766-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker
     - https://grafikart.fr/tutoriels/docker-stack-web-635

   <br>

  Si vous ne trouvez pas votre bonheur, google vous aidera.

   <br>

<!-- </details> -->

____

<!-- <details>
  <summary>Starter-kit</summary> -->

<br>

<p style="color:white;background-color: #f47241;padding:5px 10px;border-radius: 30px;font-weight: bold;text-align:center;font-size:30px">Starter-kit</p>

<br>

  Le starter kit est fait en JavaScript avec le technologie Nodejs et le micro framework Express.
  En plus un docker-compose est disponible pour la partie bonus du backlog.

<br>

<p style="color:white;background-color: #f47241;padding:5px 10px;border-radius: 15px;font-weight: bold;width:200px;text-align:center;">Prérequi</p>

- [NodeJS](https://nodejs.org/download/release/v16.12.0/) version : 16.x.x(Direct Download)
- [yarn](https://classic.yarnpkg.com/lang/en/) version : 1

<br>

<p style="color:white;background-color: #f47241;padding:5px 10px;border-radius: 15px;font-weight: bold;width:200px;text-align:center;">Pour lancer le projet </p>

<!-- <details>
  <summary style="border-bottom: 1px solid #f47241;width:150px">
    Pour windows
    <img style="vertical-align:middle;" src="https://img.icons8.com/windows/32/000000/windows-10.png"/>
  </summary>
-->
  <br> 

  **Pour windows**
   <img style="vertical-align:middle;" src="https://img.icons8.com/windows/32/000000/windows-10.png"/>

  Nodejs version Manager (Optionel) :
  - https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows

  <br>

  Récuperer le projet et l'installer (être dans le même repertoire que le dossier exo)
  ```bash
    cd  exo/starter-kit
    yarn
    yarn start
  ```

<!-- </details> -->

<br>

<!-- <details>
  <summary style="border-bottom: 1px solid #f47241;width:250px">
    Pour Mac et Linux
    <img style="vertical-align:middle;" src="https://img.icons8.com/windows/32/000000/mac-os.png"/>
    <img style="vertical-align:middle;" src="https://img.icons8.com/windows/32/000000/linux.png"/>
  </summary> -->

  **Pour Mac et Linux**
    <img style="vertical-align:middle;" src="https://img.icons8.com/windows/32/000000/mac-os.png"/>
    <img style="vertical-align:middle;" src="https://img.icons8.com/windows/32/000000/linux.png"/>

  <br>

  Nodejs version Manager (Optionel) :
  ```bash
    yarn global add n
  ```

  <br>

  Récuperer le projet et l'installer (être dans le même repertoire que le dossier exo)
  ```bash
    cd exo/starter-kit
    yarn
    yarn start
  ```

  <br>

<!-- </details> -->

  <br>

  <p style="color:white;background-color: #f47241;padding:5px 10px;border-radius: 15px;font-weight: bold;width:250px;text-align:center;">Lancer le docker-compose </p>

  - Prérequis avoir docker engine ou desktop: 
    - [windows](https://docs.docker.com/desktop/windows/install/)  
    - [macos](https://docs.docker.com/desktop/mac/install/)   
    - [linux](https://docs.docker.com/engine/install/) [docker-compose](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)

  <br>

  Dans votre console de commande :
  ```bash
    cd  exo/starter-kit
    # en premier plan
    docker-compose up
    # en arriere plan
    docker-compose up -d
    # voir les logs 
    docker-compose logs
  ```

  <br>

<!-- </details> -->