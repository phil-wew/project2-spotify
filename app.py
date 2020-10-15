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
    dictionary = {"songs": df[songs], "artists": df[artists]}
    return jsonify(dictionary)


if __name__ == '__main__':
    app.run(debug=True)
