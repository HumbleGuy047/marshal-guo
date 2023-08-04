const BlogDetails = ({blog}) => {
    return (
        <div className="blog-details">
            <h2>{blog.title}</h2>
            <p><strong>Content &nbsp;</strong>{blog.body.substring(0, 50)}...</p>
            <p>{blog.createdAt}</p>
        </div>
    );
}

export default BlogDetails;