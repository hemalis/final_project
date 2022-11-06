# Stock & Crypto Analytics

### Background

We are building a website to predict the future price of crypto and the
stock market. We will use crypto and stock API from CoinGeko,
Yahoo Finance, and Polygon.io to gather our stock and crypto
dataset. Our goal is to collect the top five crypto and stock; after
collecting desired data, we will clean it using the Pandas library. We
want to utilize machine learning to make future price predictions. We
will analyze and visualize data to help users make decisions about
purchasing cryptos and stocks.

### Motivation

Since the Pandemic, stock markets and cryptocurrency have shown different 
patterns. The stock market was constantly up and broke some records, however 
cryptocurrency's price has drastically fallen. Since crypto and blockchain is the 
future for the web, we were highly interested in learning about these topics & 
would like to deep dive into it.

### Questions to answer

- Which cryptos/stocks have a higher volume?
- Select a target cryptos/stocks and predict what is its highest price and
  lowest price in the day?
- Which are the best crypto to buy and sell from the list of cryptos?
- Using pre-market volume to predict the daily volumes
- Using data to predict stock and crypto using machine learning.

### Communication Protocol

- Slack
- Google Drive
- Google sheets
- Google Docs
- Zoom Meetings

### ERD

![image](https://github.com/hemalis/final_project/blob/main/images/ERD_Full.png?raw=true)

```
CREATE TABLE "Crypto" (
    "ID" int   NOT NULL,
    "date" datetime   NOT NULL,
    "ticker" string   NOT NULL,
    "open" float   NOT NULL,
    "high" float   NOT NULL,
    "low" float   NOT NULL,
    "close" float   NOT NULL,
    "volume" int   NOT NULL,
    CONSTRAINT "pk_Crypto" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Stock" (
    "ID" int   NOT NULL,
    "date" datetime   NOT NULL,
    "ticker" string   NOT NULL,
    "open" float   NOT NULL,
    "high" float   NOT NULL,
    "low" float   NOT NULL,
    "close" float   NOT NULL,
    "volume" int   NOT NULL,
    CONSTRAINT "pk_Stock" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Crypto_prediction" (
    "ID" int   NOT NULL,
    "date" datetime   NOT NULL,
    "ticker" string   NOT NULL,
    "prediction_close" int   NOT NULL,
    CONSTRAINT "pk_Crypto_prediction" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Stock_prediction" (
    "ID" int   NOT NULL,
    "date" datetime   NOT NULL,
    "ticker" string   NOT NULL,
    "prediction_close" int   NOT NULL,
    CONSTRAINT "pk_Stock_prediction" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Crypto" ADD CONSTRAINT "fk_Crypto_ticker" FOREIGN KEY("ticker")
REFERENCES "Crypto_prediction" ("ticker");

ALTER TABLE "Stock" ADD CONSTRAINT "fk_Stock_ticker" FOREIGN KEY("ticker")
REFERENCES "Stock_prediction" ("ticker");

CREATE INDEX "idx_Crypto_date"
ON "Crypto" ("date");

CREATE INDEX "idx_Crypto_ticker"
ON "Crypto" ("ticker");

CREATE INDEX "idx_Stock_date"
ON "Stock" ("date");

CREATE INDEX "idx_Stock_ticker"
ON "Stock" ("ticker");

CREATE INDEX "idx_Crypto_prediction_date"
ON "Crypto_prediction" ("date");

CREATE INDEX "idx_Crypto_prediction_ticker"
ON "Crypto_prediction" ("ticker");

CREATE INDEX "idx_Stock_prediction_date"
ON "Stock_prediction" ("date");

CREATE INDEX "idx_Stock_prediction_ticker"
ON "Stock_prediction" ("ticker");

```

### Machine Learning Model

#### Facebook Prophet Model
Facebook Prophet is an opensource software released by Facebook’s Core Data Science team. The software can help forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects; we used this as an additive to our Machine Learning model. Through FB Prophet and Plotly we were able to create visualizations that showed the breakdown for stock and cryptocurrencies markets and their activities.

#### LSTM Model

#### Database
PostgresSQL was used to store and manipulate data provided by FB Prophet before being imported to Jupyter Notebooks for visualizations.

### Tools/Modules to use

- Python
- Pandas
- Matplotlib
- NumPy
- SciPy
- Tableau
- MySQL/POSTGRES
- JavaScript
- CSS
- HTML

### Datasets

- Stock API: https://polygon.io/
- 5 API call/mins
- 2 years of historical data
- CoinGecko: https://www.coingecko.com/
- Yahoo Finance: https://finance.yahoo.com/


