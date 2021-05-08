# Quiz Application REST API

## Running locally:

1.  Git Clone the Repository -
    ** git clone https://github.com/SilvinPradhan/Quiz-App-MEAN.git quiz-application-clone **
2.  Go into the Project -
    ** cd quiz-application-clone **
3.  Install the Packages in both the folders:
    ** npm install **
    ** cd quiz-app-mean **
    ** npm install **
4.  Run Server and Client Side Locally

-   For Client Side: [If you are inside the Folder(quiz-app-mean)]:
    ** ng serve -o **
-   For Server Side: [If you are inside the root folder, i.e, quiz-application-clone]:
    Open another terminal,
    // It opens the Server to test published End Points

*   Type the command in the terminal

    ** npm run server **

<hr/>

# Images

1.  Web View
<img src="images/capture1.PNG" width="700"/>
<hr />

2.  Mobile Responsive
    <img src="images/Capture2.PNG" width="700"/>

<hr/>

3.  Create Quiz- End point
    <img src="images/Capture3.PNG" width="700"/>

<hr/>

4.  Submitted the Quiz
    <img src="images/Capture4.PNG" width="700"/>

<hr/>
5.  Get All Quizzes -End Point
 <img src="images/Capture5.PNG" width="700"/>

6. Get one quiz with the End Point
   ** router.get('/quiz/:id', listSingle); **
   This end point is used on fetching the data from the MongoDB using its "\_id" value.
