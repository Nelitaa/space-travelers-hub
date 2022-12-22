import rocketsReducer from './rockets';

describe('Rockets reducer', () => {
  test('should handle reserveRocket', () => {
    expect(rocketsReducer({
      rockets: [{
        rocket_id: 1,
        rocket_name: 'Falcon 1',
        rocket_description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
        rocket_image: 'https://live.staticflickr.com/65535/49906286293_9a5a3a3e0e_o.jpg',
        rocket_reserved: false,
      }],
    }, {
      type: 'rockets/reserveRocket',
      payload: 1,
    })).toEqual({
      rockets: [{
        rocket_id: 1,
        rocket_name: 'Falcon 1',
        rocket_description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
        rocket_image: 'https://live.staticflickr.com/65535/49906286293_9a5a3a3e0e_o.jpg',
        rocket_reserved: true,
      }],
    });
  });
});
