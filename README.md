# ToDo-List

Created a To Do List Web App

In this project, I focused on building a Web App by heavily using AngularJS.

* The design was solely done by BootStrap.
A user can add a task to be completed to the list. 

The user has to type more than 3 letters and if it is less than 3, the edge of the box will be changed to red color.

I also used JavaScript's localStorage property, so that whenever a user adds a task to the list, it will be saved
into the localStorage. Therefore, even if the user refreshes the page after adding a task, it will be stored into the
local storage and will be shown again without being removed.

There is a little checkbox on the left side of each taskbar, and this is for user to check if the task is done. Putting a checkmark in the checkbox means the user has finished a task. 

Moreover, there is a timestamp shown below every taskbar. This is generated when the user adds a task to the task list, and 
I used Date.now() JavaScript function, therefore, it will put the time when the task was created.

There are three buttons given on the bottom of the page.
1. 'Completed'
2. 'Active'
3. 'All'

'Completed' button --> it will filter the list and show the ones that has a check on the
checkbox, which means the task is completed.

'Active' button --> it will show the ones that have not been completed yet, and the

'All' button  --> just show all of the task on the page.

I Also tried to focus on grouping the lines of code that perform similar tasks.
For example, in my index.html, it only has few lines of code. However, those few lines of code get called by different files,
such as directives.js, controllers.js and services.js.
This makes my index.html so much easier to read.
