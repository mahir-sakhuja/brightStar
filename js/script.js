
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

if (course) {
    const courseField = document.getElementById("course");
    if (courseField) {
        courseField.value = course;
    }
}