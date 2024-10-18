import { Inject, Injectable } from '@angular/core';

// POdemos usar el (@Injectable) para decirle que este acepta (DI framework)
// @Injectable()
export class OtherService {}

// Aqui estamos intentando injecat en (SimpleService) la dependencia de (OtherService)(dependencia)
// ERROR: Esto no funciona y nos da un error.
// Para resolve esto necesitmos decirle a angular (explicitamente) que
// queremos (inyectar) para el parametro (otheService) la instancia de (OtherService).
// Oh! soopresa para esto usamos el decorador (@Inject)
@Injectable()
export class SimpleService {
  otherService: OtherService;

  // Ahora Angular ya sabe que inyectar en el constructor.
  constructor(@Inject(OtherService) otherService: OtherService) {
    this.otherService = otherService;
  }
}
