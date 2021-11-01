import getLevel from '../js/app';
import fetchData from '../js/http/fetch-data';

jest.mock('../js/http/fetch-data');

test('getLevel test err', () => {
  fetchData.mockReturnValue(new Error('Mock this!'));

  expect(getLevel(1)).toEqual('Информация об уровне временно недоступна');
});

test('getLevel test right', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 80 });

  expect(getLevel(1)).toEqual('Ваш текущий уровень: 80');
});
