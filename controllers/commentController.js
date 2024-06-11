const Post = require("../models/postModel");

const Comment = require("../models/commentModel");

exports.createComment = async(req , res)=>{
    try{
         const{post , user , body} = req.body; 

         const comment = new Comment({
            post , user , body
         })

         const savedComment = await comment.save(); 

         //find the post using id add new commwnt into that comment array
         //push for update nad pull for delete
         //new : true means that the return value will be updated not old one
         const updatePost = await Post.findByIdAndUpdate(post , {$push : {comments : savedComment._id}} , {new:true}).populate("comments") //populate the comment array with comment document

         res.status(200).json({
                post : updatePost , 
         })

    }
    catch(error){
          return res.status(500).json({
            error :`Error aa gya h during writing comment ${error}`
            
          })
    }
}
