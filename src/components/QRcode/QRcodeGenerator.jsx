import React, { useEffect } from "react";
import { Container, Row, Button, Card } from "react-bootstrap";
import QRCode from "qrcode.react";
import domtoimage from "dom-to-image";

const QRcodeGenerator = React.forwardRef((props, ref) => {
  useEffect(() => {
    const exportQRCode = async () => {
      const qrCodeNode = ref.current;
      const pngImage = await domtoimage.toPng(qrCodeNode);
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = pngImage;
      link.click();
    };

    document
      .getElementById("export-button")
      .addEventListener("click", exportQRCode);
  }, [ref]);

  return (
    <Container>
      <Card className="w-25">
        <Row>
          <QRCode ref={ref} value={props.text} className="p-0" />
        </Row>
        <Row>
          <Button id="export-button" className="w-100">
            Export QR Code
          </Button>
        </Row>
      </Card>
    </Container>
  );
});

export default QRcodeGenerator;
