import { describe, expect, it } from 'vitest';
import { getEnvironment } from './getEnvironment.utils';

describe('getEnvironment', () => {
  it('función que devuelve las variables de entorno ', () => {
    const result = getEnvironment();
    expect(result).toEqual(import.meta.env);
  })
});