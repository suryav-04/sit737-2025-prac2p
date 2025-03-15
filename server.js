
const express = require('express');  
const app = express();  


const PORT = 3000;  


const studentDetails = {
    fullName: "Surya Vignesh Kubendran",  
    courseTitle: "SIT737 - Cloud Native Development",  
    studentID: "224189737"
};


app.get('/', (req, res) => {  
    res.send(`
        <html>
            <head>
                <title>My Node.js Web Server</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                    h1 { color: #007bff; }
                    p { font-size: 18px; }
                </style>
            </head>
            <body>
                <h1>🚀 Welcome to My Express Web Server</h1>
                <p><strong>Full Name:</strong> ${studentDetails.fullName}</p>
                <p><strong>Course:</strong> ${studentDetails.courseTitle}</p>
                <p><strong>Student ID:</strong> ${studentDetails.studentID}</p>
                <p>📅 Date: ${new Date().toDateString()}</p>
            </body>
        </html>
    `);  
});


app.get('/about', (req, res) => {  
    res.send(`
        <h1>About This Server</h1>
        <p>This is a simple Express.js web server created by ${studentDetails.fullName}.</p>
        <p>It is built as part of the ${studentDetails.courseTitle} coursework.</p>
    `);
});


app.get('/contact', (req, res) => {  
    res.send(`
        <h1>Contact Information</h1>
        <p>Email: surya.vignesh@example.com</p>
        <p>Phone: +123456789</p>
    `);
});


app.listen(PORT, () => {  
    console.log(`🚀 Server is live! Access it at: http://localhost:${PORT}`);  
});
