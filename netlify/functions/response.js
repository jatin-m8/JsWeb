exports.handler = async function(event, context) {
  try {
    // ✅ Only allow POST requests
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*", // CORS fix
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: "fail", error: "Only POST requests allowed!" })
      };
    }

    // ✅ Parse Request Body
    const requestData = JSON.parse(event.body || "{}");

    // ✅ Custom Action Check
    if (requestData.action === "execute") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: "success", message: "Command executed!" })
      };
    } else {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: "fail", error: "Invalid action parameter!" })
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "fail", error: "Internal Server Error", details: error.message })
    };
  }
};
