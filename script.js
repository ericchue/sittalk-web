function saveStory() {
  const input = document.getElementById('userLine');
  const content = input.value.trim();

  if (!content) {
    alert("내용을 입력해주세요!");
    return;
  }

  // 간단히 로컬스토리지에 저장 (임시)
  localStorage.setItem('sitalk_latest', content);
  alert("이야기가 저장되었습니다!");

  // 메인 페이지로 돌아가기
  window.location.href = "index.html";
}
