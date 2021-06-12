import { TestBed } from '@angular/core/testing';

import { CodePracticeServiceService } from './code-practice-service.service';

describe('CodePracticeServiceService', () => {
  let service: CodePracticeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodePracticeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
