    function addPost() {
      const title = document.getElementById("post-title").value;
      const content = document.getElementById("post-content").value;

      if (title.trim() === "" || content.trim() === "") {
        alert("Preencha o título e o conteúdo.");
        return;
      }

      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="comment-form">
          <textarea rows="2" placeholder="Comente aqui..."></textarea>
          <button onclick="addComment(this)">Comentar</button>
        </div>
        <div class="comments"></div>
      `;

      document.getElementById("posts").prepend(postDiv);

      // Limpar campos
      document.getElementById("post-title").value = "";
      document.getElementById("post-content").value = "";
    }

    function addComment(button) {
      const textarea = button.previousElementSibling;
      const commentText = textarea.value;

      if (commentText.trim() === "") {
        alert("Comentário vazio.");
        return;
      }

      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.innerText = commentText;

      const commentsContainer = button.parentElement.nextElementSibling;
      commentsContainer.appendChild(commentDiv);

      textarea.value = "";
    }