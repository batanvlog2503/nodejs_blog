document.addEventListener("DOMContentLoaded", function () {
  var courseId
  var deleteForm = document.forms["delete-course-form"] // lấy form có name là delete-course-form
  var btnDeleteCourse = document.getElementById("btn-delete-course")

  // when dialog confirm Clickeed
  $("#delete-course-modal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    courseId = button.data("id") // Extract info from data-* attributes
  })

  // when delete Course  clicked
  console.log(btnDeleteCourse)
  btnDeleteCourse.onclick = function () {
    deleteForm.action = "/courses/" + courseId + "?_method=DELETE"
    deleteForm.submit()
  }
})
