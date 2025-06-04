# CS 308 Software Engineering  
# SE-project  

## EatMoveSleep - Health and Fitness Tracker (Web)

## Table of Contents  
1. [Project Definition](#project-definition)  
2. [Objectives](#objectives)  
3. [Technology Stack](#technology-stack)  
4. [Design and Implementation Approach](#design-and-implementation-approach)  
5. [Overview of Objectives and Scope](#overview-of-objectives-and-scope)  
6. [Breakdown of Responsibilities](#breakdown-of-responsibilities)  
7. [Entity Relationship (ERD) and Use Case Diagram](#entity-relationship-erd-and-use-case-diagram)  
8. [Project Management](#project-management)  
9. [Figma Web Mockup](#figma-web-mockup)  

## Project Definition  
EatMoveSleep is a user-friendly **web application** designed to help users track their exercise, sleep, and diet without relying on cloud storage. The application ensures privacy by storing all data locally and offering optional encryption for security. Additionally, it provides personalized insights and recommendations based on user habits.

## Objectives  
The main goal of this project is to provide an intuitive and effective **web platform** that enables users to monitor their sleep, exercise, and diet. The project focuses on ensuring total data privacy through local storage while offering personalized health improvement suggestions.

## Technology Stack  
The project will utilize the following technologies:

- **Frontend:** React for fast, responsive, and interactive web interfaces  
- **Backend:** Java with Spring Boot for data management and API reliability  
- **Database:** MySQL for local data storage without requiring an internet connection  
- **Styling:** Standard CSS for a clean, customizable design  
- **Project Management:** Trello for task tracking and GitHub for version control  
- **Security:** Encryption mechanisms for enhanced user data protection  

## Design and Implementation Approach  
The web application follows a modular design, ensuring that each feature functions independently while seamlessly integrating into the system. The user interface (UI) prioritizes offline functionality and ease of use. Backend operations handle data processing and storage efficiently, with a strong emphasis on security using encryption mechanisms.

The **Model-View-Controller (MVC)** paradigm ensures scalability and maintainability. Optimized MySQL queries support smooth performance, and extensive testing—including general functionality tests and unit tests—will be conducted.

## Overview of Objectives and Scope  
EatMoveSleep will provide users with:

- **User Profile Management** (age, weight, fitness goals)  
- **Diet Tracking** (caloric intake, meal logging)  
- **Exercise Tracking** (workout logging, calorie burn estimation)  
- **Sleep Monitoring** (tracking sleep duration, generating insights)  
- **Personalized Recommendations** (meal plans, exercise routines)  
- **Goal Setting & Progress Tracking** (visual charts, goal achievement tracking)  
- **Offline Functionality** (all data stored locally)  
- **Data Security & Privacy** (encryption for enhanced protection)  

## Breakdown of Responsibilities  
Each team member is assigned a specific role to ensure efficient project execution:

- **Muris:** Backend development, Spring Boot API implementation  
- **Nedžma:** SQL database management, data security, and encryption  
- **Meliha:** Feature implementation, goal tracking, personalized insights, and data visualization  
- **Lamija:** Frontend development, UI design using React for web  

## Entity Relationship (ERD) and Use Case Diagram

### Use Case Diagram  
The **Use Case Diagram** represents key functionalities available to users, including profile management, nutrition tracking, sleep monitoring, and workout recording. Some features depend on others, such as personalized insights requiring input from goal tracking and recorded activities.

### ERD (Entity Relationship Diagram)  
The **ERD** visually represents the EatMoveSleep database schema. The central entity, `USER`, connects to `WORKOUT`, `MEALS`, `SLEEP_RECORDS`, and `GOALS`. Each entity contains relevant attributes such as `calories_burned` for `WORKOUT` and `sleep_quality` for `SLEEP_RECORDS`. Relationships between entities ensure data consistency.

## Project Management  
The team will use **Trello** to track progress with weekly task updates. **GitHub** will be used for version control, ensuring collaborative development and maintaining a shared codebase.

## Figma Web Mockup  
A **Figma prototype** has been created to visualize the **web application's** design and layout.

### Students working on the project:

- **Meliha Mašić**  
- **Muris Mušija**  
- **Hamza Hadžiabdić**  
- **Nedžma Hadžihasanović**  
- **Lamija Rašidagić**
