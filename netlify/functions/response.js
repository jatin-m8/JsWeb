let latestStatus = "fail"; // Default status

// Status ko har 3 second me reset karne ke liye interval set karte hain
setInterval(() => {
  latestStatus = "fail"; // Har 3 second baad reset ho jayega
}, 3000);

exports.handler = async function(event, context) {
  try {
    if (event.httpMethod === "POST") {
      const requestData = JSON.parse(event.body || "{}");

      if (requestData.action === "success") {
        latestStatus = "success"; // Agar MacroDroid success bhej raha hai to update karo
      } else {
        latestStatus = "fail"; // Agar MacroDroid fail bhej raha hai to update karo
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

    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "fail", error: "Invalid request" })
    };

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