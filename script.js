function saveStory() {
  const input = document.getElementById('userLine');
  const content = input.value.trim();

  if (!content) {
    alert("내용을 입력해주세요!");
    return;
  }

  localStorage.setItem('sitalk_latest', content);
  alert("이야기가 저장되었습니다!");

  location.reload();
}
