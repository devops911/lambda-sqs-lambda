const receive = async (event) => {
  console.log("event", event);
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};

export { receive };
