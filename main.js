function preload(){


}

function setup(){

    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    storage = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0fEo3BNzB/model.json" , modelLoaded)
}

function draw(){

    image(video,0,0,300,300)
    storage.classify(video,gotResult)
}

function modelLoaded(){

    console.log("Model Is Loaded Sucessfuly!")

}

function gotResult(error,result){

    if(error){

        console.error(error)
    }

    else{

        console.log(result)
        document.getElementById("result_object").innerHTML= result[0].label
      document.getElementById("result_accuracy").innerHTML= result[0].confidence.toFixed(2  )

    }
}

