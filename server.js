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
        <h1>Welcome to My Express Server</h1>
        <p><strong>Full Name:</strong> ${studentDetails.fullName}</p>
        <p><strong>Course:</strong> ${studentDetails.courseTitle}</p>
        <p><strong>Student ID:</strong> ${studentDetails.studentID}</p>
    `);  
});


app.listen(PORT, () => {  
    console.log(`Server is live at: http://localhost:${PORT}`);  
});
