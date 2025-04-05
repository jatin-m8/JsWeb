let latestStatus = "fail";
let lastUpdated = Date.now(); // new variable

exports.handler = async function(event, context) {
  try {
    if (event.httpMethod === "POST") {
      const requestData = JSON.parse(event.body || "{}");

      if (requestData.action === "success") {
        latestStatus = "success";
        lastUpdated = Date.now(); // update timestamp
      } else if (requestData.action === "fail") {
        latestStatus = "fail";
        lastUpdated = Date.now(); // update timestamp
      }

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: latestStatus, updatedAt: lastUpdated })
      };
    }

    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: latestStatus, updatedAt: lastUpdated })
      };
    }

    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "fail", error: "Invalid HTTP method" })
    };

  } catch (error) {
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