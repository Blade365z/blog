import blogApi from "./blogApi";

export const getNumberOfPostOfUser = async (id) => {
    const response = await blogApi.get(`/posts?userId=${id}`);
    return response.data.length;
}