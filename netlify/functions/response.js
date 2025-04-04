let lastUpdateTime = 0;
let latestStatus = "fail";

exports.handler = async function(event, context) {
  try {
    const now = Date.now();

    // POST: MacroDroid se status update
    if (event.httpMethod === "POST") {
      const requestData = JSON.parse(event.body || "{}");

      if (requestData.action === "success") {
        latestStatus = "success";
        lastUpdateTime = now;
      } else {
        latestStatus = "fail";
        lastUpdateTime = now;
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

    // GET: Website se status check
    if (event.httpMethod === "GET") {
      // Agar last update 5 seconds se purana hai to status fail kar do
      if (now - lastUpdateTime > 5000) {
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

    // Invalid method
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