import Post from '../model/post.js';

// Get all users
export const getPosts = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await Post.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

//Add Post
export const addPost = async (request, response) => {
    // retreive the info of user from frontend
    const post = request.body;
    console.log("inside")

    const newPost = new Post(post);
    try{
        await newPost.save();
        response.status(201).json(newPost);
        console.log("Success");
    } catch (error){
        response.status(409).json({ message: error.message});
        console.log("Fail");
    }
}
// export const addPost = async (request, response) => {
//     // retreive the info of user from frontend
//     console.log("hello");
//     response.send("This is our blog");
// }

