<p align="center">
  <img width="900" height="400" src="https://github.com/hemalis/final_project/blob/main/images/Header.jpg">
</p>

<table><tr>

---
# Stock & Crypto Prediction

### Contributors:

- [**Sarah Azad**] [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/smzd)
- [**Edward Kim**] [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/3hunterman3)
- [**Hemali Shah**] [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/hemalis)
- [**Taiqin Wu**] [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/Taiqinwu)
- [**Zan Zaman**] [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/ZZaman1989)

<table><tr>

---
## Technologies | Languages | IDE | Data Source: 
<details>
<summary>Software and IDE:</summary>

- Python
- Pandas
  - Numpy
  - Matplotlib
- VS Code
- Jupyter Notebook
- PostgreSQL
- AWS
- Flask
- HTML
  - CSS
  - JSON
- JavaScript


</details>

<details>
<summary>Data Sources:</summary>

- Yahoo Finance

</details>

### Background

We are building a website to predict the future price of crypto and the stock market. We will use crypto and stock API from Yahoo Finance to gather our stock and crypto dataset. Our goal is to collect the top five crypto and stock; after collecting desired data, we will clean it using the Pandas library. We want to utilize machine learning to make future price predictions. We will analyze and visualize data to help users make decisions about purchasing cryptos and stocks.

### Motivation

Since the Pandemic, the stock market and crypto have shown different patterns. The stock market was consistently up and broke some records, however cryptocurrency prices have drastically fallen. Since crypto and blockchain is the future for the web, we were highly interested in learning about these topics & would like to deep dive into it.

### Questions to answer
- Select five cryptos/stocks and predict what is its highest price and lowest price in the day.
- Using data to predict stock and crypto prices using machine learning.

### Presentation
https://docs.google.com/presentation/d/1Lsxx2rLLdydpgQQVFcJm3d8A68OTZqWplNIjZlvc3XM/edit?usp=sharing
https://cryptostock.s3.us-west-2.amazonaws.com/Website/html/home.html

