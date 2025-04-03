exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body); // Macrodroid ka data read karo
        const status = body.status; // Success ya Fail check karo

        // Response return karo
        return {
            statusCode: 200,
            body: JSON.stringify({ status: status }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ status: "fail" }),
        };
    }
};
