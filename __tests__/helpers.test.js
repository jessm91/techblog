const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-04-22 17:15:06');
  
    expect(format_date(date)).toBe('4/22/2021');
  });

const {format_plural} = require('../utils/helpers')

test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('bear', 2);
      const single = format_plural('cat', 1);
      
      expect(plural).toBe('bears');
      expect(single).toBe('cat');
});