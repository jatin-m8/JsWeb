<script>
  let lastStatus = "fail"; // Initial default status

  function checkResponse() {
    fetch('https://radiant-longma-9d0a2b.netlify.app/.netlify/functions/response')
      .then(response => response.json())
      .then(data => {
        if (data.status !== lastStatus) {
          lastStatus = data.status;
          if (lastStatus === "success") {
            showPopup("Command Success", "green");
          } else {
            showPopup("Command Fail", "red");
          }
        }
      })
      .catch(error => {
        console.error("Error:", error);
        if (lastStatus !== "fail") {
          lastStatus = "fail";
          showPopup("Command Fail", "red");
        }
      });
  }

  function showPopup(message, color) {
    let popup = document.createElement("div");
    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = color;
    popup.style.color = "white";
    popup.style.padding = "15px";
    popup.style.borderRadius = "10px";
    popup.style.fontSize = "20px";
    popup.style.fontWeight = "bold";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    popup.style.zIndex = 9999;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 3000);
  }

  setInterval(checkResponse, 1000); // Every 1 second
</script>