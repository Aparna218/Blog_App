const blogModel = require("../model/blogModel")


exports.createPost = async (request , response) => {
    try {
        let data = request.body
        let saveData = await blogModel.create(data)
        return response.status(200).send({message: "Post created successfully", data:saveData})
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}

exports.getPost = async (request , response) => {
    try {
        let saveData = await blogModel.find()
        return response.status(200).send({message: "All Post found successfully", data:saveData})
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}

exports.getPostByParams = async (request, response) => {
    try {
        let username = request.query.username;
        let category = request.query.category;
        let posts;

        if(username) 
            posts = await blogModel.find({ username: username });
        else if (category) 
            posts = await blogModel.find({ categories: category });
        else 
            posts = await blogModel.find({});
            
        return response.status(200).send({message:"Post found", data: posts});
        
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}

exports.updatePost = async (request , response) => {
    try {
        let postId = request.params.bookId
        let saveData = await blogModel.findByIdAndUpdate(data,{$set:request.body})
        return response.status(200).send({message: "Post updated successfully", data:saveData})
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}

exports.deletePost = async (request , response) => {
    try {
        let data = request.params.id
        let saveData = await blogModel.deleteOne(data)
        return response.status(200).send({message: "Post deleted successfully", data:saveData})
    } catch (error) {
        return response.status(500).send({message: error.message})
    }
}
