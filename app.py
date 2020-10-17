import sqlalchemy
import pandas as pd

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, request


#################################################
# Database Setup
#################################################

engine = create_engine('sqlite:///weekly_charts.sqlite')

myQuery = "SELECT * FROM all_weekly_charts_features"
df = pd.read_sql_query(myQuery, engine)
print(df)

# session = Session(engine)

#################################################
# Flask Setup
#################################################

app = Flask(__name__)


#################################################
# Flask Routes
#################################################


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/data")
def data_query():

    dictionary = {"Position": df['Position'].tolist(), "Track Name": df['Track Name'].tolist(), "Artist": df['Artist'].tolist(), "Stream": df['Streams'].tolist(),
                  "URL": df['URL'].tolist(), "Week": df['Week'].tolist(), "Region": df['Region'].tolist(), "Acousticness": df['acousticness'].tolist(), "Danceability": df['danceability'].tolist(),
                  "Duration": df['duration_ms'].tolist(), "Energy": df['energy'].tolist(), "Explicit": df['explicit'].tolist(), "ID": df['id'].tolist(),
                  "Instrumentalness": df['instrumentalness'].tolist(), "Key": df['key'].tolist(), "Liveness": df['liveness'].tolist(),
                  "Loudness": df['loudness'].tolist(), "Mode": df['mode'].tolist(), "Popularity": df['popularity'].tolist(), "Release Date": df['release_date'].tolist(),
                  "Speechiness": df['speechiness'].tolist(), "Tempo": df['tempo'].tolist(), "Valence": df['valence'].tolist(), "Year": df['year'].tolist()}

    return jsonify(dictionary)

    return redirect("/", code=302)


return render_template("form.html")


# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():


if __name__ == '__main__':
    app.run(debug=True)
