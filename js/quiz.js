$(document).ready(function() {

  $('#resetBtn').click(function() {
      location.reload();
      quizStatus == 0;
  });

  (function() {
      function buildQuiz() {
          // variable to store the HTML output
          const output = [];

          // for each question...
          myQuestions.forEach(
              (currentQuestion, questionNumber) => {

                  // variable to store the list of possible answers
                  const answers = [];

                  // and for each available answer...
                  for (letter in currentQuestion.answers) {

                      // ...add an HTML radio button
                      answers.push(
                          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                      );
                  }

                  // add this question and its answers to the output
                  output.push(
                      `<div id="question${questionNumber}" class="question"> ${currentQuestion.question} </div>
          <div class="answers" style="font-size: 1.2em; padding-left: 20px;"> ${answers.join('')} </div>`
                  );
              }
          );

          // finally combine our output list into one string of HTML and put it on the page
          quizContainer.innerHTML = output.join('');
      }

      var quizStatus = 0;

      function showResults() {

          if (quizStatus == 0) {
              // gather answer containers from our quiz
              const answerContainers = quizContainer.querySelectorAll('.answers');

              // keep track of user's answers
              let numCorrect = 0;

              // for each question...
              myQuestions.forEach((currentQuestion, questionNumber) => {

                  // find selected answer
                  const answerContainer = answerContainers[questionNumber];
                  const selector = `input[name=question${questionNumber}]:checked`;
                  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                  // if answer is correct
                  if (userAnswer === currentQuestion.correctAnswer) {
                      // add to the number of correct answers
                      numCorrect++;

                      // send feedback
                      $('#question' + questionNumber).append('<p class="feedback" style="color: #36BF48; font-weight: bold">Good job!</p>');
                  }
                  // if answer is wrong or blank
                  else if (userAnswer !== currentQuestion.correctAnswer) {

                      // send feedback
                      $('#question' + questionNumber).append('<p class="feedback" style="color: #FF0000; font-weight: bold">Take another look at the examples in this lesson.</p>');
                  }
              });

              // show number of correct answers out of total
              resultsContainer.innerHTML = `<div style="margin-left: 65%; margin-bottom: 15px;">Score: ${numCorrect} out of ${myQuestions.length}</div>`;

              quizStatus++;

              // change button to reset
              $('#submitBtn').hide();
              $('#resetBtn').toggle();

          }
      }

      const quizContainer = document.getElementById('quiz');
      const resultsContainer = document.getElementById('results');
      const submitButton = document.getElementById('submitBtn');
      const myQuestions = [{
              question: '<br><br><p style="font-size: 1.2em;">1. Janelle is excitedly telling her friend Reina how her job interview went. Reina keeps texting her boyfriend.</p><br><br>',
              answers: {
                  a: "Respect",
                  b: "Disrespect"
              },
              correctAnswer: "b",
              feedback: {
                  a: "Take another look at the examples in this lesson.",
                  b: "Good job!"
              }
          },
          {
              question: '<br><br><p style="font-size: 1.2em;">2. I can see your point about the cost of the streetlights, but what about the nighttime safety of the people who live in the neighborhood?"</p><br><br>',
              answers: {
                  a: "Respect",
                  b: "Disrespect"
              },
              correctAnswer: "a"
          },
          {
              question: '<br><br><p style="font-size: 1.2em;">3. All of Ron’s friends keep asking him to go camping with them next month, but he doesn’t enjoy the outdoors. His friends won’t stop nagging him.</p><br><br>',
              answers: {
                  a: "Respect",
                  b: "Disrespect"
              },
              correctAnswer: "b"
          },
          {
              question: '<br><br><p style="font-size: 1.2em;">4. Because our cousin LeVar has asthma, we always dust and vacuum before he spends the night at our house.</p><br><br>',
              answers: {
                  a: "Respect",
                  b: "Disrespect"
              },
              correctAnswer: "a"
          },
          {
              question: '<br><br><p style="font-size: 1.2em;">5. Stacy, who is frightened of dogs, meets Jarrod and his dog Thor out on a walk. Jarrod says, “Don’t be scared, Stacy. Thor is really gentle. Just try rubbing his ears.”</p><br><br>',
              answers: {
                  a: "Respect",
                  b: "Disrespect"
              },
              correctAnswer: "b"
          },
          {
              question: '<br><br><p style="font-size: 1.2em;">6. I love oyster-flavored Jiffy Snax! Doesn’t everybody?</p><br><br>',
              answers: {
                  a: "Respect",
                  b: "Disrespect"
              },
              correctAnswer: "b"
          }
      ];

      // Kick things off
      buildQuiz();

      // Event listeners
      submitButton.addEventListener('click', showResults);
  })();

});