import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyInventoryComponent } from './whiskey-inventory.component';

describe('WhiskeyInventoryComponent', () => {
    let component: WhiskeyInventoryComponent;
    let fixture: ComponentFixture<WhiskeyInventoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WhiskeyInventoryComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WhiskeyInventoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
