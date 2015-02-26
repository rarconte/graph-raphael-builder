Dropzone.prototype.enqueueFile = function(file) {};
    
Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("form", {
    previewTemplate: "<div></div>",
    createImageThumbnails: false,
    acceptedFiles: 'application/json'
});

myDropzone.on("addedfile", function(file) {
    if (file.type == 'application/json') {
        fr = new FileReader();
        fr.onload = create_canvas;
        fr.readAsText(file);
    }
    else {
      
    }
});

var create_canvas = function() {

    $('form').hide();

    var diagram = graph.Tree( JSON.parse(fr.result), {

        click: function(id){
            console.log("click happend", id)
        }
    });

    diagram.renderTo("canvas");

    $('a#fullscreen').on('click', function(event) {
        event.preventDefault();
        diagram.setSize(parseInt($('#canvas').width()), parseInt($('#canvas').height()))
    })

    $('a#repeat').on('click', function(event) {
        event.preventDefault();
        diagram.setSize(diagram.width(), diagram.height())
    })

    $('a#open').on('click', function(event) {
        event.preventDefault();
    })
}

$('#background-color').change(function(event){
    event.preventDefault();
    $('body').css('background-color', $(this).val());
})