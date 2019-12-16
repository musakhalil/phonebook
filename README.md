# phonebook SPA

## Dependencies
* Angular CLI: 7.0.2
* Node: 12.13.1
* Angular

Package  | Version
------------- | -------------
@angular-devkit/architect  | 0.10.2
@angular-devkit/core   | 7.0.2
@angular-devkit/schematics   | 7.0.2
@schematics/angular    | 7.0.2
@schematics/update    | 0.10.2
rxjs   |  6.3.3
typescript     |  3.1.3
PHP   | 5.6
MySQL   | 5.7.28
Connector/ODBC   | 5.3.14

## Install the project locally & test it
* Run 'git clone https://github.com/musakhalil/phonebook.git phonebook' to get the project source
* Run 'cd phonebook/phonebook-app/' to enter project directory
* Serve your backend application using the built-in development server: php -S 127.0.0.1:8080 -t backend
* Create database and Contacts table to store the contacts of phonebook in using the below lines:
  * CREATE database phbk_phonebook;
  * USE phbk_phonebook;
  * CREATE TABLE phbk_contacts( ID int not null auto_increment, fName varchar(50), lName varchar(50), Phone varchar(20), primary key(ID));
* Run 'cd frontend' to enter created project directory
* Run 'npm install' to get node_modules files required for the project
* Run 'ng serve' for a dev server. Navigate to the localhost link shown in the cmd to access the application

## Steps for building project using cmd.exe

* Create "backend" directory that will contain the connection to database/crud operations (PHP)
* Add response headers and the allowed methods to connection file
* Serve your backend application using the built-in development server: php -S 127.0.0.1:8080 -t backend
* Create database and Contacts table to store the contacts of phonebook in using the below lines:
  * CREATE database phbk_phonebook;
  * USE phbk_phonebook;
  * CREATE TABLE phbk_contacts( ID int not null auto_increment, fName varchar(50), lName varchar(50), Phone varchar(20), primary key(ID));
* Create Angular project using command line: ng new frontend
  * Confirm using routing, then choose LESS
* Install bootstrap & ngx bootstrap: npm install ngx-bootstrap bootstrap --save
* Adding bootstrap style file path to angular.json
* Import FormsModule in src/app/app.module.ts
* Importing HttpClient for sending HTTP requests in src/app/app.module.ts
* Create a service that interacts with the API: ng generate service api
* Import and inject HttpClient in service TS file
* Create Contact model
* Import the Contact model and the RxJS Observable into api service
* Create CRUD functions
* Create components for the application pages: ng generate component homepage, ng generate component contact-details
* Add Components to the Router
* Import and inject ApiService into the components

Run 'ng serve' for a dev server. Navigate to the localhost link shown in the cmd to access the application

## Notes
* If you are copying the files from the repsitory, run npm install after getting the project locally so it would install the needed modules so the project would run without any problems
