const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/api", (req, res) => {
    const { slack_name, track } = req.query;
    const date = new Date();
    const utc_time = date.toISOString();
    let current_day;
    let current_day_index = date.getDay();

    switch (current_day_index) {
        case 0:
            current_day = "Sunday"
            break;
        case 1:
            current_day = "Monday"
            break;
        case 2:
            current_day = "Tuesday"
            break;
        case 3:
            current_day = "Wednesday"
            break;
        case 4:
            current_day = "Thursday"
            break;
        case 5:
            current_day = "Friday"
            break;
        case 6:
            current_day = "Saturday"
            break;
        default:
            break;
    }
    res.json({
        slack_name,
        track,
        utc_time,
        current_day,
        github_file_url: "https://github.com/krendus/hng-task-1/blob/main/index.js",
        github_repo_url: "https://github.com/krendus/hng-task-1",
        status_code: 200
    })
})

// PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}...`)
})