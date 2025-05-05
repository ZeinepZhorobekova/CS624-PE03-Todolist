# INPUT
The application accepts user input through a text field where users type their to-do items. Interaction occurs via on-screen buttons:
"Add Todo" to submit new tasks
Filter tabs ("ALL," "COMPLETED," "INCOMPLETE") to control task visibility
All input is temporarily stored in the application's state.

# PROCESS
When a user submits a task, the app stores it in an array using React's useState hook. Each to-do is an object containing an ID, description, and completion status.
Tapping a task toggles its completed state.
The app uses filter tabs to display tasks based on their status (all, completed, or incomplete).
State changes (add, toggle, or filter) automatically trigger UI re-renders.
New tasks are also logged to the console for debugging or verification.

# OUTPUT
The app displays a list of tasks on the screen. Users can:
View all tasks
Filter tasks by status
Toggle completion status by tapping a task
Completed tasks are visually crossed out, and updates are reflected in real time.

