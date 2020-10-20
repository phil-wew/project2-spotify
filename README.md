# project2-spotify

**Data Munging**
We started by pulling weekly top 200 charts from various regions from spotify's top streaming charts.

The charts CSVs were seperated by week. So, we created a loop to go through each region's folder of weekly charts and it pulled the week's date from the file name, created an empty row, and added this date to the empty row in order to preserve what week the data was from.

After this, the loop also concated the weekly charts to a compiled CSV for each region. 

After running this loop for each region, we then concated all the compiled CSVs to a masterfile. This CSV was then merged with another CSV that provided song features and genres taken from spotify.

We then decided to group our data by region locally, before serving it up, in order to improve usability. We initially tried to have our app.js do most of the filtering of data but it was too much for it to handle and responsiveness was too slow.

We took our masterfile CSV and grouped CSV and created two tables from these to use through our app.py.





We utilized Bootstrap to build out our index.html file for the dashboard layout with the drop down coded in. After builing the index.html, we created our css file to bring in the styling for the header and left rail text boxes and drop down. 

We built a bar and bubble chart using D3 JSON to bring in the data from our app.py file and extract it out for our region-changing data use. 