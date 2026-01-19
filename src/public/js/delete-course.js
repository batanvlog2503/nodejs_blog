document.addEventListener("DOMContentLoaded", function () {
  var courseId
  var deleteForm = document.forms["delete-course-form"] // lấy form có name là delete-course-form
  var forceDeleteForm = document.forms["force-delete-course-form"]
  var restoreForm = document.forms["restore-course-form"]
  var btnDeleteCourse = document.getElementById("btn-delete-course") // lấy thông qua id
  var btnRestore = $(".btn-restore")
  //var btnForceDeleteCourse =document.getElementById("btn-force-delete-course")
  // when dialog confirm Clickeed
  $("#delete-course-modal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    courseId = button.data("id") // Extract info from data-* attributes
  })

  // when delete Course  clicked
  console.log(btnDeleteCourse)
  btnDeleteCourse.onclick = function () {
    // [DELETE]
    deleteForm.action = "/courses/" + courseId + "/force?_method=DELETE"
    deleteForm.submit()
  }
  // sử dụng với $ là JQuery
  // btnForceDeleteCourse.onclick = function () {
  //   // [DELETE] force-delete
  //   forceDeleteForm.action = "/courses/" + courseId + "/force?_method=DELETE"
  //   forceDeleteForm.submit()
  // }
  console.log(btnRestore)

  btnRestore.click(function (e) {
    // [UPDATE PATCH 1 FIELD]
    // sử dụng với JQuery
    e.preventDefault()
    console.log("restore Clicked")

    var courseId = $(this).data("id")
    restoreForm.action = "/courses/" + courseId + "/restore?_method=PATCH"
    restoreForm.submit()
  })
})
