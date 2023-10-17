document.addEventListener("DOMContentLoaded", function () {
  const generateQRButton = document.getElementById("generate-qr");
  const qrCodeContainer = document.getElementById("qr-code");

  generateQRButton.addEventListener("click", function () {
    // Clear previous QR codes
    qrCodeContainer.innerHTML = "";

    // The text you want to display in the QR code
    const qrText = "Your attendance is marked";

    // Create a QR code with the text
    const qrcode = new QRCode(qrCodeContainer, {
      text: qrText,
      width: 128,
      height: 128,
    });
  });
});
