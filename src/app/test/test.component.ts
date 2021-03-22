import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
})
export class TestComponent {
  public message: string = 'Hi!';

  @Output() private filterChange = new EventEmitter<void>();

  public save(): void {
    this.filterChange.emit();
  }

}
