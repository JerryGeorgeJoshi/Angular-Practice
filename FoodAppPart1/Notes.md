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