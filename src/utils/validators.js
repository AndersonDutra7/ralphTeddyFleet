export function validarCamposObrigatorios(campos) {
  for (const key in campos) {
    if (!campos[key] || campos[key].toString().trim() === '') {
      return false;
    }
  }
  return true;
}
