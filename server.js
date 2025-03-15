const express = require('express');  
const app = express();  
const port = 3000;  

// Define your details
const studentInfo = {
    name: "Surya Vignesh Kubendran",   
    course: "SIT737 - Cloud Native Application Development",  
    studentID: "224189737" 
};

// Define the homepage route
app.get('/', (req, res) => {  
    res.send(`
        <h1>Welcome to My Node.js Web Server</h1>
        <p><strong>Name:</strong> ${studentInfo.name}</p>
        <p><strong>Course:</strong> ${studentInfo.course}</p>
        <p><strong>Student ID:</strong> ${studentInfo.studentID}</p>
    `);  
});  

// Start the server
app.listen(port, () => {  
    console.log(`Server running at http://localhost:${port}`);  
});  
