export const fetchCourseItem = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/api/courses/${id}`,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCourseTitle = async (searchValue) => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/api/search/courses",
      params: {
        keyword: searchValue,
        max: 20,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCourseList = async (page) => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/api/courses",
      params: {
        page,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
