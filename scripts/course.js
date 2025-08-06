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
const courseDetails = document.querySelector("#course-details");


// First, we add an eventlistener to the click of a button
// Each button is a course like WDD or CSE 
// Upon the click of the button, the handlefilter function gives us the course specified by the parameter
allCoursesButton.addEventListener('click', () => handleFilterClick('all'));
wddCoursesButton.addEventListener('click', () => handleFilterClick('WDD'));
cseCoursesButton.addEventListener('click', () => handleFilterClick('CSE'));

// The duty of the handlefilter function is to return a specific array of courses
// And then display those courses using the displayCourses function
// Also, when it's clicked, we want to style it and when not, we want to remove the styling
// This is what the "active" does.
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

// The displayCourses filter actually accepts the filtered courses as the arguement
// The courses displayed are only those specified by the parameter

function displayCourses(coursesToDisplay) {
    //empty the Courses container to display nothing initially
    coursesContainer.innerHTML = '';  

    let currentTotalCredits = 0;

    // for each course in the displayCourse array, we wanna do some stuff
    coursesToDisplay.forEach(course => {
       
        const card = document.createElement('button');

        // The card has two class names, the second name is dependent on if the class has been completed or not
        // The ternary operator serves us well in this regard
        card.className = `course-card ${course.completed ? 'completed' : 'uncompleted'}`;

        const titleElement = document.createElement('h3');
        titleElement.textContent = `${course.subject} ${course.number}`;
        card.appendChild(titleElement);

        coursesContainer.appendChild(card);

        card.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        // For each iteration, we add the coures credits
        currentTotalCredits += course.credits;



        
    });

    totalCreditsElement.textContent = currentTotalCredits;
}

function displayCourseDetails(course) {
  // Clear any previous content in the dialog
  courseDetails.innerHTML = '';

  // Use a template literal to create all the HTML at once
  const modalContent = `
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    <button id="closeModal">❌</button>
  `;
  
  // Set the dialog's innerHTML
  courseDetails.innerHTML = modalContent;
  
  // Now that the button exists in the DOM, find it and add the listener.
  const closeModalButton = courseDetails.querySelector("#closeModal");
  closeModalButton.addEventListener("click", () => {
    courseDetails.close();
  });
  
  // Show the modal
  courseDetails.showModal();
}

document.addEventListener('DOMContentLoaded', () => {
    handleFilterClick('all');
});