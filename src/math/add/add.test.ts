import { describe, it, expect } from 'vitest';
import { add } from './add';

describe('Add function', () => {
    it('should add numbers correctly', () => {
      expect(add(1, 1)).toBe(2);
    });
  
    it('should not add numbers incorrectly', () => {
      expect(add(1, 1)).not.toBe(3);
    });
  });