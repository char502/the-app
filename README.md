# Data Handling for THE

- App runs in react
- Use 'git pull' to pull the repo down locally
- Use 'npm start' to run the app

## What was Done

- Used Chart.js and react-chartjs-2 to experiment with and chart the data provided (have not used Chart.js before so was a good opportunity to have a go)
- Ran the app with React (Create-React-App)
- Used TypeScript to help ensure the integrity of the data
- Used 'reduce' method (see submissions.ts) to consolidate the data by institution so a comparison could be made between the institutions

- Charted total number of students per institution: helpful for students planning to go there, resource allocated for those that manage the institution etc
- Stacked bar graph showing Undergraduate numbers vs postgraduate numbers: helpful for those considering postgraduate study (even more helpful if see data in context of subject areas), helpful for resource allocation for those that manage the institution
- Bar chart showing total staff: helpful for managing and resource allocation
- Pie chart showing proprtion of academic papers per institution, combined with subject data could be useful for aspiring postgraduates, postgraduates and research professors etc

## What more could be done with more time

- Fixed TypeScript error (in submissions.ts)
- Some reptition in the code, could refactor to make chart code more reusable
- Deeper analysis of the data: explore the subject by institution data more deeply
- Experiment with different charting tools
- Explore how the data could be presented in a table format and use filter and sorting options
- Pulled in more data to make a more complete dataset and to ensure comparing like with like between institutions (some had more data than others which skewed any meaningful results), also, can't make a meaningful line chart with data across years (ran out of time to dig deeper on this)
- Create an api, could then use query parameters to just get data for a specific institution or subject etc
- Create a DB to hold the data for easier manipulation/add more institutions
