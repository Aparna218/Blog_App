const userModel = require("../model/userModel")

exports.signup = async (request , response) => {
    try {
        let data = request.body
        let saveData = await userModel.create(data)
        return response.status(200).send({message: "Signup successfully", data:saveData})
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}

exports.login = async (request , response) => {
    try {
        let username = request.body.username;
        let password = request.body.password;

        let user = await userModel.findOne({username, password})
        return response.status(200).send({message: "login successfully"})
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}