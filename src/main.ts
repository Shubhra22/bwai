import './style.css'
import { bootstrapCameraKit } from "@snap/camera-kit";

(async function () {
  
  const cameraKit = await bootstrapCameraKit({apiToken:'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzEzMjg5ODQ3LCJzdWIiOiI4ZmQ3MjBhMi05YjdjLTRkMzktYjc2OS1mZTU1YzQ3NGY4Yzd-U1RBR0lOR35kNzZiM2IzMi1jOTI1LTRhNDAtODU3Zi01ZjYwMjA1ZDJiMzcifQ.us3Jyv386lZ_G030pIo_WmL6wbX3CXCxlWtxQXlrKwE'});
  
  const liveRenderTarget = document.getElementById("canvas") as HTMLCanvasElement;
  const session = await cameraKit.createSession({liveRenderTarget});

  const camKitMediaSource = await navigator.mediaDevices.getUserMedia({video:true});

  await session.setSource(camKitMediaSource);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens('08aefadf-9beb-4507-b637-188c093f2a529','86605285-90b4-44e6-bb3e-c33d09e2704b');
  await session.applyLens(lens);

})();