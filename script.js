document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('bloqueada')) return;

    // Marcar como cursada
    materia.classList.toggle('cursada');

    // Desbloquear las que dependían de esta
    const codigo = materia.dataset.codigo;
    const cursada = materia.classList.contains('cursada');

    document.querySelectorAll(`.materia[data-prereq="${codigo}"]`).forEach(dep => {
      if (cursada) {
        dep.classList.remove('bloqueada');
      } else {
        dep.classList.add('bloqueada');
        dep.classList.remove('cursada');
      }
    });
  });
});
