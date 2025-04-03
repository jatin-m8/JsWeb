exports.handler = async function(event, context) {
  try {
    // ✅ Allow only GET requests
    if (event.httpMethod !== "GET") {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*", // CORS Fix
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ error: "Only GET requests allowed!" })
      };
    }

    // ✅ Success Response
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // CORS Fix
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "success" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Internal Server Error", details: error.message })
    };
  }
};
