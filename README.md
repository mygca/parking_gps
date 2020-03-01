# Projet d'étude - Parking GPS

# Description du projet:

Tout d'abord je tiens à préciser les membres de l'équipe, ainsi que leur fonction:

### Composition de l'équipe 10 : 
- Gena Nunes: UX/UI designer
- Mathias Vincelet: UX/UI designer
- Christina Stephan: Développeur Front-End
- Amanda Tan: Développeur Front-End
- Yannis Rezzoug: Développeur Back-End

### Objectif du projet:

Mise en place d'une plateforme afin d'indiquer des parkings en banlieue parisienne durant les JO 2024 qui auront lieu à Paris.
Le but étant de désengorger les routes de Paris et de privilégier les transports en commun.

### Technologie utilisée:

- PHP (Symfony 4)
- API Platform
- Javascript (ReactJS)
- HTML (Twig)
- CSS (SASS)

# Installation:

Etape à suivre:

 - Cloner le git
 - Configurer le fichier ".env"
 - Utiliser les commande:
 ```bash
 composer install
 yarn install
 ```
 
 /!\ Ayez une version de PHP décente.
 
 Si un problème survient, ouvrez une issues et décrivez votre problème.
 
## Démarrer le serveur
```bash
symfony server:start
```

## Créer et inserer les datas (Optionnel)

J'ai synthétisé toute les commandes afin d'en utiliser qu'une seule.
Les étapes:
- Drop de la DB
- Création de la DB
- Insertion des données via les CSV

La commande:
```bash
php bin/console reset:db
```

## Initialisation de la BDD (Manuellement)

Créer la base de données:
```bash
php bin/console d:d:c
```

Créer les tables:
```bash
php bin/console d:m:m
```

## Importation des données

Concernant l'import des CSV dans la base de données, plusieurs commandes sont à votre disposition:

### file: Import des Trains et RER
```bash
php bin/console csv:gareidf
```

### Import de tout les CSV de Parking associés aux Gares
```bash
php bin/console csv:parking
```


## Commande utile

Supprimer une migration:
```bash
php bin/console doctrine:migrations:version YYYYMMDDHHMMSS --delete
```


# Expertise Back-End 

## Modélisation de base de données:

### Diagramme: 

![Image description](https://zupimages.net/up/20/09/6sk2.png)

**Table "Parking":**
*Tous les champs compris proviennent de nos CSV comprennant les données de parking*

**Table "Gares_IDF":**
*Tous les champs compris proviennent de notre CSV comprennant les données de tous les réseaux féroviaires proposés par la RATP et la SNCF.*

**Table "Favorite":**
*Cette table permet de stocker l'ID du Parking et l'ID du user afin de stocker en base la liste des parkings choisis par un utilisateur.*

**Table "User":**
*Cette table permet de stocker les données d'un utilisateur lors de son inscription.*

**Table "Contact":**
*Cette table permet de stocker un message d'un utilisateur (Qu'il soit connecté ou non).* **[Table amenée à être supprimée]**

**Table "CSV_File":**
*Cette table permet de stocker les fichiers CSV directement dans un dossier spécifique.* **[Table amenée à être supprimée]**

### Les relations:

**Many-To-One / One-To-Many:**
Pour cette exemple, je vais prendre comme exemple une entitée **question** et une entitée **réponse**.

La question sera le "Many", car une question sera lié à plusieurs réponses.
La réponse sera le "One", car elle sera lié a une seule et unique question.

**Many-To-Many:**

Pour illustrer cette relation, je vais prendre pour exemple mes tables **"parking"** et **"gares_idf"**.

Un parking peut être proche de plusieurs gares.
Une gare peut être proche de plusieurs parkings.

Pour synthétiser, une même entitée peut pointer en direction de plusieurs entitées, que ce soit dans un sens comme dans l'autre.

Toutes ces données sont susceptibles d'être modifiés selon leurs pertinences.

## Symfony & API:

### API:

