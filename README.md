# Stock & Crypto Analytics

### Background

We are building a website to predict the future price of crypto and the stock market. We will use crypto and stock API from Yahoo Finance to gather our stock and crypto dataset. Our goal is to collect the top five crypto and stock; after collecting desired data, we will clean it using the Pandas library. We want to utilize machine learning to make future price predictions. We will analyze and visualize data to help users make decisions about purchasing cryptos and stocks.

### Motivation

Since the Pandemic, stock markets and cryptocurrency have shown different patterns. The stock market was constantly up and broke some records, however cryptocurrency's price has drastically fallen. Since crypto and blockchain is the future for the web, we were highly interested in learning about these topics & would like to deep dive into it.

### Questions to answer

- Which cryptos/stocks have a higher volume?
- Select a target cryptos/stocks and predict what is its highest price and lowest price in the day?
- Which are the best crypto to buy and sell from the list of cryptos?
- Using pre-market volume to predict the daily volumes.
- Using data to predict stock and crypto using machine learning.

### Communication Protocol

- Slack
- Google Drive
- Google sheets
- Google Docs
- Zoom Meetings

### Prestation
https://docs.google.com/presentation/d/1Lsxx2rLLdydpgQQVFcJm3d8A68OTZqWplNIjZlvc3XM/edit?usp=sharing

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
* Data Source: API Yahoo Finance

To create a machine learning model, we first began by sourcing crypto pricing data and stock pricing data from Yahoo Finance. This data was collected for daily prices and volume.  

Please see images below for code.
![image](https://github.com/hemalis/final_project/blob/main/images/Data%20Collection%201.jpg)

![image](https://github.com/hemalis/final_project/blob/main/images/Crypto%20Collection%201.jpg)

![image](https://github.com/hemalis/final_project/blob/main/images/Crypto%20Collection%202.jpg)

![image](https://github.com/hemalis/final_project/blob/main/images/Stock%20Collection%201.jpg)


#### Facebook Prophet Model
Facebook Prophet is an opensource software released by Facebook’s Core Data Science team. The software can help forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects; we used this as an additive to our Machine Learning model.

![image]()
![image]()


#### Facebook Prophet Model Results:
![image](https://github.com/hemalis/final_project/blob/main/images/Prophet%20Prediction%20-AAPL.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/Prophet%20Prediction%20-BTC.jpg)


The advantages of Facebook Prohphet Model are:

* It is fast and accurate compared to most of its peers.
* The Prophet model is preferred over other models when you are working with a non-linear module of data and the observations taken to change over seasons like yearly, monthly, weekly, or daily.
*  Prophet model is robust to missing values and outliers and knows how to deal with the holiday effects.

The disadvantages of Facebook Prohphet Model include:

*  Prophet can mistakenly believe there are a weekly seasonal component.
* Does not compare it to a benchmark.

#### LSTM Model
LSTM stands for Long Short Term Memory Networks. It is a type of recurrent neural network that is commonly used for regression and time series forecasting in machine learning. It can memorize data for long periods. Using LSTM is one of the best machine learning approaches for time series forecasting. LSTMs are recurrent neural networks designed to remember data for a longer period. We will start training an LSTM model for perdicting crypto and stock prices, we will split the data into training sets and test sets.

The advantages of LSTM Model are:

* 
* 
*  
* 

The disadvantages of LSTM Model include:

*  
* 

#### Database

PostgresSQL was used to store and manipulate. Please see image below. 'code shown below'

```
    SQL
        #connect to SQL database
            db_string = f"postgresql://postgres:{db_password}@127.0.0.1:5432/crypto_stock"
            engine = create_engine(db_string)
        # Import the stock Data
            stock.to_sql(name='stock', con=engine, if_exists='replace')
        # Import the stock Data
            crypto.to_sql(name='crypto', con=engine, if_exists='replace')
        # create a variable for the number of rows imported
            rows_imported=0
        # get the start_time from time.time()
            start_time=time.time()
            print(f'Done.{time.time()-start_time} total secons elapsed')
```

![image](https://github.com/hemalis/final_project/blob/main/images/Database%20connection.jpg)

## Dashboard
Our dashboard is hosted on our website (need live link), it shows an interactive graph of the top 5 cryptocurrencies and top 5 stocks dating from 2015-Present. Our machine learning model is implemented to display a daily, weekly, monthly, and yearly prediction for the top 5 cryptocurrencies and top 5 stocks based on historical static data. 
![image]
![image]
![image]



### Datasets
- 5 API call/mins
- 2 years of historical data
- Yahoo Finance: https://finance.yahoo.com/

### Website:
- We will create a website using HTML, JavaScript, and CSS to display our analysis
  - The first page will be a home page that have a search bar to look up the stock or crypto for analysis.
  - The second page will be a stock page analysis only, where it will have a table on the left to showing the daily price of the five stocks, the right will be a line graph of the stock prediction showing the actual vs. prediction. The bottom will be the prediction for daily, weekly, monthly, and yearly price.
  - The third page will be similar to the stock page, except it's for crypto predcition only.
  - Thie fourth page will be the about page, a short description of our project, our team member's name and their github, and lastly our project github.
