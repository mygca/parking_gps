# Projet HETIC - Hello Parkings - **Front-end**

# **TEAM**

  - Gena Nunes : UX/UI Designer
  - Mathias Vincelet: UX/UI Designer
  - Yannis Rezzoug: Développeur Back
  - Christina Stephan: Développeur Front
  - Amanda Tan: Développeur Front



# **Summary**

* [Installation](#installation)
* [Argumentaire](#argumentaire)
  * [SVG, Canvas, WebGL](#technologies) 
  * [Librairies](#librairies) 


## **Installation**

### Prerequisites:
  - PHP >= 7.1
  - Symfony 4


### Install the project:

```bash
git clone
git checkout prefront
composer install
```

### Install the database:

```bash
# Configuring the Database .env
# The database connection information is stored as an environment variable called DATABASE_URL. For development, you can find and customize this inside .env
# customize this line!
# DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name"
php bin/console d:d:c
php bin/console d:m:m
php bin/console c:c
```

### Import the tables:

Import parkings tables
```bash
php bin/console csv:parking
```

Import gares tables
```bash
php bin/console csv:gareidf
```

### Runs the app in the development mode:
```bash
yarn install

```
Open http://localhost:8000 to view it in the browser.


### Runs the app in the production mode:

```bash
yarn encore dev --watch

```
### **REACT directory**

Go to the react directory to check the front-end code 


## **Argumentaire**

### **Technologies :**

**SVG, Canvas, WebGL**

Pour dessiner notre car interactive nous avons décider d’utiliser la technologie **SVG**

Nous n’avons pas eu l’intention de créer d’image 3D pour la carte, de ce fait, la question de technologie Webgl a été très vite évacuée.

Cependant, la question du choix entre le SVG ou Canvas pour réaliser notre carte, s’est posée.


De prime abord, nous étions, certes, plus familiariser avec les SVG que Canvas. Cependant d’autres facteurs ont fait penché la balance vers le SVG.
SVG reposant sur une syntaxe XML, son interprétation par un navigateur conduit à la construction d’un arbre DOM qui comprendra l’ensemble des éléments qui constituent l’image. De son côté, Canvas n’est pas encombré par cette contrainte et une image dessinée via cette API ne donnera pas lieu à sa représentation dans un arbre DOM. l’API DOM est notoirement lente et cela se fera particulièrement ressentir si vous devez traiter de très nombreux éléments très vite (par exemple pour certaines animations) ou simultanément (pour les jeux par exemple)

Si nous devons faire la balance entre un coût de performance et la non maîtrise d’une technologie comme Canvas, il était prioritaire pour nous d’avoir un produit fonctionnel plutôt que performant. Sachant que la performance pourra être rechercher plus tard, dans une v2.


D’un point de vue plus technique, chaque élément de l’image étant accessible via l’API DOM, il est extrêmement facile de les manipuler individuellement et partiellement l’élément.
Ainsi, le SVG s’est révélé être très pratique à l’usage par l’ajout de data attribut directement sur chaque élément SVG, afin de communiquer des informations sur ce dernier, et faciliter l’intéraction entre la carte et la sidebar.


De plus, en temps que format d’image, il existe pléthore de logiciels qui permettent d’exporter au format SVG ce qui n’est pas du tout le cas avec Canvas.


### **Librairies**

#### **[axios](https://github.com/axios/axios)**
nous avons fait le choix de la librairie axios pour nos requêtes, en raison de la **facilité d’utilisation** qu’elle offre, notamment, la conversion de la data récupérer au format JSON.

#### **[leaflet](https://leafletjs.com/)**
Pour la géolocalisation de chaque parkings, nous avons utiliser Leaflet, une librairie Javascript open source, gratuit (contrairement à d’autres API comme GoogleMaps qui font payer leur service à partir de 25k clics par jour) offrant une map, avec moins de possibilités que GoogleMaps, mais suffisant pour notre projet. Cependant, le manques de fonctionnalités peut être compensé par l’ajout de plugins dans la cas où nous souhaiterions exploiter davantage la map.


#### **[react-select](https://react-select.com/home)**
**gain de temps** - Création automatique d’un composant Select très facile à utiliser et customizable. 

#### **[rellax](https://github.com/dixonandmoe/rellax)**
**gain de temps** - Simplicité d’utilisation, bien que pas nécessaire d’un point de vue technique.



