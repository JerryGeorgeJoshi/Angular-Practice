Data Binding (4 types)
interpolation {{}}
attribute/style  [src]
event binding  (eventname) (click)
two-way binding [(var)]


app component - container component
to create component: ng g c component_name
to explore: decorator in ts
@ decorator used in components

each component has 'selector name'

to explore: two-way binding

Pipes:
Functions  () xxxx    symbol: |
used for presenting a 'formatted output'
eg: displaying username in capital, date format, currency, dollars, etc

**********************************************
session 3
custom pipe:
user defined pipes
pipe name is used where we need to integratte...
class name of the pipe is used to import on the ts file

DIRECTIVES:
used to change or edit the DOM  like apply styles and add behaviors dynamically without creating another html files for changes...it allows u to edit the html dom from the angular itself
types:
structural directive - *ngIf, *ngfor,...
attribute directive
custom directive

BOOTSTRAP:
container
grid 
card
when using *ngFor or *ngIf...import 'commonModule' in tht respective TS file

ROUTING:
create a navbar component - paste the bootstrap navbar to html file
then import the routerlink and routerlinkactive to respective ts file
go to app.routes.ts and configure it by setting 'path' and 'component'
now mention the selector name of navbar at main html file (component.html) along with <router-outlet></router-outlet>

READIG DATA FROM FILE: (session 6)
import foodDataFromFile from "foodData"
app.routs.ts plays a crucial role in routing or navigation
route parameters are for communicating within the components..(eg. id in json data file(unique ones))
-----done with session 6 ------------
Services:
sharing common functinality to components is called as service.
it is responsible for to avoid repetion of data between components.
fetch of data from external API
command: ng g s service_name

REST API:
create an object for clienthttp in service and paste the link(u also need to import http client,provide httpclient also)
with the help of constructor in a component , create a obj for the service class and access tht method and assign tht data to a variable here in this component
(also don't forget to write code in tht respective html file)
RXJS INTRO--
---------done with session 7--------
-------------JUST WATCHING: -------------
asyc pipes(transforming the data in ts)  can be used like subscribe in rxjs.
use $ symbol at the end of the variable for obervable variable.

OPERATORS IN RXJS:
used to filtering or modifying the incoming data from server

pipe() in rxjs:
pipe() has the ability to handle multiple operators and errors

INTERFCAE:
ng g i interface_name
a single ts file is created
export interfacename is presented there (starting letter I)
use that as data type for any other component

subject is another operator in rxjs
catchError is also in rxjs
of also
finalize also

QUESTIONS******************
wht is lifecycle
wht r the life cycle mehtods u know in angular
when to use which?
which lifecyle fires first and next?

SIGNALS:
used to avoid entire reloading of components...just the part which undergoes changes should be reloaded
optimization done--performance





