const formularioController = {
    showData: (req, res) => {
        console.log("Recibi algo");
        //res.json({ data: "Hola, aquí estoy" }).status(200).end();
        //console.log("Sali");
        res.status(200).json({ data: "Hola, aquí estoy" });
	},
};

module.exports = formularioController;