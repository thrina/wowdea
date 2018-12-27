import { TestBed } from '@angular/core/testing';

import { FileUploderService } from './file-uploder.service';

describe('FileUploderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileUploderService = TestBed.get(FileUploderService);
    expect(service).toBeTruthy();
  });
});
