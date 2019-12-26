import React, { useEffect, useState } from "react";
import { setMediaRecorder } from "../script/setMediaRecorder";

export type RecorderState = "start" | "stop";

export default function VoiceChanger() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRecorded, setIsRecorded] = useState(false);
  const [stream, setStream] = useState(new Object() as MediaStream);

  function handleRecorder(ticket: RecorderState, recorder: MediaRecorder) {
    // const recorder = new MediaRecorder(stream);
    console.log(recorder);
    switch (ticket) {
      case "start": {
        recorder.start();
        setIsRecorded(true);
      }
      case "stop": {
        if (recorder.state === "recording") {
          recorder.stop();
        }
        setIsRecorded(false);
      }
    }
  }

  useEffect(() => {
    setMediaRecorder().then(recorderForInit => {
      setIsLoading(false);
      setStream(recorderForInit.stream);
      recorderForInit.start();
      setIsRecorded(true);
      recorderForInit.onstart = voicedata => {
        console.log("👍Recording start");
      };
      recorderForInit.onstop = voicedata => {
        console.log("👍Recording is finished!!");
      };
      recorderForInit.ondataavailable = data => {
        console.log("👍Recorded Data is available");
        console.log("data available after MediaRecorder.stop() called.");

        const audio = document.createElement("audio");
        audio.setAttribute("controls", "");
        const audioURL = window.URL.createObjectURL(data.data);
        audio.src = audioURL;
        document.body.append(audio)
      };

      document!.getElementById("button")!.onclick = () =>
        handleRecorder("stop", recorderForInit);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>isLoading</div>
      ) : (
        <div id="button">{isRecorded ? "stop" : "start"}</div>
      )}
    </div>
  );
}
