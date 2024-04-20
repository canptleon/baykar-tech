
# BAYKAR TECH Frontend Projects

These projects have been prepared for the Baykar Tech frontend technical job interview.

**Thank you for taking the time to review my projects. I had limited time to develop them, but I hope you like what I've created.**

## Projects

- [Interface Design Task](#interface-design-task)
- [Quiz App](#quiz-app)

## Interface Design Task

**LIVE DEMO: https://baykar-frontend-fiyv2q8js-arda-keyisoglus-projects.vercel.app/**

For this part of the project, your task is to code the responsive interface design provided in the Figma file. You can choose to implement it using either Tailwind CSS or Bootstrap. I chose Bootstrap for this task.

I took each photo separately, which took a considerable amount of time. Although it was time-consuming, I wanted to demonstrate my ability to work meticulously, piece by piece. Alternatively, I could have taken larger photos and continued, but I preferred to work with smaller pieces to showcase my attention to detail.

Regarding CSS, I decided to use a mix of custom CSS and Bootstrap to demonstrate my versatility and ability to work with various approaches.

### Requirements

- Implement the interface design provided in the Figma file.
- Ensure that the design is responsive across different screen sizes.
- Utilize dynamic design features where necessary (e.g., sliding elements with forward-backward buttons).


### Technology Stack
- **Frontend**: Next.js 14
- **Languages**: JavaScript
- **Styling**: Bootstrap 5
- **Icons**: react-icons
- **Carousel**: SwiperJs



## Quiz App

**LIVE DEMO: https://baykar-quizapp-3zt00vw45-arda-keyisoglus-projects.vercel.app/**

In this project, the primary focus was on developing a JavaScript application, specifically a Quiz App. While I used Bootstrap for the previous task to demonstrate my skills, I decided to utilize Tailwind CSS for the Quiz App to showcase my proficiency with it. Additionally, I ensured that the design is responsive across different screen sizes.

As an additional feature, I created a general fetching folder. With this setup, you can perform GET, POST, PUT, and DELETE requests with just a string, and a single Axios function handles the fetching. Although this functionality wasn't required for this project, I wanted to demonstrate my ability to optimize and streamline code.

For managing test answers, I employed Context API. While a simple useState could have sufficed for this purpose, I wanted to demonstrate my experience with state management.

I didn't want to alter the data fetching process for similar technical projects. However, I wanted to develop a real quiz application. One idea I have is to create a country flag quiz app, randomly selecting 20 flags out of 100 countries. Interestingly, I developed a similar project using React three years ago while I was learning the framework. Additionally, I have experience developing an Android mobile app project as QuizApp, which you can also find on my GitHub profile.

### Description

The Quiz App is designed to consist of 10 questions, each with multiple-choice answers (A-B-C-D). Question texts are fetched from the provided API endpoint:

[Question API](https://jsonplaceholder.typicode.com/posts)


### Functionality

- The quiz consists of 10 questions with multiple-choice answers.
- Each question is displayed for 30 seconds.
- During the first 10 seconds, the user cannot select an answer. After 10 seconds, the user can select an answer until the 30-second mark, after which the next question is displayed automatically.
- Once a question has passed, the user cannot return to it.
- After completing the quiz, the user's answers to each question are displayed in a tabular format.

### Technology Stack
- **Frontend**: Next.js 14
- **Languages**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios
- **State Management**: Context API
