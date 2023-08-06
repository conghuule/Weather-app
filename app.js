const asyncRequest = require("async-request");

const getWeather = async (location) => {
  const access_key = "86eb6176a7bb4e116165adc5e31721b1";
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;
  try {
    const req = await asyncRequest(url);
    const data = JSON.parse(req.body);
    const weather = {
      isSuccess: true,
      region: data.location.region,
      country: data.location.country,

      temperature: data.current.temperature,
      wind_speed: data.current.wind_speed,
      precip: data.current.precip,
      cloudcover: data.current.cloudcover,
    };
    console.log(weather);
    return weather;
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      error,
    };
  }
};
getWeather("tokyo");
