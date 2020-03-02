const text = 'Hola Mundo';
const frameworks = ['React', 'Vue', 'Angular', 'Svelte'];

test('It should has the word Ironman', () => {
  expect(text).toMatch(/Mundo/);
});

// Test arrays
test('It should has React', () => {
  expect(frameworks).toContain('React');
});

// Test numbers
test('It should be greater than', () => {
  expect(10).toBeGreaterThan(9);
});

// Test Booleans
test('It should be true', () => {
  expect(true).toBeTruthy();
});

// Reverse strings function
const reverseString = (str, cb) => {
  cb(str.split('').reverse().join(''));
};

// Test callbacks
test('The callback should return a reversed word', () => {
  reverseString('Platzi', (str) => {
    expect(str).toBe('iztalP');
  });
});

const reverseStringPromise = str => new Promise((resolve, reject) => {
  if (!str) {
    reject(Error('Error'));
  }
  resolve(str
    .split('')
    .reverse()
    .join(''));
});

test('Probar una promesa', () => reverseStringPromise('hola').then((string) => {
  expect(string).toBe('aloh');
}));

test('Probar async/await', async () => {
  const string = await reverseStringPromise('hola');
  expect(string).toBe('aloh');
});

// afterEach(() => {
//   console.log('Despues de cada prueba');
// });

// afterAll(() => {
//   console.log('Despues de todas las pruebas');
// });

// beforeEach(() => {
//   console.log('Antes de cada prueba');
// });

// beforeAll(() => {
//   console.log('Antes de todas las pruebas');
// });