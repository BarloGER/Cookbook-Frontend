import { useParams } from "react-router-dom";

export default function Recipe({ posts }) {
    const { id } = useParams();
    const thisPost = posts.find((post) => post.id == id);
    return (
        <>
        
        </>
    )
}
