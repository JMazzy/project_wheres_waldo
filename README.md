project_wheres_waldo
====================

He totally didn't pay his bill.

create a game that allows players to load an image and "tag" various characters within it. The application should remember which locations in the photo the user tagged with which characters


Step 1:
The first step is to enable the functionality for registering a user's click somewhere on the photo. This should seem familiar...

Build a basic controller and view which contains a photo.
When the user clicks on the photo, it should pop up a "Targeting Box" which surrounds the click area.
There should be a dropdown menu where the user can select from the available characters to associate with that Tag.
When the user selects a character, it should create a Tag associated with that character at that location. Just do this on the front end for now.
When the user hovers over the photo, all current Tags should be visible. When the mouse leaves the photo, Tags should disappear and the photo should look normal.
For now, refreshing the page will reset the photo Tags. That's okay.


Step 2:
Now it's time to hook up the back end.

Set up the Rails models needed to persist a given Tag and to manage the list of available characters. You may be interested in setting up a custom validator for Tag validity...
Make your front-end Tag event send an AJAX request to the back end which persists that event.
Return the proper object or template and update the DOM with the successful Tag only upon successful persisting of the event.
Verify that Tag now persists the data in your Rails app and only updates the DOM on success.
Set up your app to load all Tags on the image when the page refreshes.
Implement a DELETE button or link on each Tag which will remove the persisted Tag and then remove the Tag from the DOM upon success.


Step 3:
Finally, gamify this! We'll start by assuming a single player / high score model. You'll need to keep track of Games.

When the page is refreshed, create a new Game and record when it starts.
The game's score should be displayed as an ever-decreasing counter on the screen.
The game finishes when the user creates tags for every character.
When the game finishes, record the time of its completion for scoring purposes.
Prompt the user to input their name if it's a new high score.
Show the highest scores on one side of the screen
(Optional) Write a script which cleans up the database so unfinished games don't clutter it up with every refresh.


Troubleshooting
Is your Success callback not running despite having a 200 OK header? If your dataType is set to accept JSON, you most likely sent back bad JSON and it couldn't be parsed. Note: Check both the Complete and Error callbacks to verify that Complete always runs and that Error is not running. You can use Complete to examine the returned XHR object for the specific details of the response. See here and here for more.
