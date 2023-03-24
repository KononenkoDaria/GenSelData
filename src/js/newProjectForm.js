import $ from 'jquery';

function newProjectForm() {
    $(document).ready(function() {
        var form = $('#newProject');
        var steps = form.find('.step');
        var currentIndex = 0;

        steps.not(':eq(0)').hide();

        form.find('.next').click(function() {
          var target = $(this).data('target');
          var nextStep = steps.filter('[data-step="' + target + '"]');
          if (nextStep.length) {
            steps.eq(currentIndex).hide();
            nextStep.show();
            currentIndex = target - 1;
          }
        });
      
        form.find('.back').click(function() {
          var target = $(this).data('target');
          var prevStep = steps.filter('[data-step="' + target + '"]');
          if (prevStep.length) {
            steps.eq(currentIndex).hide();
            prevStep.show();
            currentIndex = target - 1;
          }
        });
      

      $('#newProject').submit(function() {
        localStorage.setItem('formData', JSON.stringify($(this).serializeArray()));
      });
    
      var formData = localStorage.getItem('formData');
      if (formData) {
        formData = JSON.parse(formData);
        $.each(formData, function(index, element) {
          var input = $('#' + element.name);
          input.val(element.value);
        });
      }
   
    $(window).on('beforeunload', function() {
        localStorage.setItem('formPosition', JSON.stringify({
          top: $('#newProject').offset().top,
          left: $('#newProject').offset().left
        }));
    });
 
    var formPosition = localStorage.getItem('formPosition');
    if (formPosition) {
        formPosition = JSON.parse(formPosition);
        $('#newProject').css({
            top: formPosition.top,
            left: formPosition.left
        });
    }

        $('#hide1').hide();
        $('#hide2').hide();
        $('#hide3').hide();
      
        $('#showOther1').click(function() {
            $('#hide1').toggle(); 
            $(this).text(function(i, text){
                return text === "Show other" ? "Hide other" : "Show other";
            })
        });
    
        $('#showOther2').click(function() {
            $('#hide2').toggle(); 
            $(this).text(function(i, text){
                return text === "Show other" ? "Hide other" : "Show other";
            })
        });
    
        $('#showOther3').click(function() {
            $('#hide3').toggle(); 
            $(this).text(function(i, text){
                return text === "Show other" ? "Hide other" : "Show other";
            })
        });        
    
}); 
}

export { newProjectForm }