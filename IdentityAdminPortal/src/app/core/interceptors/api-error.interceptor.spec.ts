/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * Unit tests for the API error interceptor function.
 * Verifies that the interceptor is properly created and injected.
 */
import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { apiErrorInterceptor } from './api-error.interceptor';

describe('apiErrorInterceptorInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => apiErrorInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
