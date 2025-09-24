import React, { useState } from "react";
import Post from "./Post";

const PostList = () => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			content: "Học ReactJS có khó không?",
			likes: 0,
			dislikes: 0,
		},
		{
			id: 2,
			content: "Props và State là gì?",
			likes: 0,
			dislikes: 0,
		},
		{
			id: 3,
			content: "Lập trình web có vui không?",
			likes: 0,
			dislikes: 0,
		},
	]);

	const handleLike = (postId) => {
		setPosts(
			posts.map((post) =>
				post.id === postId ? { ...post, likes: post.likes + 1 } : post
			)
		);
	};

	const handleDislike = (postId) => {
		setPosts(
			posts.map((post) =>
				post.id === postId
					? { ...post, dislikes: post.dislikes + 1 }
					: post
			)
		);
	};

	return (
		<div className="exercise">
			<h2>Bài 4: Like/Dislike Post</h2>

			<div className="posts-container">
				{posts.map((post) => (
					<Post
						key={post.id}
						content={post.content}
						likes={post.likes}
						dislikes={post.dislikes}
						onLike={() => handleLike(post.id)}
						onDislike={() => handleDislike(post.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default PostList;