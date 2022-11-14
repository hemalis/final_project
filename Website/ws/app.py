from flask import Flask, jsonify, render_template
import psycopg2
import json
import sys

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################


@app.route('/crypto')
def get_crypto_tickers():
    con = psycopg2.connect(
        "host='cryptodb.cji8qxkmosul.us-east-1.rds.amazonaws.com' dbname='crypto_stock' user='postgres' password='sehbzsehbz'")
    cur = con.cursor()
    cur.execute("""select distinct ticker from crypto_prediction""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)


@app.route('/stock')
def get_stock_tickers():
    con = psycopg2.connect(
        "host='cryptodb.cji8qxkmosul.us-east-1.rds.amazonaws.com' dbname='crypto_stock' user='postgres' password='sehbzsehbz'")
    cur = con.cursor()
    cur.execute("""select distinct ticker from stock_prediction""")
    data = {col for col in cur}
    cur.close()
    return jsonify(data)


@app.route('/stock/<type>/<ticker>')
def send_stock_data(type, ticker):
    con = psycopg2.connect(
        "host='cryptodb.cji8qxkmosul.us-east-1.rds.amazonaws.com' dbname='crypto_stock' user='postgres' password='sehbzsehbz'")
    cur = con.cursor()
    if type == "actual":
        cur.execute(f"""select * from stocks where ticker='{ticker}'""")
    elif type == "prediction":
        cur.execute(
            f"""select * from stock_prediction where ticker='{ticker}'""")

    result = []
    for row in cur.fetchall():
        res = {}
        for (i, colnames) in enumerate(cur.description):
            res[colnames[0]] = row[i]
        result.append(res)
    cur.close()
    return jsonify(result)


@app.route('/crypto/<type>/<ticker>')
def send_crypto_data(type, ticker):
    con = psycopg2.connect(
        "host='cryptodb.cji8qxkmosul.us-east-1.rds.amazonaws.com' dbname='crypto_stock' user='postgres' password='sehbzsehbz'")
    cur = con.cursor()
    if type == "actual":
        cur.execute(f"""select * from cryptos where ticker='{ticker}'""")
    elif type == "prediction":
        cur.execute(
            f"""select * from crypto_prediction where ticker='{ticker}'""")
    result = []
    for row in cur.fetchall():
        res = {}
        for (i, colnames) in enumerate(cur.description):
            res[colnames[0]] = row[i]
        result.append(res)
    cur.close()
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
