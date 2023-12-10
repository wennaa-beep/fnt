import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TableofelementsPage } from './tableofelements.page';

describe('TableofelementsPage', () => {
  let component: TableofelementsPage;
  let fixture: ComponentFixture<TableofelementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableofelementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
