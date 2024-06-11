const Post = require("../models/postModel");

exports.createPost = async(req , res)=>{
    try{
       const {title , body} = req.body; 

       const post = new Post({
        title , body,
       });

    //    const savePost = await Post.create({title , body}); 

      const savePost = await post.save();

       res.json({
        post : savePost,
       })
    }
    catch{
        return res.status(500).json({
             error :"Error aa gya h",
        })
              
        
    }
};

exports.getAllPosts = async (req , res)=>{
    try{
        // if u want the id of all comments and likes then only use .find() method , otherwise use populate function 
       const posts= await Post.find().populate("comments").exec();

       res.json({
        posts,
       })
    }
    catch{
        return res.status(500).json({
            error :"Error aa gya h",
       })
    }
}