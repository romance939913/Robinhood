export const fetchstockHistorical = (ticker) => {
    let d = new Date();
    return $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?from=2015-01-01&to=${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
        method: "GET"
    })
}

export const fetchStockDay = (ticker) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${ticker}`,
        method: "GET"
    })
)

export const fetchStockWeek = (ticker) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/30min/${ticker}`,
        method: "GET"
    })
)