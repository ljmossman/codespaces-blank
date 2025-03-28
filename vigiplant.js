//import * as tf from '@tensorflow/tfjs';
// const tf = require("@tensorflow/tfjs");
//console.log(tf.version.tfjs);

const tensor = tf.tensor([1, 2, 3, 4]);
tensor.print();

console.log("hiiiii")

document.getElementById("startButton").addEventListener("click", startWebcam)
async function startWebcam() {
    videoElement = document.getElementById('webcam');
    try{
        if (!!(navigator.mediaDevices.getUserMedia)) {
            stream = await navigator.mediaDevices.getUserMedia({ video:true });
            videoElement.srcObject = stream;
        } else {
            console.log("Error: getUserMedia API unavailable. Make sure this tab is secure.")
        }
    } catch (error) {
        console.error('Error accessing the webcam; be sure to allow camera access for correct function:', error);
    }
}


    

function getPrediction() {
    //return model(stream)
}