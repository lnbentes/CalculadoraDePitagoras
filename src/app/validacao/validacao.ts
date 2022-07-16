export class Validacao{
  /**
   *Converter o valor numerico de string para float
   * @param strNumero string
   * @returns um valor numerico float
   */
  converterParaNumero(strNumero: string){
    if(strNumero == null){
      return 0
    }
    if(this.eNumerico(strNumero)){
      return parseFloat(strNumero)
    }
    return 0
  }

  /**
   *Verificar se a string e um valor numerico
   * @param strNumero string
   * @returns true ou false depedendo do resultado do match com um regex
   */
  eNumerico(strNumero: string){
    if(strNumero == null){
      return false
    }
    return strNumero.match("[-+]?[0-9]*\\.?[0-9]+")
  }
}
