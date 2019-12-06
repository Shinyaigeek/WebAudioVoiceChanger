export const setMediaRecorder = async () => {
    const recorder = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    })
    return recorder
}