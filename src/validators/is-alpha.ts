import { Directive } from '@angular/core';

import { getValidator, getDirectiveName, getDirectiveProviders } from './helpers';

const name = 'isAlpha';

export const isAlpha = getValidator(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [getDirectiveProviders(name)]
})
export class AlphaValidator { }
