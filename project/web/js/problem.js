var problem = (  function(){
    var problem_type   = $( '#problem_type').val();
    var problem_detail = $( '#problem_detail').val();
    var description    = $( '#description').val();
    
    $.ajax({
        method: 'post',
        url: "/problem",
        data: $('#ProblemForm').serialize(),
        success: function (res) {
          alert("Send Problem")
        },
        error: function (res) {
          alert("Error")
        }
      })
    console.log("problem_detail");
});
