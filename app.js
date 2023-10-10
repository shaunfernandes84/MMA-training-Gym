const express = require("express");
const path = require("path");
const fs = require("fs"); // Node.js file system module
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res) => {
    const { name, phone, email, address, desc } = req.body;

    // Create a string with the submitted data
    const formData = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nInterest: ${desc}\n\n`;

    // Append the data to a text file
    fs.appendFile('form_submissions.txt', formData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("Form data saved to form_submissions.txt");
            res.status(200).send("Form data submitted successfully");
        }
    });
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
