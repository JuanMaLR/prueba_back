const formularioController = {
    showData: (req, res) => {
        console.log("Recibi algo")
        res.status(200).json({ data: "Hola, aquí estoy" });
	},
};

module.exports = formularioController;