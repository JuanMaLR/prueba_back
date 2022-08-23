const formularioController = {
    showData: (req, res) => {
        console.log("Recibi algo");
        console.log(res);
        return res.status(200).json({ data: "Hola, aquí estoy" });
	},
};

module.exports = formularioController;