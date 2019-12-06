import React, { useEffect, useState } from "react";
import { setMediaRecorder } from "../script/setMediaRecorder";

export default function VoiceChanger() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setMediaRecorder().then(console.log)
  }, []);
  return <div>{isLoading ? <div>isLoading</div> : <div>loaded</div>}</div>;
}
