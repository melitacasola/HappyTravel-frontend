export const filterData = (data, searchParam) => {
    let filteredData;

    if (Array.isArray(data) && searchParam) {
        filteredData = data.filter((item) => item.attributes.title.includes(searchParam));
        console.log(filteredData);
    } else {
        filteredData = data;
    }

    return filteredData;
};
