import { TestBed } from '@angular/core/testing';

import { Projects } from '../components/projects/projects';

describe('Projects', () => {
  let service: Projects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
