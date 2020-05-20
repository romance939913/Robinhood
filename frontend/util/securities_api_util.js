export const fetchNasdaq = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=&exchange=NASDAQ&apikey=${window.stockapikey}`,
        method: "GET"
    })
)

export const fetchNYSE = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=&exchange=nyse&apikey=${window.stockapikey}`,
        method: "GET"
    })
);

export const fetchIndexes = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/majors-indexes?apikey=${window.stockapikey}`,
        method: "GET"
    })
)

export const fetchIndexPrices = (index) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${index}`,
        method: "GET"
    })
);

export const fetchProfile = (company) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/company/profile/${company}?apikey=${window.stockapikey}`,
        method: "GET"
    })
)

export const fetchFinancials = (ticker) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/financials/income-statement/${ticker}?apikey=${window.stockapikey}`,
        method: "GET"
    })
)

export const fetchRealTimePrice = (company) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${company}?apikey=${window.stockapikey}`,
        method: "GET"
    })
)