import blogApi from "../APIs/blogApi"; //Axios Api

//Delete route; NOT Maintaining any global store for it.
export const deletePostAPI = async (id) => {
    const response = await blogApi.delete(`/posts/${id}`); //Delete route for jsonPlaceholder API
    return response;
}