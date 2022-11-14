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


@app.route('/stock/<ticker>')
def send_stock_data(ticker):
    con = psycopg2.connect(
        "host='cryptodb.cji8qxkmosul.us-east-1.rds.amazonaws.com' dbname='crypto_stock' user='postgres' password='sehbzsehbz'")
    cur = con.cursor()
    cur.execute(f"""select * from stock_prediction where ticker='{ticker}'""")
    data = {col for col in cur}
    cur.close()
    return jsonify(data)


@app.route('/crypto/<ticker>')
def send_crypto_data(ticker):
    con = psycopg2.connect(
        "host='cryptodb.cji8qxkmosul.us-east-1.rds.amazonaws.com' dbname='crypto_stock' user='postgres' password='sehbzsehbz'")
    cur = con.cursor()
    cur.execute(f"""select * from crypto_prediction where ticker='{ticker}'""")
    #data = json.dumps(cur.fetchall(), indent=4, sort_keys=True, default=str)
    colnames = [desc[0] for desc in cur.description]
    print(colnames)
    for row in cur.fetchall():
        # res = {}
        print(row)
    # results = cur.fetchall()
    data = [col for col in cur]
    cur.close()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
