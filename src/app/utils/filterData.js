// filterData.js

export const filterData = (data, searchParam) => {
    let filteredData;
  
    if (searchParam) {
      filteredData = data.data.filter((item) => {
        return (
          item.attributes.title.toLowerCase().includes(searchParam.toLowerCase()) ||
          item.attributes.location.toLowerCase().includes(searchParam.toLowerCase())
        );
      });
    } else {
      filteredData = data;
    }
  
    console.log(filteredData, 'en filterDta') ;
    return filteredData;
  };
  