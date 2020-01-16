# Projet d'étude - Parking GPS


Etape à suivre:

 - Cloner le git
 - Edit le fichier ".env" selon vos choix
 - Utiliser la commande "composer install"
 
 
 /!\ Ayez une version de PHP décente.
 
 Si un problème survient, ouvrez une issues et décrivez votre problème.


Concernant l'import des CSV dans la base de données, 3 commandes sont à votre disposition:

### file: parking_relais.csv
```bash
php bin/console csv:import
```
### file: parking_saemes
```bash
php bin/console park:saemes
```
### file: gares_idf
```bash
php bin/console csv:gareidf

```



## Côté DEV

### Si vous souhaitez faire du JS / SASS

Pour faire du JS (React), il vous suffit de vous rendre dans: assets/js/app.js

Pour faire du SASS, il vous suffit de vous rendre dans: assets/css/app.scss

Pour utiliser WEBPACK:

```bash
yarn encore dev --watch

## CTRL + C pour arreter le process
```

