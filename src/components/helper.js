import blogApi from "../APIs/blogApi";

export const deletePostAPI = async (id) => {
    const response = await blogApi.delete(`/posts/${id}`);
    return response;
}