const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

// Let's set some course.completed properties to true for testing
courses[0].completed = true;
courses[1].completed = true;
courses[4].completed = true;

// Get all of the DOM elements needed 
const coursesContainer = document.querySelector('#coursesContainer');
const totalCreditsElement = document.querySelector('#total-credits');
const allCoursesButton = document.querySelector('#allCoursesButton');
const wddCoursesButton = document.querySelector('#wddCoursesButton');
const cseCoursesButton = document.querySelector('#cseCoursesButton');
const filterButtons = document.querySelectorAll('.filter-button');

function displayCourses(coursesToDisplay) {
    //empty the Courses container to display nothing initially
    coursesContainer.innerHTML = '';  

    let currentTotalCredits = 0;

    coursesToDisplay.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : 'uncompleted'}`;

        const titleElement = document.createElement('h3');
        titleElement.textContent = `${course.subject} ${course.number}`;
        card.appendChild(titleElement);

        coursesContainer.appendChild(card);

        currentTotalCredits += course.credits;
    });

    totalCreditsElement.textContent = currentTotalCredits;
}

function handleFilterClick(filterType) {
    filterButtons.forEach(button => button.classList.remove('active'));  
    
    let filteredCourses = [];
    if (filterType === 'all') {
        filteredCourses = courses;
        allCoursesButton.classList.add('active');
    } else if (filterType === 'WDD') {
        filteredCourses = courses.filter(course => course.subject === 'WDD');
        wddCoursesButton.classList.add('active');
    } else if (filterType === "CSE") {
        filteredCourses = courses.filter(course => course.subject === "CSE");
        cseCoursesButton.classList.add('active');
    }

    displayCourses(filteredCourses);
}


allCoursesButton.addEventListener('click', () => handleFilterClick('all'));
wddCoursesButton.addEventListener('click', () => handleFilterClick('WDD'));
cseCoursesButton.addEventListener('click', () => handleFilterClick('CSE'));

document.addEventListener('DOMContentLoaded', () => {
    handleFilterClick('all');
});