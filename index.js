let Nobuttons = document.querySelectorAll(".drum").length;
for(let i=0; i<Nobuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
     let buttonInnerHtml = this.innerHTML;

        switch(buttonInnerHtml){
            case"A":
            let audio = new Audio("Sound/failure-drum-sound-effect-2-7184.mp3");
            audio.play();
            break;

            case"B":
            let music = new Audio("Sound/elegant-corporate-logo-153279.mp3");
            music.play();
            break;

            case"C":
            let sound = new Audio("Sound/elegant-piano-logo-tranquility-relaxation-medicine-153281.mp3");
            sound.play();
            break;

            case"D":
            let music1 = new Audio("Sound/failure-drum-sound-effect-2-7184.mp3");
            music1.play();
            break;

            case"E":
            let music2 = new Audio("Sound/failure-drum-sound-effect-2-7184.mp3");
            music2.play();
            break;

            case"F":
            let music3 = new Audio("Sound/Funk-drum-groove-beat-loop-128-bpm.wav");
            music3.play();
            break;

            case"G":
            let music4 = new Audio("Sound/uplifting-logo-piano-152057.mp3");
            music4.play();
            break;

            default:console.log(buttonInnerHtml);
      }
    });
}
