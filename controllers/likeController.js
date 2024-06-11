const Post = require("../models/postModel");
const Like = require("../models/likeModel"); 

exports.likePost = async (req , res)=>{

    try{
    const {post , user} = req.body; 

    const like = new Like({
         post , user
    });

    const savedLike = await like.save(); 

    const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes: savedLike._id}} , {new :true}).populate("likes").populate("comments").exec();

    res.json({
        post : updatedPost , 
    })
}
catch(error){
    return res.status(500).json({
        error :"Error aa gya h",
   })
}

}



exports.unlikePost = async (req , res)=>{

    try{
    const {post , like} = req.body; 
    const deletedLike = await Like.findOneAndDelete({post :post , _id :like});

    const updatedPost = await Post.findByIdAndUpdate(post , {$pull : {likes: deletedLike._id}} , {new : true});

    res.json({
        post : updatedPost , 
    })
}
catch(error){
    return res.status(500).json({
        error :"Error aa gya h",
   })
}

}








exports.dummyLink = (req , res)=>{
    res.send("This is Dummy Page");
}