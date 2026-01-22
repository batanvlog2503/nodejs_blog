document.addEventListener("DOMContentLoaded", function () {
  var courseId
  var deleteForm = document.forms["delete-course-form"] // lấy form có name là delete-course-form
  var forceDeleteForm = document.forms["force-delete-course-form"]
  var restoreForm = document.forms["restore-course-form"]
  var containerForm = $('form[name="container-form]')
  var btnDeleteCourse = document.getElementById("btn-delete-course") // lấy thông qua id
  var btnForceDeleteCourse = document.getElementById("btn-force-delete-course")
  var btnRestore = $(".btn-restore")
  var checkboxAll = $("#checkbox-all")
  var courseItemCheckbox = $('input[name="courseIds[]"]')

  var checkAllSubmitBtn = $(".check-all-submit-btn")
  //var btnForceDeleteCourse =document.getElementById("btn-force-delete-course")
  // when dialog confirm Clickeed
  $("#delete-course-modal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    courseId = button.data("id") // Extract info from data-* attributes
  })

  // when delete Course  clicked
  console.log("btnDeleteCourse")
  console.log(btnDeleteCourse)
  if (btnDeleteCourse) {
    btnDeleteCourse.onclick = function () {
      deleteForm.action = "/courses/" + courseId + "/?_method=DELETE"
      deleteForm.submit()
    }
  }

  // When force delete clicked (chỉ chạy nếu nút tồn tại)
  if (btnForceDeleteCourse) {
    btnForceDeleteCourse.onclick = function () {
      forceDeleteForm.action = "/courses/" + courseId + "/force/?_method=DELETE"
      forceDeleteForm.submit()
    }
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

  console.log(checkboxAll)
  // checkbox all Change
  checkboxAll.change(function () {
    var isCheckedAll = $(this).prop("checked")
    // trả về true hoặc false;
    courseItemCheckbox.prop("checked", isCheckedAll)
  })

  console.log(courseItemCheckbox)

  //checkbox clicked all checkbox
  courseItemCheckbox.change(function () {
    // console.log("123")
    var isCheckedAll =
      courseItemCheckbox.length ===
      $('input[name="courseIds[]"]:checked').length
    console.log(isCheckedAll)

    checkboxAll.prop("checked", isCheckedAll)
    renderCheckAllSubmitBtn()
  })

  // // check submit spam
  // checkAllSubmitBtn.click(function (e) {
  //   // kiểm tra disabled
  //   e.preventDefault()

  //   var isSubmittable = !$(this).hasClass("disabled") // tránh spam
  //   if (isSubmittable) {
  //     containerForm.submit()
  //   }
  // })

  // lắng nghe sự kiện

  containerForm.on("submit", function (e) {
    var isSubmittable = !checkAllSubmitBtn.hasClass("disabled") // tránh spam
    if (!isSubmittable) {
      e.preventDefault()
    }
  })
  // re-render  check all submit button // kiểm tra tất cả có tích chứa
  function renderCheckAllSubmitBtn() {
    // thực hiện khi có checkbox tích
    var checkedCount = $('input[name="courseIds[]"]:checked').length
    console.log(checkedCount)

    if (checkedCount > 0) {
      checkAllSubmitBtn.attr("disabled", false) // gỡ đi disabled
    } else {
      checkAllSubmitBtn.attr("disabled", true)
    }
  }
  console.log(checkAllSubmitBtn)
})