J'ai choisi de mettre en place la plateforme API Platform, étant une extension que je ne connaissais pas,m'ayant déjà exercé sur des QueryBuilder et des "Return JsonResponse", je trouvais ça plus intéressant à étudier.
J'ai donc ajouté dans les annotations "@ApiResource" afin d'accéder aux l'entitées via la route "/api".
En paralèlle je me suis documenter sur l'annotation "@ApiFilter", malheureusement, je n'en ai pas eu besoin pour le moment.

Néanmoins, API Platform prend en compte les annotations de Doctrine. J'ai donc été dans l'obligation d'utiliser les annotations "@JoinColumn" / "@JoinColumns" / "@JoinTable", afin d'orienter le pointage des données en direction des relations ManyToMany.

### Documentation: 

Notre plateforme n'étant pas hébergé, je vais vous expliquer via des illustrations d'API Platform les routes.

Méthodes: GET / POST / DELETE

Les autres méthodes (PUT & PATCH) ne seront pas utilisés dans le projet.

**Favorite:**

![Image description](https://zupimages.net/up/20/09/1vfi.png)

*GET /api/favorites:* Liste la totalité des favoris.

*POST /api/favorites:* Insertion en base d'un favoris.

Données à envoyées:
```json
{
  "UserID": [
    "string"
  ],
  "ParkingID": [
    "string"
  ]
}
```

*GET /api/favorites/{id}:* Liste un favoris selon son ID.

*DELETE /api/favorites/{id}:* Supprime un favoris selon son ID.

**Gares:**

![Image description](https://zupimages.net/up/20/09/vkmo.png)

*GET /api/api/gares_i_d_fs:* Liste la totalité des gares.

*POST /api/api/gares_i_d_fs:* Insertion en base d'une gare.

Données à envoyées:
```json
{
  "id": 0,
  "geopoint": "string",
  "geoshape": "string",
  "nomGare": "string",
  "nomLong": "string",
  "nomIv": "string",
  "ligne": "string",
  "ligneCode": "string",
  "exploitant": "string",
  "garesId": 0,
  "indiceLigne": "string",
  "reseau": "string",
  "x": "string",
  "y": "string",
  "parkings": [
    "Object"
  ]
}
```

*GET /api/api/gares_i_d_fs/{id}:* Liste une gare selon son ID.

*DELETE /api/api/gares_i_d_fs/{id}:* Supprime une gare selon son ID.

**Parking:**

![Image description](https://zupimages.net/up/20/09/1uea.png)

*GET /api/parkings:* Liste la totalité des parkings.

*POST /api/parkings:* Insertion en base d'un parking.

Données à envoyées:
```json
{
  "Code": "string",
  "GeoPoint": "string",
  "ParkName": "string",
  "NbrPlace": "string",
  "Address": "string",
  "Zipcode": "string",
  "City": "string",
  "Handicape": true,
  "Camera": true,
  "Company": "string",
  "MaxHeight": "string",
  "FullTime": true,
  "MotoAccess": true,
  "PriceDay": "string",
  "PriceWeek": "string",
  "OpenTime": "string",
  "CloseTime": "string",
  "PlacePMR": "string",
  "PlaceElec": "string",
  "PlaceMoto": "string",
  "GaresID": [
    "Object"
  ]
}
```

*GET /api/parkings/{id}:* Liste un parking selon son ID.

*DELETE /api/parkings/{id}:* Supprime un parking selon son ID.

**Users:**

![Image description](https://zupimages.net/up/20/09/l9a3.png)


*GET /api/users:* Liste la totalité des users.

*POST /api/users:* Insertion en base d'un user.

Données à envoyées:
```json
{
  "login": "string",
  "password": "string",
  "email": "string",
  "phone": "string",
  "FirstName": "string",
  "LastName": "string",
}
```

*GET /api/users/{id}:* Liste un user selon son ID.

*DELETE /api/users/{id}:* Supprime un user selon son ID.



