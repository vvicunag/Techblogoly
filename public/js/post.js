const createComment = () => {
    const postId = document.getElementById("identify-post").getAttribute("data");
    const comment = document.getElementById("comment-input").value.trim();
    if(!comment) {
        alert("You naughty... try writting something before commenting!");
        return
    };
    const commentContent = {comment_content: comment}; 
    fetch(`/comment/${postId}`, {
        method: "POST",
        body: JSON.stringify(commentContent),
        headers: { "Content-Type": "application/json" },
    });
    document.location.replace(`${postId}`);
};

const commentBtn = document.getElementById("comment-btn");

if (commentBtn) {
    console.log("Create")
    commentBtn.addEventListener("click", createComment);
}

