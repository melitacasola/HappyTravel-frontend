export const filterData = (data, searchParam) => {
  let filteredData;

  if (searchParam) {
    filteredData = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchParam.toLowerCase()) ||
        item.location.toLowerCase().includes(searchParam.toLowerCase())
      );
    });
  } else {
    filteredData = data;
  }

  return filteredData;
};
