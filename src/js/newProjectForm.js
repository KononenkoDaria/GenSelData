import $ from 'jquery';

function newProjectForm() {
    $(document).ready(function() {
      var currentUrl = window.location.href;
      var targetUrl = "http://localhost:3000/newProject.html";
    
      if (currentUrl === targetUrl) {
        $("#close").hide();
      }
      
      $('.newAnimal input').on('input', function() {
        var inputVal = $(this).val().replace(/[^a-zA-Z ]/g, '').replace(/\b\w/g, function(l){ return l.toUpperCase(); });
        var words = inputVal.split(' ');
        if (words.length > 2) {
          words.splice(2);
          inputVal = words.join(' ');
        }
        if (words.length > 1) {
          words[1] = words[1].toLowerCase();
          inputVal = words.join(' ');
        }
        $(this).val(inputVal);
      });

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
        

        const addGene = document.getElementById('addGene');
        const genes = document.getElementById('genes');

        addGene.addEventListener('click', function() {
          const newInput = document.createElement('input');
          newInput.classList.add('new-input');
          const deleteButton = document.createElement('button');
          deleteButton.innerHTML = 'Delete';
          deleteButton.addEventListener('click', function() {
            genes.removeChild(newInput);
            genes.removeChild(deleteButton);
          });
          genes.appendChild(newInput);
          genes.appendChild(deleteButton);
        });

        const addKeyword = document.getElementById('addKeyword');
        const keywords = document.getElementById('keywords');

        addKeyword.addEventListener('click', function() {
          const newInputkeywords = document.createElement('input');
          newInputkeywords.classList.add('new-input');
          const deleteButton = document.createElement('button');
          deleteButton.innerHTML = 'Delete';
          deleteButton.addEventListener('click', function() {
            keywords.removeChild(newInputkeywords);
            keywords.removeChild(deleteButton);
          });
          keywords.appendChild(newInputkeywords);
          keywords.appendChild(deleteButton);
        });
        
        const inputContainer = document.getElementById('genes');

        inputContainer.addEventListener('input', function(event) {
          const target = event.target;
          const regex = /^[A-Z0-9]*$/;
          const isValid = regex.test(target.value);
          if (!isValid) {
            target.value = '';
            target.setCustomValidity('Please, provide standard Gene Name as it is listed in the NCBI Database, use Capital letters and digits only');
          }
        });

        const noGene = document.querySelector('#noGene');
        const geneInputs = document.querySelectorAll('.geneInput input');

        noGene.addEventListener('change', () => {
          geneInputs.forEach((input) => {
            input.disabled = noGene.checked;
          });
        });

        //step 4================

        const scopusOrWoSDatabase = $('#scopusOrWoSDatabase');
        const pubMed_Medline = $('#pubMed_Medline');
        const other = $('#other');
        const internationalConference = $('#internationalConference');
        const regionalConference = $('#regionalConference');
        const inPrint = $('#inPrint');
        const notPublishedData = $('#notPublishedData');
        const notPublishedDataURL = $('#notPublishedDataURL');



        $('input[name="link"]').on('change',function() {
          if (scopusOrWoSDatabase.prop('checked') || pubMed_Medline.prop('checked')) {
            if (scopusOrWoSDatabase.prop('checked')) {
              scopusOrWoSDatabase.prop('disabled', false);
              pubMed_Medline.prop('disabled', true);
            } else if (pubMed_Medline.prop('checked')) {
              scopusOrWoSDatabase.prop('disabled', true);
              pubMed_Medline.prop('disabled', false);
            } else {
              pubMed_Medline.prop('disabled', false);
              scopusOrWoSDatabase.prop('disabled', false);
            }
            $('#regionalConference').prop('disabled', true);
            $('#other').prop('disabled', true);
            $('#internationalConference').prop('disabled', true);
          } else {
            $('input[name="link"]').not(this).prop('checked', false); // снимаем выбор с других checkbox
            $('#scopusOrWoSDatabase').prop('disabled', true);
            $('#pubMed_Medline').prop('disabled', true);
            if ($(this).val() == 'other'){
              $('#other').prop('disabled', false);
            } else if ($(this).val() == 'internationalConference') {
              $('#internationalConference').prop('disabled', false);
            } else if ($(this).val() == 'regionalConference') {
              $('#regionalConference').prop('disabled', false);
              $('#inPrint').prop('disabled', false);
              $('#notPublishedData').prop('disabled', false);
            } else if ($(this).val() == 'notPublishedData'){
              $('#notPublishedDataURL').prop('disabled', false);
            }
          }
        });
        
}); 
}

export { newProjectForm }