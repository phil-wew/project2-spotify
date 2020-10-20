import sqlalchemy
import pandas as pd

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, request, render_template


#################################################
# Database Setup
#################################################

engine = create_engine('sqlite:///weekly_charts.sqlite')

myQuery = "SELECT * FROM all_weekly_charts_features"
regionQuery = "SELECT * FROM group_all_regions_masterfile"
df = pd.read_sql_query(myQuery, engine)
region_df = pd.read_sql_query(regionQuery, engine)


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


@app.route('/map')
def map_index():
    return render_template("map.html")


@app.route("/data")
def data_query():

    dictionary = {"Position": df['Position'].tolist(), "Track Name": df['Track Name'].tolist(), "Artist": df['Artist'].tolist(), "Stream": df['Streams'].tolist(),
                  "Week": df['Week'].tolist(), "Region": df['Region'].tolist(), "Acousticness": df['acousticness'].tolist(), "Danceability": df['danceability'].tolist(),
                  "Duration": df['duration_ms'].tolist(), "Energy": df['energy'].tolist(), "Explicit": df['explicit'].tolist(), "ID": df['id'].tolist(),
                  "Instrumentalness": df['instrumentalness'].tolist(), "Key": df['key'].tolist(), "Liveness": df['liveness'].tolist(),
                  "Loudness": df['loudness'].tolist(), "Mode": df['mode'].tolist(), "Popularity": df['popularity'].tolist(), "Release Date": df['release_date'].tolist(),
                  "Speechiness": df['speechiness'].tolist(), "Tempo": df['tempo'].tolist(), "Valence": df['valence'].tolist(), "Top Genre": df['top genre']}

    return df.to_json(orient='columns')


@app.route('/regions')
def regions():

    region_dict = {"Track Name": region_df['TrackName'].tolist(), "Artist": region_df['Artist'].tolist(),
                   "Stream": region_df['Streams'].tolist(), "Region": region_df['Region'].tolist(),
                   "Acousticness": region_df['acousticness'].tolist(), "Danceability": region_df['danceability'].tolist(),
                   "Duration": region_df['duration_ms'].tolist(), "Energy": region_df['energy'].tolist(),
                   "Instrumentalness": region_df['instrumentalness'].tolist(),
                   "Key": region_df['key'].tolist(), "Liveness": region_df['liveness'].tolist(),
                   "Loudness": region_df['loudness'].tolist(), "Mode": region_df['mode'].tolist(),
                   "Popularity": region_df['popularity'].tolist(),
                   "Speechiness": region_df['speechiness'].tolist(), "Tempo": region_df['tempo'].tolist(),
                   "Valence": region_df['valence'].tolist(), "Top Genre": region_df['topgenre']}

    return region_df.to_json(orient='columns')


if __name__ == "__main__":
    app.run(debug=True)
