$('document').ready(function ($) {
    var count = 0;
    var valid = true;
    $('#sendContactForm').click(function (e) {
        if($('#contactName').val() === ''||
            $('#contactName').val() === null||
            $('#contactName').val() === undefined){
            $('#contactName').css('border-color','red');
            count++;
            valid = false;
        }else{
            valid = true;
        }
        if($('#contactSubject').val() === '' ||
            $('#contactSubject').val() === null ||
            $('#contactSubject').val() === undefined){
            $('#contactSubject').css('border-color','red');
            count++;
            valid = false;
        }else{
            valid = true;
        }
        if($('#contactMessage').val() === '' ||
            $('#contactMessage').val() === null ||
            $('#contactMessage').val() === undefined){
            $('#contactMessage').css('border-color','red');
            count++;
            valid = false;
        }else{
            valid = true;
        }
        if(count === 3 && valid === false){
            return;
        }else{
            $('#contactMessage').css('border-color','grey');
            $('#contactName').css('border-color','grey');
            $('#contactSubject').css('border-color','grey');
        }
        var data = {
            name:$('#contactName').val(),
            subject:$('#contactSubject').val(),
            message:$('#contactMessage').val()
        };
        $.post('https://shivbhairavinfrastructures.com/apis/queries/',data,function (e) {
            if(e.success === 1){
                alert('Successfully Sent');
                window.location.reload();
            }
        });
    });
});
