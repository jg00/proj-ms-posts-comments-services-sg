/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul className="">{renderedComments}</ul>;
};

/* Ref original
  import axios from "axios";

  export default ({ postId }) => {
  
  // Fetching data to 4001 no longer needed
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul className="">{renderedComments}</ul>;
};

*/
