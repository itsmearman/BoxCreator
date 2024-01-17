function ghabol() {
    const myInput = document.getElementById('TagName');
    const myheight = document.getElementById('Height');
    const myWidth = document.getElementById('Width');
    const mytagval = document.getElementById('tagval');
    const mybord = document.getElementById('bord');
    const mycoler = document.getElementById('bgcol');
    let valued = myInput.value;
    let Heighta = myheight.value;
    let Widtha = myWidth.value;
    let tagvalz = mytagval.value;
    let borda = mybord.value;
    let bkcole = mycoler.value;
    let cola;
    if(bkcole == "pink" || bkcole == "yellow" || bkcole == "white"){
        cola = "black";
    }
    else{
        cola = "white"
    }
    // const corbtns = document.querySelectorAll('input[name="flexRadioDefault"]');
    // let colorz;
    // for (const colorbtn of colorbtns) {
    //     if (colorbtn.checked) {
    //         colorz = colorbtn.value;
    //         break;
    //     }
    // }
    var html = `
    <${valued}  style="width: ${Widtha}px;height: ${Heighta}px;background-color: ${bkcole};margin-left: 25%;
    border-radius: ${borda}px;color: ${cola}">
       ${tagvalz}
    </${valued}>
 `;
    document.getElementById("creat").innerHTML = html;
}