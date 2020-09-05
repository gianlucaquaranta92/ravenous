const apiKey = "so5_Mg0kMK-cRSJKm2Ah3ep30Ad2vxcZVdCOlqj-z7ZAKhgbjn3_EJJN7fhjBaw0yEvmpc0ER2pd-4bmMBvgnRNM6yTGbcwpdKCDArgJDFPqEdFsggUwjYfhk83HXnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
    ,
     {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business);
          return{ 
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          site:business.url,
        };
      });
    }
  })
}
}

export default Yelp;

