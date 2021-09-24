import axios from "axios";

const URL_SERV = "http://localhost:3004";

export const getPosts = async (
  prevState,
  page = 1,
  order = "desc",
  limit = "6"
) => {
  try {
    // http://localhost:3004/posts?_page=1&_order=desc&_sort=id&_limit=6
    const response = await axios.get(
      `${URL_SERV}/posts?_page=${page}&_order=${order}&_limit=${limit}&_sort=id`
    );

    return {
      posts: prevState.posts
        ? [...prevState.posts, ...response.data]
        : response.data,
      page: page,
      end: response.data.length === 0 ? true : false,
    };
  } catch (error) {
    throw error;
  }
};

export const addNewsLetter = async (data) => {
  try {
    const findUser = await axios.get(
      `${URL_SERV}/newsletter?email=${data.email}`
    );

    if (Array.isArray(findUser.data) && !findUser.data.length) {
      const response = await axios({
        method: "POST",
        url: `${URL_SERV}/newsletter`,
        data: {
          email: data.email,
        },
      });

      return {
        newsletter: "added",
        email: response.data,
      };
    } else {
      return {
        newsletter: "failed",
      };
    }
  } catch (error) {
    throw error;
  }
};