### Project Methodology
![image](https://github.com/hemalis/final_project/blob/main/images/Project%20Methodology.jpg)


### Data Exploration

When initially starting the project we first used data sets from Polygon and CoinGecko.  The issue with the data sets from Polygon and CoinGecko was it required a lot of formatting and cleaning of the data. As we continued to look at more datasets, Yahoo Fianance's API call provided all the necessary information without all the unnecessary columns.  

### Data Cleaning

We began by sourcing crypto pricing data and stock pricing data from an API call from Yahoo Finance. This data was collected for daily prices and volume.  Once the API was called, we downloaded the five stock and crypto calls into a csv file. Due to the fairly clean dataset provided by the API call from Yahoo Finance, we did not need to clean the data as much as we anticipated.  We dropped a few columns, renamed columns and updated the dates as seen below in the codes.  

Please see images below for code.
![image](https://github.com/hemalis/final_project/blob/main/images/Data%20Collection%201.jpg)

![image](https://github.com/hemalis/final_project/blob/main/images/Crypto%20Collection%201.jpg)

![image](https://github.com/hemalis/final_project/blob/main/images/Crypto%20Collection%202.jpg)

![image](https://github.com/hemalis/final_project/blob/main/images/Stock%20Collection%201.jpg)

### Database

PostgresSQL was used to store and manipulate the data. Please see image below. 

![image](https://github.com/hemalis/final_project/blob/main/images/Database%20connection.jpg)

#### ERD

![image](https://github.com/hemalis/final_project/blob/main/images/ERD_IMAGE.png?raw=true)

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
    "close_prediction" int   NOT NULL,
    "lower" float   NOT NULL,
    "upper" float   NOT NULL,
    CONSTRAINT "pk_Crypto_prediction" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Stock_prediction" (
    "ID" int   NOT NULL,
    "date" datetime   NOT NULL,
    "ticker" string   NOT NULL,
    "close_prediction" int   NOT NULL,
    "lower" float   NOT NULL,
    "upper" float   NOT NULL,
    CONSTRAINT "pk_Stock_prediction" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Crypto" ADD CONSTRAINT "fk_Crypto_date_ticker" FOREIGN KEY("date", "ticker")
REFERENCES "Crypto_prediction" ("date", "ticker");

ALTER TABLE "Stock" ADD CONSTRAINT "fk_Stock_date_ticker" FOREIGN KEY("date", "ticker")
REFERENCES "Stock_prediction" ("date", "ticker");

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

### Machine Learning Model Overview
During the early stages of our Machine Learning modeling, we had planned to use regression model . However, we realized we were looking at time series issue. This required us to look at multiple machine learning models. The best models that fit for our project were Facebook Prophet and LSTM.  Even though LSTM was more accurate in our model it had more restrictions such as: maximum 7 day prediction, the model took longer to run, and the model could be ran for only one stock/crypto at a time.  Facebook Prophet is the model we chose to show on our website and presentation.  It shows the upper/lower limit and predictions, we found this to be more beneficial for stock trading.  What we learned from these two models is shown below in each respective section as well with the splitting and training the dataset.  

#### Facebook Prophet Model
Facebook Prophet is an opensource software released by Facebook’s Core Data Science team. The software can help forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects; we used this as an additive to our Machine Learning model.

![image](https://github.com/hemalis/final_project/blob/main/images/Prophet%20code%20%231.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/Prophet%20code%20%232.jpg)


#### Facebook Prophet Model Results:
![image](https://github.com/hemalis/final_project/blob/main/images/Prophet%20Prediction%20-AAPL.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/Prophet%20Prediction%20-BTC.jpg)


The advantages of Facebook Prophet Model are:

* It is fast and accurate compared to most of its peers.
* The Prophet model is preferred over other models when you are working with a non-linear module of data and the observations taken to change over seasons like yearly, monthly, weekly, or daily.
* Prophet model is robust to missing values and outliers and knows how to deal with the holiday effects.

The disadvantages of Facebook Prophet Model include:

* Prophet can mistakenly believe there are a weekly seasonal component.
* Does not compare it to a benchmark.

#### LSTM Model
LSTM stands for Long Short Term Memory Networks. It is a type of recurrent neural network that is commonly used for regression and time series forecasting in machine learning. It can memorize data for long periods. Using LSTM is one of the best machine learning approaches for time series forecasting. LSTMs are recurrent neural networks designed to remember data for a longer period. We will start training an LSTM model for predicting crypto and stock prices, we will split the data into training sets and test sets.

![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20%231.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20%232.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20%233.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20%234.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20%235.jpg)


#### LSTM Model Results for BTC:

![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20prediction%201.jpg)
![image](https://github.com/hemalis/final_project/blob/main/images/LSTM%20prediction%202.jpg)


The advantages of LSTM Model are:

* Most powerful approach to learning from sequential data and time series are only a special case.
* Does not rely on specific assumptions about the data such as time series stationary or the existence of a Date field.

The disadvantages of LSTM Model include:

* LSTM has no memory associated with the model. Which is a problem for sequential data, like text or time series.
* LSTMs take longer to train
* LSTMs require more memory to train

### Visualization
* We created a website using HTML, JavaScript, and CSS to display our analysis.
https://cryptostock.s3.us-west-2.amazonaws.com/Website/html/home.html

    * The first page will be a home page that have a search bar to look up the stock or crypto for analysis.
    ![image](https://github.com/hemalis/final_project/blob/main/images/Home.png)

    * The second page will be a stock page analysis only, where it will have a table on the left to showing the daily price of the five stocks, the right will be a line graph of the stock prediction showing the actual vs. prediction. The bottom will be the prediction for daily, weekly, monthly, and yearly price.
    ![image](https://github.com/hemalis/final_project/blob/main/images/Crypto.png)

    * The third page will be similar to the stock page, except it's for crypto prediction only.
    ![image](https://github.com/hemalis/final_project/blob/main/images/Stock.png)

    * The fourth page will be the about page, a short description of our project, our team member's name and their github, and lastly our project github.
    ![image](https://github.com/hemalis/final_project/blob/main/images/About%20us.jpg)
