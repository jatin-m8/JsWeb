exports.handler = async function(event, context) {
  try {
    // Only allow POST requests
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

    // Parse Request Body
    const requestData = JSON.parse(event.body || "{}");

    // Ab "action" ka value "success" bheja gaya to command successful
    if (requestData.action === "success") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: "success", message: "Command Success" })
      };
    } else {
      // Agar "action" me kuch aur value hai to command fail maan lo
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: "fail", error: "Command Failed" })
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
