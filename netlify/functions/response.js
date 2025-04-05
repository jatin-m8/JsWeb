let latestStatus = "fail"; // Default status globally defined

exports.handler = async function(event, context) {
  try {
    // Handle POST request from MacroDroid
    if (event.httpMethod === "POST") {
      const requestData = JSON.parse(event.body || "{}");

      if (requestData.action === "success") {
        latestStatus = "success";
      } else if (requestData.action === "fail") {
        latestStatus = "fail";
      }

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: latestStatus })
      };
    }

    // Handle GET request from your webpage to check status
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: latestStatus })
      };
    }

    // If method is neither GET nor POST
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "fail", error: "Invalid HTTP method" })
    };

  } catch (error) {
    // Error handling
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "fail", error: error.message })
    };
  }
};