import React from "react";

const Post = ({ content, likes, dislikes, onLike, onDislike }) => {
	return (
		<div className="post-item">
			<div className="post-content">{content}</div>
			<div className="post-actions">
				<button className="like-btn" onClick={onLike}>
					👍 {likes}
				</button>
				<button className="dislike-btn" onClick={onDislike}>
					👎 {dislikes}
				</button>
			</div>
		</div>
	);
};

export default Post;