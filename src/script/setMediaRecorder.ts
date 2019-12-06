export const setMediaRecorder = async () => {
    const recorder = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    })
}