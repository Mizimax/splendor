var problem = (  function(){
    var problem_type   = $( '#problem_type').val();
    var problem_detail = $( '#problem_Detail').val();
    var description    = $( '#description').val();
    if(problem_type === ""){
      alert("Please Choose Type");
      return false;
  }
    if(problem_detail === ""){
      alert("Please Choose Detail")
      return false;
    }
    console.log(description);
    $.ajax({
        method: 'post',
        url: "/problem",
        data: $('#ProblemForm').serialize(),
        success: function (res) {
          alert("Send")
          console.log(res.type_id)
        },
        error: function (res) {
          alert("Error")
        }
      })
});
