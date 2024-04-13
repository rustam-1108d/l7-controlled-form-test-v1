export default () => {
  const formHTML = `
    <form id="registrationForm">
      <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary">
    </form>
  `;

  const formContainter = document.querySelector('.form-container');
  formContainter.innerHTML = formHTML;
};
