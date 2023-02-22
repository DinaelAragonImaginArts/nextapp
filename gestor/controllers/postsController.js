import Post from "../models/Post.js";

const obtenerPost = async(req, res)=>{
    const post = await Post.find();
    res.json(post);
}

const crearPost  = async (req, res)=>{
    console.log(req.body);
}



export {
    obtenerPost,
    crearPost,
}