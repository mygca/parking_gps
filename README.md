# Projet d'étude - Parking GPS


Etape à suivre:

 - Cloner le git
 - Edit le fichier ".env" selon vos choix
 - Utiliser la commande "composer install"
 
 Si un problème survient, ouvrez une issues et décrivez votre problème.


Concernant l'import des CSV dans la base de données, 3 commandes sont à votre disposition:

```bash
(file: parking_relais.csv)
php bin/console csv:import
============================
(file: parking_saemes)
php bin/console park:saemes
============================
(file: gares_idf)
php bin/console csv:gareidf

```
