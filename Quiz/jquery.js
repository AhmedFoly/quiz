
$('#btnResult').click(function(){
            
           var answerquestion1 = $('.question-1:checked').val();
           var answerquestion2 = $('.question-2:checked').val();
           var answerquestion3 = $('.question-3:checked').val();
           var answerquestion4 = $('.question-4:checked').val();
            $.ajax({
                  url:'grade.php',
                  type: "POST",
                  data :{'answer1':answerquestion1,
                  'answer2':answerquestion2,
                  'answer3':answerquestion3,
                  'answer4':answerquestion4

            },
                  success: function(data){
                        $('#page-wrap').html(data);
                  }
            });
      });
       
       
       
        

       