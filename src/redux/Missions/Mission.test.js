import { joinMission } from './Missions';

describe('mission reducer test', () => {
  it('Expect Id of mission to be 2', () => {
    expect(joinMission(2).payload).toBe(2);
  });
  it('Expect type of joinMission dispatch to be JOIN', () => {
    expect(joinMission(2).type).toBe('spacetravelers/missions/JOIN');
  });
});
