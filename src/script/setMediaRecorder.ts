export const setMediaRecorder = async () => {
    const recorder = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    }).then((stream) => {
        const recorderForInit = new MediaRecorder(stream)
        return recorderForInit
    })
    return recorder
}