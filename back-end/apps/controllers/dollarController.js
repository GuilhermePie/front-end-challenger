class dollarController{
    async dollarPrice(req,res){
        await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        .then(response => response.json())
        .then(data => {
            return res.status(200).json(data.USDBRL.high)
        });
    }
}

export default new dollarController()